import { mergeTypeDefs } from "@graphql-tools/merge";
import todoTypes from "./typeDefs/todoTypes";

const typeDefs = mergeTypeDefs([todoTypes]);

export default typeDefs;
