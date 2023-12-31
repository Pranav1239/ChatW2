import { auth } from "@/utils/firebase";
import { Button } from "@mui/material";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function Login() {
    const [signInwithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Button
          
          className="px-8 py-4 bg-purple-700 hover:bg-purple-900  text-white rounded inline-block mt-8 font-semibold"
          onClick={() => signInwithGoogle()}
        >
          Login with google
        </Button>
      </div>
    </div>
  );
}
