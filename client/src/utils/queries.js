import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Me {
    me {
      username
      email
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
