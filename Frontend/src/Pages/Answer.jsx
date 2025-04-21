import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Home";

function Answer() {
  const value = useContext(UserContext); // subject_id from Home
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/questions?subject_id=${value}`)
      .then((res) => res.json())
      .then((questionsData) => {
        const questionPromises = questionsData.map((q) =>
          fetch(`http://localhost:3000/options?question_id=${q.question_id}&is_correct=1`)
            .then((res) => res.json())
            .then((correctOptions) => {
              const correctOption = correctOptions[0]; // assuming only one correct
              return { ...q, correctOption };
            })
        );

        Promise.all(questionPromises)
          .then((questionsWithAnswers) => {
            setQuestions(questionsWithAnswers);
          })
          .catch((err) => console.error("Error loading options:", err));
      })
      .catch((error) => console.error("Questions fetch error:", error));
  }, [value]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Correct Answers</h1>

      {questions.map((que, index) => (
        <div key={que.question_id} className="mb-6 border-b pb-4">
          <p className="font-semibold text-lg mb-2">
            {index + 1}. {que.question_text}
          </p>
          <p className="text-green-600">
            ✅ <strong>Correct Answer:</strong> {que.correctOption?.option_text || "Not available"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Answer;
