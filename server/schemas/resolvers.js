const { User } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    users: async () => {
      return User.find().select(`-__v, -password`).populate("show");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select(`-__v -password`)
        .populate("show");
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
