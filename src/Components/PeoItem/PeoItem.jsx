import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../1.png";

export default function PeoItem(props) {
  console.log(props.data);
  console.log(props.media);
  let imgUrl = "https://image.tmdb.org/t/p/w500";
  let {
    id,
    overview,
    profile_path,
    title,
    vote_average,
    name,
    media_type,
    popularity,
    known_for_department,
    known_for,
  } = props.data;
  let person = props.media;
  //   let img = imgUrl + profile_path;
  let img = "";

  if (profile_path === null) {
    img = img1;
  } else {
    img = imgUrl + profile_path;
  }
  return (
    <>
      <div className="col-md-2 my-3">
        <div className=" item position-relative text-center ">
          <img className="w-100 img_item" src={img1 ? img : img1} alt="" />
          <Link to={`/PerDatails/${id}/${media_type}`}>
            <div className=" text-white overlay overflow-hidden  bg-dark d-flex justify-content-center align-items-center text-center position-absolute top-0 bottom-0 start-0 end-0 ">
              {/* <h5>{known_for[0].overview.split(" ").slice(0, 12).join(" ")}</h5> */}
              {
                <h5>
                  {known_for.map((val) => {
                    return val.overview.split(" ").slice(0, 5).join(" ");
                  })}
                </h5>
              }
            </div>
          </Link>
          <div>
            <p className="position-absolute bg-info p-2 top-0 end-0">
              {popularity.toFixed(1)}
            </p>
          </div>
        </div>
        <h6 className="text-center">
          {title} {name}
        </h6>
      </div>
    </>
  );
}
