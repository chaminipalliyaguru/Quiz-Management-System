import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Home";
import { useLocation } from "react-router-dom";

function Answer() {
  const subjectId = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { answers } = location.state || {};

  useEffect(() => {
    const fetchQuestionsWithAnswers = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/questions?subject_id=${subjectId}`
        );
        const questionsData = await res.json();

        const questionPromises = questionsData.map(async (q) => {
          const optionRes = await fetch(
            `http://localhost:3000/options?question_id=${q.question_id}&is_correct=1`
          );
          const correctOptions = await optionRes.json();
          return { ...q, correctOption: correctOptions[0] || null };
        });

        const results = await Promise.all(questionPromises);
        setQuestions(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionsWithAnswers();
  }, [subjectId]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        ✅ Correct Answers
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading questions...</p>
      ) : (
        questions.map((q, index) => {
          const selectAnswer = answers?.[q.question_text];
          const correctAnswer = q.correctOption.option_text;
          const isCorrect = selectAnswer === correctAnswer;

          return (
            <div
              key={q.question_id}
              className="mb-6 p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-md"
            >
              <p className="font-medium text-lg text-gray-800 mb-2">
                {index + 1}. {q.question_text}
              </p>
              <p className="text-blue-700 font-semibold">
                Select Answer: {answers?.[q.question_text] || "Not available"}
              </p>
              <p className="text-red-400">
                Correct Answer: {q.correctOption.option_text || "Not available"}
              </p>
              <p
                className={`font-bold text-center ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                {isCorrect
                  ? "✅ Answer is correct."
                  : "❌ Answer is incorrect."}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Answer;
