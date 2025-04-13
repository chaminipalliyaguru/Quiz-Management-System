import { useState } from "react";
import Start from "./Start_window"

function Home() {
  const [value, setValue] = useState("");

  const handleChange = (subject) => {
    setValue(subject);

  };

  return (
    <>
    <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-800 drop-shadow-md">
          Welcome to Knowledge Measurment Website
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Select a subject to begin your quiz
        </p>
      </header>
    {!value ? (
      
      <div className="grid grid-cols-4 gap-4 pl-12 pr-14">
        <button
          className="bg-blue-500 h-28 rounded-3xl text-center text-5xl text-amber-50"
          onClick={() => handleChange("Science")}
        >
          Science
        </button>
        <button
          className="bg-pink-500 rounded-3xl text-center text-5xl text-amber-50"
          onClick={() => handleChange("Mathematics")}
        >
          Mathematics
        </button>
        <button
          className="bg-amber-500 rounded-3xl text-center text-5xl text-amber-50"
          onClick={() => handleChange("Tamil")}
        >
          Tamil
        </button>
        <button
          className="bg-emerald-500 rounded-3xl text-center text-5xl text-amber-50"
          onClick={() => handleChange("English")}
        >
          English
        </button>
      </div>) : (
        <Start/>
      )}
    </>
  );
}
export default Home;
