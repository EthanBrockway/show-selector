import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Are you a star?</h1>
            <p>
              Welcome to Show Stars! Our application where you, the viewer, ranks shows! With our star rating system you can deliver the perdict on if the show reaches the stars! Or if it's just burnt out! Sign up today and become a true star watcher!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;