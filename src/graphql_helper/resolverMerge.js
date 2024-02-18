import { mergeResolvers } from "@graphql-tools/merge";
import todoResolvers from "./resolvers/todoResolvers";

const resolvers = mergeResolvers([todoResolvers]);

export default resolvers;
