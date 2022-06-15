import React, { useState, useEffect } from "react";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import Card from "./Card";
const Profile = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiZWJyb2Nrd2F5MDFAZ21haWwuY29tIiwiZW1haWwiOiJlYnJvY2t3YXkwMUBnbWFpbC5jb20iLCJfaWQiOiI2MmEzNmIxNWRmZjU2OTYzMDQ5MDdhYmMifSwiaWF0IjoxNjU1MzE2OTcwLCJleHAiOjE2NTUzMjQxNzB9.uVSjPxU7TACtgERI_OEFFyU3pwcRz7Heikh3J5X9I1A";

  const { loading, data } = useQuery(GET_ME, {
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    },
  });

  const user = data?.me;
  console.log(user?.savedShows);
  // return <div>{user?.username}</div>;
  return (
    <div className="col-lg-12">
      {user?.savedShows?.map((show) => (
        <div key={show.showId}>
          <Card tvShow={show} />
        </div>
      ))}
    </div>
  );
};
export default Profile;
