import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_SHOW = gql`
  mutation ($show: showInput) {
    SaveShow(show: $show) {
      username
      savedShows {
        name
        description
        imageSrc
        showId
      }
    }
  }
`;

export const REMOVE_SHOW = gql`
  mutation ($showId: ID!) {
    RemoveShow(showId: $showId) {
      savedShows {
        name
      }
    }
  }
`;
