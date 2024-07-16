import { useState } from "react";
import '../styles/customStyle.css'
export default function Button() {
  
    const [isClick, setIsClicked] = useState<boolean>(false)

    return (
    <button
      className="custom-button"
      onClick = {() => setIsClicked(!isClick)}
    >
       <span>
        Done
      </span>
    </button>
  );
}