import { Avatar } from "@mui/material";
import Link from "next/link";

export default function SidebarItems({ item}) {
  return (
    <Link
    className="link"
    href={`/?roomId=${item.id}`}
    >
        <div className="sidebar__chat">
            <div className="avatar__container">
                <Avatar
                src={item?.photoUrl}
                style={{width: 45, height: 45}}
                />
            </div>
            <div className="sidebar__chat--info">
                <h2>{item.name}</h2>
            </div>
        </div>
    </Link>
  )
}
