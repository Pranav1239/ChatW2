import { CloseRounded } from "@mui/icons-material";

export default function MediaPreview({ src , closepreview}) {
    if(!src) return null;
  return (
    <div className="mediaPreview">
        <CloseRounded onClick={closepreview} />
    </div>
  )
}
