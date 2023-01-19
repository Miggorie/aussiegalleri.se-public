export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <div className="flex border border-stone-200 rounded w-5/6">
        <input
          type="text"
          className="block w-full px-4 py-2 text-stone-700 bg-white border rounded-md focus:border-stone-400 focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Sök efter en hund"
        />
        <button className="px-4 text-white bg-stone-500 border-l rounded w-1/6">
          Sök
        </button>
      </div>
    </div>
  );
}
