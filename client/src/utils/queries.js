import { gql } from "@apollo/client";

export const GET_ME = gql`
  query {
    me {
      username
      friends {
        username
      }
      savedShows {
        name
        description
        imageSrc
        showId
      }
    }
  }
`;

export const GET_USER = gql`
  query ($username: String!) {
    user(username: $username) {
      username
      savedShows {
        name
        description
        imageSrc
        showId
      }
      friends {
        username
      }
      _id
    }
  }
`;
