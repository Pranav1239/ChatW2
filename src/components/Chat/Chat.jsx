import useRoom from "@/hooks/useRoom";
import { AddPhotoAlternate, MoreVert } from "@mui/icons-material";
import { Avatar, CircularProgress, IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import MediaPreview from "../Common/MediaPreview";
import ChatSend from "./ChatSend";
import { nanoid } from "nanoid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/utils/firebase";
import Compressor from "compressorjs";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import useChatMessages from "@/hooks/useChatMessages";
import MainMessages from "./MainMessages";

export default function Chat({ user }) {
  const router = useRouter();
  const roomId = router.query.roomId ?? "";
  const userId = user.uid;
  const [image, setImage] = useState(null);
  const [src, setSrc] = useState("");
  const [openMenu , setOpenMenu] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [input, setInput] = useState("");
  const room = useRoom(roomId, userId);
  const messages = useChatMessages(roomId)
  if (!room) return null;

  function closepreview() {
    setSrc("");
  }

  function showPreview(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSrc(reader.result);
      };
    }
  }

  async function deleteRoom(){
    setOpenMenu(null);
    setIsDelete(true);
    try {
      const userChatRef = doc(db , `users/${userId}/chats/${roomId}`)
      const roomRef = doc(db , `rooms/${roomId}`)
      const roomMessagesRef = collection(db , `rooms/${roomId}/messages`)
      const roomMessages = await getDocs(query(roomMessagesRef))
      const imageFiles = []
      roomMessages?.docs.forEach(doc => {
        if(doc.data().imageName){
          imageFiles.push(doc.data().imageName)
        }
      })

      await Promise.all([
        deleteDoc(userChatRef),
        deleteDoc(roomRef),
        ...roomMessages.docs.map(doc => deleteDoc(doc.ref)),
        ...imageFiles.map(imageName => (
          deleteObject(ref(storage , `images/${imageName}`))
        ))
      ])
    } catch (error) {
      console.error("Error deleting room : " , error);
    } finally {
      setIsDelete(false);
    }
  }

  async function SendMessage(event) {
    event.preventDefault();

    setInput("");
    if (image) closepreview();
    const imageName = nanoid();
    await setDoc(doc(db, `users/${userId}/chats/${roomId}`), {
      name: room.name,
      photoUrl: room.photoUrl || null,
      timestamp: serverTimestamp(),
    });
    const newDOc = await addDoc(collection(db, `rooms/${roomId}/messages`), {
      name: user.displayName,
      message: input,
      uid: user.uid,
      timestamp: serverTimestamp(),
      time: new Date().toUTCString(),
      ...(image ? { imageUrl: "uploading", imageName } : {}),
    });
    if (image) {
      new Compressor(image, {
        quality: 0.8,
        maxHeight: 600,
        async success(result) {
          setSrc("");
          setImage(null);
          await uploadBytes(ref(storage, `images/${imageName}`), result);
          const url = await getDownloadURL(ref(storage, `images/${imageName}`));
          await updateDoc(doc(db, `rooms/${roomId}/messages/${newDOc.id}`), {
            imageUrl: url,
          });
        },
      });
    }
  }
  return (
    <div className="chat">
      <div className="chat__background" />
      {/* Header */}
      <div className="chat__header">
        <div className="avatar__container">
          <Avatar src={room.photoUrl} alt={room.name} />
        </div>
        <div className="chat__header--info">
          <h3>{room.name}</h3>
        </div>
        <div className="chat__header--right">
          <input
            id="image"
            style={{ display: "none" }}
            accept="image/*"
            type="file"
            onChange={showPreview}
          />
          <IconButton>
            <label style={{ cursor: "pointer", height: 24 }} htmlFor="image">
              <AddPhotoAlternate />
            </label>
          </IconButton>
          <IconButton onClick={event => setOpenMenu(event.currentTarget)}>
            <MoreVert />
          </IconButton>
          <Menu 
          id="menu" 
          anchorEl={openMenu} 
          open={!!openMenu} 
          onClose={()=> setOpenMenu(null)}
          keepMounted>
            <MenuItem
            onClick={deleteRoom}
            >DeleteRoom</MenuItem>
          </Menu>
        </div>
      </div>
      {
        isDelete && (
          <div className="chat__deleting">
            <CircularProgress />
          </div>
        )
      }
      <div className="chat__body--container">
        <div className="chat__body">
          <MainMessages messages={messages} user={user} roomid={roomId} />
        </div>
      </div>
        

      <MediaPreview src={src} closepreview={closepreview} />
      <div>
        <ChatSend
          input={input}
          onChange={(event) => setInput(event.target.value)}
          user={user}
          room={room}
          image={image}
          roomId={roomId}
          SendMessage={SendMessage}
        />
      </div>
    </div>
  );
}
