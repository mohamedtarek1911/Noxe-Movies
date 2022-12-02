import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";

export default function Home() {
  // let { keyword } = useSelector((state) => {
  //   return state.Search;
  // });
  // console.log(keyword);
  const [Movies, setMovies] = useState([]);
  const [Tv, setTv] = useState([]);

  let getTrending = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=b743efb40c92290c908bcb203dd71625`
    );
    // console.log(data.result);
    setMovies(data.results);
  };
  console.log(Movies);
  let getTrendingTv = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=b743efb40c92290c908bcb203dd71625`
    );
    // console.log(data.result);
    setTv(data.results);
  };
  console.log(Tv);

  useEffect(() => {
    getTrending();
    getTrendingTv();
  }, []);

  return (
    <>
      {/* {keyword} */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div>
              <div className="brdr w-25"></div>
              <h2>
                Trending
                <br /> Movies
                <br /> to Watch now
              </h2>
              <p className="pColor"> most watched movies by days</p>
              <div className="brdr w-100"></div>
            </div>
          </div>
          {Movies.length > 0 ? (
            Movies.map((val, index) => {
              return <Item data={val} key={index}></Item>;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div>
              <div className="brdr w-25"></div>
              <h2>
                Trending
                <br /> TV
                <br /> to Watch now
              </h2>
              <p className="pColor"> most watched tv-show by days</p>
              <div className="brdr w-100"></div>
            </div>
          </div>
          {Tv.length > 0 ? (
            Tv.map((val, index) => {
              return <Item data={val} key={index}></Item>;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
