import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/utils/firebase";

export default function useRoom(roomId, userId) {
  const isUserRoom = roomId.includes(userId);
  const collectionId = isUserRoom ? "users" : "rooms";
  const docId = isUserRoom ? roomId.replace(userId, "") : roomId;
  const [snapshot] = useDocument(
    docId ? doc(db, `${collectionId}/${docId}`) : null
  );
  if(!snapshot?.exists()) return null;

  return {
    id : snapshot.id,
    photoUrl : snapshot.photoUrl,
    ...snapshot.data()
  }
}
