import { auth, db } from '@/utils/firebase';
import { useEffect } from 'react';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
export default function useAuthUser(){
    const [user] = useAuthState(auth)

    useEffect(() => {
       if(user){
        const userRef = doc(db , `users/${user.uid}` )
        getDoc(userRef).then(snapshot => {
            if(!snapshot.exists()){
                setDoc(snapshot.ref, {
                    name : user.displayName,
                    photoURL : user.photoURL,
                    timestamp : serverTimestamp(),
                })
            }
        })
       }
    }, [user])

    return user;
    
}