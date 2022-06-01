import React from "react";

function About() {
  return (
    <div className="about">
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
            <h1 class="font-weight-light">About</h1>
            <p>
              We want to skip the hassles of long drawn out reviews! Did you enjoy the show? How would you rate it out of five stars? Simple, easy, and saves people time! Also works as a good way to catalogue what you've seen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;