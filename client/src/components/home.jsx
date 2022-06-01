import { searchTvShows } from "../utils/API";
import { useEffect, useState } from "react";
import Card from "./Card";
const Home = ({ searchedShows }) => {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            {searchedShows?.map((show) => (
              <div key={show.id}>
                <Card tvShow={show} />
              </div>
            ))}
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Are you a star?</h1>
            <p>
              Welcome to Show Stars! Our application where you, the viewer,
              ranks shows! With our star rating system you can deliver the
              perdict on if the show reaches the stars! Or if it's just burnt
              out! Sign up today and become a true star watcher!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
