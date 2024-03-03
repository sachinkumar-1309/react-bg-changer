import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4 ">
        <div className="flex flex-wrap justify-center bg-white shadow-lg px-3 py-2 rounded-md gap-2">
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
            className="text-white px-3 py-2 rounded outline-none">
            Red
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
            className="text-white px-3 py-2 rounded outline-none">
            Blue
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
            className="text-white px-3 py-2 rounded outline-none">
            green 
          </button>
          <button
            style={{ backgroundColor: "Black" }}
            onClick={() => {
              setColor("Black");
            }}
            className="text-white px-3 py-2 rounded outline-none">
            Black
          </button>
          <button
            style={{ backgroundColor: "Orange" }}
            onClick={() => {
              setColor("Orange");
            }}
            className="text-white px-3 py-2 rounded outline-none">
            Orange
          </button>
          <button
            style={{ backgroundColor: "Pink" }}
            onClick={() => {
              setColor("Pink");
            }}
            className="text-gray-500 px-3 py-2 rounded outline-none">
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
