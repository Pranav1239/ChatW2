import { ChatRounded, Home, Person2Rounded, VerifiedUserRounded } from "@mui/icons-material";
import MenuNav from "./MenuNav";

export default function Navbar() {
  return (
    <div className=" p-4 ">
        <div className="text-white flex flex-row  justify-center gap-12 lg:gap-28 items-center">
            <Home className="hover:text-purple-700" />
            <ChatRounded className="hover:text-purple-700" />
            <MenuNav />
        </div>

    </div>
  )
}
