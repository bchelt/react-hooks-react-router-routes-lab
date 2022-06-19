import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {directors.map((director, index) => (
          <div key={index}>{director.name}
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Directors;
