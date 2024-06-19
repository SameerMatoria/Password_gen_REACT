import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()_+{}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed])

  return (
    <div className=" w-full h-screen flex justify-center text-center bg-gray-900 items-center main">
      <div className="rounded-lg Gen_container">
        <h1 className="p-4 text-lg">Password Generator</h1>
        <input
          type="text"
          value={password}
          className="outline-none w-4/5 text-center border-red w-30 py-1 px-3 input-block text-black"
          placeholder="pass"
        />
        <button className="w-1/5 p-1 bg-black btn ">copy</button>
        <div className="inputs">
          <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            className="cursor-pointer w-24"
          />
          <label htmlFor="">Length: {length}</label>
          </div>
          <div>
            <input type="checkbox" className="mx-2" defaultChecked={numberAllowed} 
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="">Allow Numbers </label>
          </div>
          <div>
            <input type="checkbox" className="mx-2" defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="">Allow Characters </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
