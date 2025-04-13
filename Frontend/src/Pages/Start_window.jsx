import { useState } from "react";
import Questions from "./Questions";

function Start(subject) {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="text-center pt-16 ">
      <p className="text-3xl font-bold pb-10">Ready to Start?</p>
      {!startQuiz ? (
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300" onClick={() => setStartQuiz(true)}>
        Start Quiz
      </button>
      ) : (
        <Questions value={subject}/>
      )}
    </div>
  );
}

export default Start;
