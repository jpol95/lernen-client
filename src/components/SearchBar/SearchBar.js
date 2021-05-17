import React, { useState } from 'react';

function SearchBar(props) {
    const [searchInput, setSearchInput] = useState();
    const [searchOption, setSearchOption] = useState()
    
    const onSubmit = (e) => {
      e.preventDefault()
      props.history.push(`/search/q=${encodeURI(searchInput)}&option=${searchOption}`)
    }

    return (
        <form onSubmit={onSubmit} className="search-bar">
        <input onChange={(e) => setSearchInput(e.target.value)} className="search-input" type="text" />
        <input onChange={() => setSearchOption("language")} className="search-option" id="language" value="language" type="radio" name="search-type" />
          <label htmlFor="language">Search Quizzes By Language</label>
        <input onChange={() => setSearchOption("teacher")} className="search-option" id="teacher" value="teacher" type="radio" name="search-type" />
          <label htmlFor="users"> Search Users </label>
        <button className="search-submit" type="submit">Search</button>
      </form>
    );
}

export default SearchBar;