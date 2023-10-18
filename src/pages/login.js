import Navbar from "@/components/Header/Navbar";
import { auth } from "@/utils/firebase";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function login() {
  const [signInwithGoogle] = useSignInWithGoogle(auth);
  return (
    <>
      <div className="CustomImg h-screen flex flex-col gap-4 justify-center items-center">
        <Button
          className="px-8 py-4 bg-purple-700 hover:bg-purple-900  text-white rounded inline-block mt-8 font-semibold"
          onClick={() => signInwithGoogle()}
        >
          Login with google
        </Button>
        <p className="text-white font-bold">Back to 
        <Link href={"/"}>        
        <span className="text-blue-700 underline"> home</span>
        </Link>
        </p>
      </div>
    </>
  );
}
