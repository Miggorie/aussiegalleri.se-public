import { useState, useEffect } from "react";
import axios from "axios";
import { Dog } from "../../components/Interfaces";

function SearchBar() {
  const [term, setTerm] = useState("");
  const [filteredDogs, setFilteredDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://aussiegalleri.se/api/search/alldogs.php"
        );
        const data = response.data;
        setFilteredDogs(data.dogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newFilteredDogs = filteredDogs.filter((dog: Dog) =>
      dog.name?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDogs(newFilteredDogs);
  };

  const handleChange = (event: any) => {
    setTerm(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="flex border border-stone-200 rounded w-5/6">
        <div onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            onChange={handleChange}
            className="block w-full px-4 py-2 text-stone-700 bg-white border rounded-md focus:border-stone-400 focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Sök efter en hund"
          />
          <button className="px-4 text-white bg-stone-500 border-l rounded w-1/6">
            Sök
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
