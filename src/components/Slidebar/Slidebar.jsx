import {
  Add,
  ExitToApp,
  Home,
  Message,
  PeopleAltOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton, Input } from "@mui/material";
import SideBarmenu from "./SideBarmenu";
import { useState } from "react";
import SidebarList from "./SidebarList";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import useRooms from "@/hooks/useRooms";
import useUsers from "@/hooks/useUsers";
import useChats from "@/hooks/useChats";

const sidebarMenu = [
  {
    id: 1,
    icon: <Home />,
  },
  {
    id: 2,
    icon: <Message />,
  },
  {
    id: 3,
    icon: <PeopleAltOutlined />,
  },
];

export default function Slidebar({ user }) {
  const [menu, setMenu] = useState(1);
  const [open, setOpen] = useState(false);
  const [roomname, setRoomname] = useState("");
  const router = useRouter();
  const rooms = useRooms();
  const users = useUsers(user);
  const chats = useChats(user);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  async function createRoom() {
    // console.log(roomname);
    if (roomname?.trim()) {
      const roomsRef = collection(db, "rooms");
      const newRoom = await addDoc(roomsRef, {
        name: roomname,
        timestamp: serverTimestamp(),
      });
      handleClose();
      setRoomname("");
      setMenu(2);
      router.push(`/?roomId=${newRoom.id}`);
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header--left">
          <Avatar src={user.photoURL} alt="user" />
          <h4>{user.displayName}</h4>
        </div>
        <div className="sidebar__header--right">
          <IconButton onClick={handleSignOut}>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      {/* sidebar menu */}
      <div className="sidebar__menu">
        {sidebarMenu.map((tab) => (
          <SideBarmenu
            key={tab.id}
            onClick={() => setMenu(tab.id)}
            isActive={tab.id === menu}
          >
            <div className="sidebar__menu--home">
              {tab.icon}
              <div className="sidebar__menu--line" />
            </div>
          </SideBarmenu>
        ))}
      </div>

      {menu === 1 ? (
        <SidebarList title="Chats" data={chats} />
      ) : menu === 2 ? (
        <SidebarList title="Rooms" data={rooms} />
      ) : menu === 3 ? (
        <SidebarList title="Users" data={users} />
      ) : menu === 4 ? (
        <SidebarList title="Search Results" data={data} />
      ) : null}

      <div className="sidebar__chat--addRoom">
        <IconButton onClick={handleClickOpen}>
          <Add />
        </IconButton>
      </div>

      <div>
        <Dialog maxWidth="sm" open={open} onClose={handleClose}>
          <DialogTitle>Create A New Room</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Create a public room, where every user can join ur room.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Room Name"
              type="text"
              fullWidth
              variant="standard"
              className="mt-10"
              onChange={(e) => setRoomname(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={createRoom}>Create</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
