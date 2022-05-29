const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  type Show {
    _id: ID!
    showId: Int
    name: String!
    description: String
    imageSrc: String
  }
  type User {
    _id: ID
    username: String
    email: String
    shows: [String]
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type Mutation {
    AddUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
