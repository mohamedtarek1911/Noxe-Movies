import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import PeoItem from "../PeoItem/PeoItem";
export default function People() {
  let { keyword } = useSelector((state) => {
    return state.Search;
  });
  // console.log(keyword);
  const [People, setPeople] = useState([]);
  const [Terms, setTerms] = useState("");

  // let Terms = [];
  let person = "person";

  let getTrending = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/person/week?api_key=b743efb40c92290c908bcb203dd71625`
    );
    // console.log(data.result);
    setPeople(data.results);
  };
  // console.log(People);

  let searchTerms = async (term) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=b743efb40c92290c908bcb203dd71625&query=${term}`
    );

    setTerms(data.results);
    console.log(data.results);
  };
  // let searchTerms = async () => {
  //   let { data } = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=b743efb40c92290c908bcb203dd71625&query=hell`
  //   );

  //   setTerms(data.results);
  //   console.log(data.results);
  //   // Terms = data.results;
  // };
  console.log(Terms);
  // console.log(Terms);

  // console.log(data.json());

  useEffect(() => {
    searchTerms(keyword);
    getTrending();
  }, [keyword]);
  // console.log(Terms);
  return (
    <>
      <div className="container">
        <div className="row">
          {Terms.length > 0
            ? Terms.map((val, index) => {
                return (
                  <PeoItem media={person} data={val} key={index}></PeoItem>
                );
              })
            : ""}
          {People.length > 0 ? (
            People.map((val, index) => {
              return <PeoItem media={person} data={val} key={index}></PeoItem>;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
