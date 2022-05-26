const { User } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    users: async () => {
      return User.find().select(`-__v, -password`);
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select(`-__v -password`);
    },
  },
  Mutation: {
    AddUser: async (parent, args) => {
      const user = await User.create(args);

      return { user };
    },
  },
};

module.exports = resolvers;
