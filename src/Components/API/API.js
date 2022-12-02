import React from "react";
import axios from "axios";
export function getMovieTrending() {
  let data = axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=b743efb40c92290c908bcb203dd71625`
  );
  console.log(data);
}
