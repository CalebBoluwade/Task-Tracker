import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState(null);

  const searchqueryHandler = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    let searchquery = setSearch(event.target.value);
    console.log(searchquery);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
    console.log("Searching...", search);

    // const sort = taskarray.sort((task) => task.text !== text);
    // setTasks(sort);
  };

  return (
    <>
      <input
        type="search"
        id="search"
        placeholder="Search Here"
        onChange={searchqueryHandler}
      />
      <SearchIcon
        style={{ position: "relative", right: 25, top: 7 }}
        onClick={searchHandler}
      />
    </>
  );
};

export default Search;
