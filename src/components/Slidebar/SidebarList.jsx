import { CircularProgress } from "@mui/material";
import SidebarItems from "./SidebarItems";

export default function SidebarList({ title, data }) {
  if (!data) {
    return (
      <div className="loader__container sidebar__loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="sidebar__chat--container">
      <h4 className="text-2xl font-semibold  p-2 ">{title}</h4>
      {
      data.map(item => (
        <SidebarItems key={item.id} item={item} />
      ))
      }
    </div>
  );
}
