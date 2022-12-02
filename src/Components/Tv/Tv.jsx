import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import SeaItem from "../SeaItem/SeaItem";
import ReactPaginate from "react-paginate";

export default function Tv() {
  let { keyword } = useSelector((state) => {
    return state.Search;
  });
  console.log(keyword);
  const [Tv, setTv] = useState([]);
  const [Terms, setTerms] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);

  let tv = "tv";

  let handlePageClick = async (data) => {
    // console.log(data.selected);
    let number = await data.selected;
    setCurrentPage(number + 1);
    ScrollUp();
    // console.log(currentPage);
  };

  let searchTerms = async (term) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=b743efb40c92290c908bcb203dd71625&query=${term}`
    );

    setTerms(data.results);
    console.log(data.results);
  };
  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let getTrendingTv = async (Page) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=b743efb40c92290c908bcb203dd71625&page=${Page}`
    );
    setTv(data.results);
  };
  console.log(Tv);

  useEffect(() => {
    searchTerms(keyword);
    getTrendingTv(CurrentPage);
  }, [keyword, CurrentPage]);
  return (
    <>
      <div className="container">
        <div className="row">
          {Terms.length > 0
            ? Terms.map((val, index) => {
                return <SeaItem media={tv} data={val} key={index}></SeaItem>;
              })
            : ""}
          {Tv.length > 0 ? (
            Tv.map((val, index) => {
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
