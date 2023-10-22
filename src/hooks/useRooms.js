import { db } from '@/utils/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function useRooms() {
  const [snapshot] = useCollection(query(collection(db , "rooms") ,
   orderBy('timestamp' , 'desc')
  ))

  const rooms = snapshot?.docs.map((doc)=> ({
    id : doc.id,
    ...doc.data()
  }))

  // console.log(rooms)
  return rooms;
}
