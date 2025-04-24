import { useState } from "react";
import Sidebar from "../Components/Sidebar";

function Quiz() {
  const [quiz, setQuiz] = useState({
    subject: "",
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "A",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz Data:", quiz);
    // TODO: Send to backend
  };

  const subjects = ["Math", "Science", "English", "History", "ICT"];


  return (
    <>
    <div className="grid grid-cols-3">
      <div><Sidebar/></div>
    
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
      
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add New Quiz</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Subject:</label>
          <select
            name="subject"
            value={quiz.subject}
           
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">-- Select Subject --</option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>
        </div>

        <textarea
          name="question"
          placeholder="Question"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
          value={quiz.question}
         
          required
        />
        <input
          type="text"
          name="optionA"
          placeholder="Option A"
          className="w-full p-3 border rounded-xl"
          value={quiz.optionA}
          
          required
        />
        <input
          type="text"
          name="optionB"
          placeholder="Option B"
          className="w-full p-3 border rounded-xl"
          value={quiz.optionB}
         
          required
        />
        <input
          type="text"
          name="optionC"
          placeholder="Option C"
          className="w-full p-3 border rounded-xl"
          value={quiz.optionC}
        
          required
        />
        <input
          type="text"
          name="optionD"
          placeholder="Option D"
          className="w-full p-3 border rounded-xl"
          value={quiz.optionD}
         
          required
        />
        <div className="flex items-center gap-3">
          <label className="font-medium">Correct Answer:</label>
          <select
            name="correctAnswer"
            value={quiz.correctAnswer}
         
            className="border rounded-xl px-3 py-2"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Submit Quiz
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Quiz
