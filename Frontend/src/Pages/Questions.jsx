import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Home";

function Questions() {
  const subjectId = useContext(UserContext);
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!subjectId) return;

    fetch(`http://localhost:3000/questions?subject_id=${subjectId}`)
      .then((res) => res.json())
      .then(async (questions) => {
        const questionsWithOptions = await Promise.all(
          questions.map(async (q) => {
            const res = await fetch(
              `http://localhost:3000/options?question_id=${q.question_id}`
            );
            const options = await res.json();
            return { ...q, options };
          })
        );
        setData(questionsWithOptions);
      })
      .catch((error) =>
        console.error("Error fetching questions/options:", error)
      );
  }, [subjectId]);

  const handleOptionChange = (questionId, selectedOptionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOptionId,
    }));
  };

  const handleSubmit = () => {
    console.log("Selected Answers:", answers);
    alert("Answers submitted! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Select the most suitable answers
        </h1>

        {data.length > 0 ? (
          data.map((question, index) => (
            <div
              key={question.id}
              className="mb-8 p-5 bg-gray-50 rounded-xl shadow-md transition duration-300"
            >
              <p className="font-semibold text-lg mb-4">
                {index + 1}. {question.question_text}
              </p>

              <div className="space-y-3">
                {question.options.map((opt) => (
                  <label
                    key={opt.option_id}
                    className="flex items-center gap-3 cursor-pointer p-2 hover:bg-blue-100 rounded-lg transition-all duration-200"
                  >
                    <input
                      type="radio"
                      name={`mcq-${question.id}`}
                      value={opt.option_id}
                      checked={answers[question.id] === opt.option_id}
                      onChange={() =>
                        handleOptionChange(question.id, opt.option_id)
                      }
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span className="text-gray-700">{opt.option_text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">
            No questions available for this subject.
          </p>
        )}

        {data.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              ✅ Submit Answers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
