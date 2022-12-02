import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../1.png";

export default function SeaItem(props) {
  console.log(props.data);
  console.log(props.media);

  let { id, overview, poster_path, title, vote_average, name } = props.data;
  let movie = props.media;
  let img = "";
  let imgUrl = "https://image.tmdb.org/t/p/w500";

  if (poster_path === null) {
    img = img1;
  } else {
    img = imgUrl + poster_path;
  }
  return (
    <>
      <div className="col-md-2 my-3">
        <div className=" item position-relative text-center ">
          <img className="w-100 img_item" src={img1 ? img : img1} alt="" />
          <Link to={`/Datails/${id}/${movie}`}>
            <div className=" text-white overlay overflow-hidden  bg-dark d-flex justify-content-center align-items-center text-center position-absolute top-0 bottom-0 start-0 end-0 ">
              <h5>{overview.split(" ").slice(0, 12).join(" ")}</h5>
            </div>
          </Link>
          <div>
            <p className="position-absolute bg-info p-2 top-0 end-0">
              {vote_average.toFixed(1)}
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
