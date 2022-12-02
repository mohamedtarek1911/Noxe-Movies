import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function PerDetails() {
  const [Datails, setDetails] = useState("");
  let x = useParams();
  console.log(x);
  let getDetails = async (id, media) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=b743efb40c92290c908bcb203dd71625&language=en-US`
    );
    // console.log(data);
    setDetails(data);
  };
  console.log(Datails);

  useEffect(() => {
    getDetails(x.id, x.media);
  }, []);
  let {
    biography,
    birthday,
    known_for_department,
    place_of_birth,
    title,
    profile_path,
    popularity,
    name,
    genres,
    original_title,
  } = Datails;

  //   console.log(genres[0].name);
  return (
    <>
      {Datails ? (
        <div className="container my-3">
          <div className="row">
            <div className="col-md-5">
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt=""
              />
            </div>
            <div className="col-md-7">
              <div className="my-3">
                <h1 className="my-1">
                  {title} {name}
                </h1>
                <p>{original_title}</p>
              </div>
              <div className="my-4">
                {genres?.map((val, index) => {
                  return (
                    <span className="badge p-3 m-1 bg-info" key={index}>
                      {val.name}
                    </span>
                  );
                })}
              </div>
              <div className="list_det">
                <ul>
                  <li className="py-2">Birthday: {birthday}</li>
                  {/* <li className="py-2">rate: {vote_average.toFixed(1)}</li> */}
                  <li className="py-2">Birthday place: {place_of_birth}</li>
                  <li className="py-2">Known For: {known_for_department}</li>

                  <li className="py-2">popularity: {popularity}</li>
                </ul>
              </div>

              <div>
                <p className="lead text-white">{biography}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
