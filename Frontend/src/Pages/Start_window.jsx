import { useState } from "react";
import { Link } from "react-router-dom";

function Start({ subject }) {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-16 w-full max-w-xl text-center transition-all duration-500 ease-in-out animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Let's Begin!
        </h1>

        {subject?.subject_name && (
          <p className="text-xl font-medium text-blue-600 mb-6">
            Subject: {subject.subject_name}
          </p>
        )}

        <p className="text-gray-600 text-md sm:text-lg mb-10">
          Prepare yourself to take the quiz and challenge your knowledge.
        </p>

        <Link to="/Questions">
          <button
            onClick={() => setStartQuiz(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
             Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Start;
