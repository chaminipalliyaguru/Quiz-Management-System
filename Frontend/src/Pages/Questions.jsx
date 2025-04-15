function Questions() {
  const question = {
    text: "1. What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "paris",
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Select most suitable answer.</h1>
      <p className="mb-4">{question.text}</p>
      <div>
        {question.options.map((options, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center">
              <input type="radio" name="mcq" value="" />
              {question.options[index]}
            </label>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </div>
  );
}

export default Questions;
