import { ArrowRightAltSharp } from "@mui/icons-material";

export default function ChatSend({
    input,
    onChange,
    image,
    user,
    room,
    roomId,
    SendMessage
}){
    const canSendMessage = input.trim() || (input === "" && image)
  return (
    <div className="chat__footer mb-4">
        <form action="">
            <input
            value={input}
            onChange={onChange}
            type="text"
            placeholder="type a message"
            />
            <button 
            onClick={canSendMessage ? SendMessage : () => null}
            type="submit" className="send__btn">
                <ArrowRightAltSharp />
            </button>
        </form>
    </div>
  )
}
