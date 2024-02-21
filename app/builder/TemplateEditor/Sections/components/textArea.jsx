const textArea = ({ data, setData, name }) => {
  return (
    <div className="w-3/4 h-2/5">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {name.toUpperCase()}
      </label>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default textArea;
