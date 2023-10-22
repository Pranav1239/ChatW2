import { auth } from "@/utils/firebase";
import Link from "next/link";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function login() {
  const [signInwithGoogle] = useSignInWithGoogle(auth);
  return (
    <>
      <div className=" h-screen flex flex-col gap-4 justify-center items-center">
        <button
          className="px-8 py-4 bg-slate-950 hover:bg-slate-950  text-white rounded inline-block mt-8 font-semibold"
          onClick={() => signInwithGoogle()}
        >
          Login with google / Change Your Account
        </button>
        <p className="text-black font-bold">Back to 
        <Link href={"/"}>        
        <span className="text-blue-700 underline"> home</span>
        </Link>
        </p>
      </div>
    </>
  );
}