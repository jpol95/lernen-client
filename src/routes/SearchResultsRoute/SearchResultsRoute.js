import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuizApiService from "../../services/quiz-api-service";
import SqrelsService from "../../services/sqrels-api-service";
import UsersService from "../../services/users-api-service";

function SearchResultsRoute(props) {
  const parseSearch = props.match.params.query.split(/[=&]/);
  const searchQuery = decodeURI(parseSearch[1]);
  const searchOption = decodeURI(parseSearch[3]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (searchOption === "language")
        setSearchResults(
          await QuizApiService.getQuizzesByLanguage(searchQuery)
        );
      else setSearchResults(await UsersService.getUsersByName(searchQuery));
    };
    loadData();
  }, []);

  //figure out why nothing is returning from the search
  // console.log(searchResults)
  return (
    <div>
      {searchResults.map((result) => {
        return <Link to={searchOption === "language" ? `/quizview/${result.id}`: `/${result.role}/${result.id}`} className="search-result"> <div>{result.fullname}</div> <div>{searchOption === "language" && result.title}</div></Link>;
      })}
    </div>
  );
}

export default SearchResultsRoute;
