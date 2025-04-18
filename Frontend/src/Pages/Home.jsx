import { useEffect, useState, useContext, createContext } from "react";
import Start from "./Start_window";

export const UserContext = createContext(null);

function Home({value,setValue}) {
  const [subject, setSubject] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/subjects")
      .then((res) => res.json())
      .then((data) => setSubject(data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (sub) => {
    setValue(sub);
  };

  return (
    <>
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold text-gray-800 drop-shadow-md">
            Welcome to Knowledge Measurement Website
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Select a subject to begin your quiz
          </p>
        </header>
        {!value ? (
          <div className="grid grid-cols-4 gap-4 pl-12 pr-14">
            {subject.map((item) => (
              <button
                key={item.id}
                className="bg-blue-500 h-28 rounded-3xl text-center text-5xl text-amber-50"
                onClick={() => handleChange(item.subject_name)}
              >
                {item.subject_name}
              </button>
            ))}
          </div>
        ) : (
          <Start />
        )}
    </>
  );
}
export default Home;
