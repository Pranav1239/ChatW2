import Navbar from "@/components/Header/Navbar";
import Slidebar from "@/components/Slidebar/Slidebar";
import useAuthUser from "@/hooks/useAuthUser";
import Link from "next/link";
import { useRouter } from "next/navigation";

function chat() {
    const user = useAuthUser();
    const router = useRouter();
    console.log(user)
    if(!user){
       return(
        <Link
        href={"/login"}
        className="">
            <div className="text-center mt-12 text-blue-500 underline font-medium text-xl">
                Please <span className="text-blue-500">Login</span>
            </div>
        </Link>
       )
    }
  
    return (
      <div className='app'> 
        <div className='app__body'>
          <Slidebar user={user} />
        </div>
      </div>
    )
}

export default chat