import Sidebar from "../Components/Sidebar";

function Subject() {
  const subjects = ["Math", "Science", "English", "History", "ICT"];

  return (
    <>
     <Sidebar/>
    <div className=" flex items-center justify-center  ">
   
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md ">
      
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Select Subject</h2>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Subject:</label>
          <select
            name="subject"
            className="w-full p-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition hover:border-blue-300"
            required
          >
            <option value="">-- Select Subject --</option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
          <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition mt-10"
        >
          Add
        </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Subject;
