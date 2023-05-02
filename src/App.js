import './App.css';
import { useRef,useEffect,useState } from "react";
import CryptoJS from 'crypto-js';
import Clipboard from 'clipboard';




function App() {

  const [Message, setMessage] = useState("");
  const Key = "123456"
  const h1Ref = useRef(null);


  function handleCopy() {
    const text = h1Ref.current.innerText;
    navigator.clipboard.writeText(text);
    alert("Copied")
  }

  useEffect(() => {
    new Clipboard('.copy-btn');
  }, []);

  function encryptMessage(Message){
    const encrypted = CryptoJS.DES.encrypt(Message, Key, { mode: CryptoJS.mode.ECB }).toString();
    return encrypted
  }


  return (
    <div className='MainContainer'>
        <input
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Your User Message"
          type="text"
          name="Message"
          maxLength={40}
          required
        />

      <h1>Your Code is : </h1>
      <div>
        
        <h1 ref={h1Ref} onClick={handleCopy}>{Message !== "" ? encryptMessage(Message) : ""}</h1>
      </div>
      <p className='CopyRight'>Developed by Mohammad Chavoshi 2023 ©</p>
    </div>
  );
}

export default App;
