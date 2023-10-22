import React from "react";
import Typed from "typed.js";

export default function Tpyejs() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Chat</i> V2.", "&amp; Chat with Your Friends"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="text-black text-center text-2xl lg:text-5xl font-bold" >
      <span ref={el} />
    </div>
  );
}
