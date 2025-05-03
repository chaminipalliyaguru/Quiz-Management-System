import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

function Home({ value, setValue }) {

  const [subject, setSubject] = useState([]);
  const navigate = useNavigate();
  const colors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-yellow-500",
    "bg-indigo-600",
    "bg-red-600",
    "bg-teal-600",
  ];

  useEffect(() => {
    fetch("http://localhost:3000/subjects")
      .then((res) => res.json())
      .then((data) => {
        setSubject(data);
        console.log("Subjects fetched:", data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (subId) => {
    setValue(subId);
    navigate("/start");
  };

  return (
    <>
      <header className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
          Welcome to the Knowledge Measurement Website created by chamini
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mt-3">
          Select a subject to begin your quiz
        </p>
      </header>

      <main className="px-4 sm:px-6 lg:px-16 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subject.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleChange(item.subject_id)}
              className={`${
                colors[index % colors.length]
              } hover:brightness-110 transition duration-300 ease-in-out shadow-lg rounded-2xl py-6 px-4 text-white text-2xl sm:text-3xl font-semibold text-center`}
            >
              {item.subject_name}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
