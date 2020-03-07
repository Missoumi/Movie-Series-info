import React from "react";
import search_logo from "../images/search-logo.png";
import "../css/search.css";
const Search = ({submit}) => {

  const HandleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('search-input').value;
    submit(title);
  }
  return (
    <div className="mt-5 search px-4 py-5">
      <h1 className="text-center">
        <img style={{ width: "45px" }} src={search_logo} alt="search logo" />
        Search for a movie ,TV series ..
      </h1>
      <div className="pt-4 text-center">
        <form onSubmit={HandleSubmit}>
          <input
            type="text"
            id="search-input"
            className="form-control"
            placeholder="Search Movies, TV Series..."
          />
          <input className='btn btn-primary mt-3' type='submit' value='Search' />          
        </form>
      </div>
    </div>
  );
};

export default Search;
