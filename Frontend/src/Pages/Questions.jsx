import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Home";
import { useNavigate } from "react-router-dom";


function Questions() {
  const value = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const [answers,setAnswers] = useState([]);
  const navigate = useNavigate();

  const handlChange = (ans) => {
    setAnswers(ans);
  };

  const submit = () => {
    navigate("/answer")
  }

  useEffect(() => {
    fetch(`http://localhost:3000/questions?subject_id=${value}`)
      .then((res) => res.json())
      .then((questionsData) => {
        const questionPromises = questionsData.map((q) =>
          fetch(`http://localhost:3000/options?question_id=${q.question_id}`)
            .then((res) => res.json())
            .then((options) => ({ ...q, options }))
        );

        Promise.all(questionPromises)
          .then((questionsWithOptions) => {
            setQuestions(questionsWithOptions);
          })
          .catch((err) => console.error("Error loading options:", err));
      })
      .catch((error) => console.error("Questions fetch error:", error));
  }, [value]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Select most suitable answer.</h1>

      {questions.map((que, index) => (
        <div key={que.question_id} className="mb-6">
          <p className="font-medium mb-2">
            {index + 1}. {que.question_text}
          </p>

          {que.options.map((opt, idx) => (
            <div key={idx} className="mb-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${que.question_id}`}
                  value={opt.option_text} onClick={()=> handlChange(opt.option_id)}
                />
                <span>{opt.option_text}</span>
              </label>
            </div>
          ))}
          
        </div>
      ))}

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={submit}>
        Submit
      </button>
    </div>
  );
}

export default Questions;
