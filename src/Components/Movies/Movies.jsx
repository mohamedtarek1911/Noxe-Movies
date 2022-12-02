import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import SeaItem from "../SeaItem/SeaItem";
import ReactPaginate from "react-paginate";
import { current } from "@reduxjs/toolkit";
export default function Movies() {
  let { keyword } = useSelector((state) => {
    return state.Search;
  });
  // console.log(keyword);
  const [Movies, setMovies] = useState([]);
  const [Terms, setTerms] = useState("");
  const [CurrentPage, setCurrentPage] = useState(1);

  // let Terms = [];
  let movie = "movie";
  // let currentPage = 1;
  let handlePageClick = async (data) => {
    // console.log(data.selected);
    let number = await data.selected;
    setCurrentPage(number + 1);
    ScrollUp();
    // console.log(currentPage);
  };

  let getTrending = async (Page) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=b743efb40c92290c908bcb203dd71625&page=${Page}`
    );
    // console.log(data.result);
    setMovies(data.results);
  };
  // console.log(Movies);
  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  let searchTerms = async (term) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=b743efb40c92290c908bcb203dd71625&query=${term}`
    );

    setTerms(data.results);
    // console.log(data.results);
  };
  // let searchTerms = async () => {
  //   let { data } = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=b743efb40c92290c908bcb203dd71625&query=hell`
  //   );

  //   setTerms(data.results);
  //   console.log(data.results);
  //   // Terms = data.results;
  // };
  // console.log(Terms);
  console.log(CurrentPage);
  // console.log(Terms);

  // console.log(data.json());

  useEffect(() => {
    searchTerms(keyword);
    getTrending(CurrentPage);
    handlePageClick();
  }, [keyword, CurrentPage + 1]);
  // console.log(Terms);

  return (
    <>
      <div className="container">
        <div className="row">
          {Terms.length > 0
            ? Terms.map((val, index) => {
                return (
                  <SeaItem media={"movie"} data={val} key={index}></SeaItem>
                );
              })
            : ""}
          {Movies.length > 0 ? (
            Movies.map((val, index) => {
              return <Item data={val} key={index}></Item>;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"< previous"}
        nextLabel={" next >"}
        breakLabel={"..."}
        onPageChange={handlePageClick}
        pageCount={999}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item "}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
