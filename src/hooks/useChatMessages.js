import { db } from "@/utils/firebase";
import { collection, orderBy, query , doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

export default function useChatMessages(roomId) {
  const [snapshot] = useCollection(
    roomId
      ? query(
          collection(db, `rooms/${roomId}/messages`),
          orderBy("timestamp", "asc")
        )
      : null
  );

  const messages = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return messages;
}
