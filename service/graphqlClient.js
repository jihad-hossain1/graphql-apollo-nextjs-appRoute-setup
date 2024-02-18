import { gql, GraphQLClient } from "graphql-request";

export const getClient = (preview) => {
  const client = new GraphQLClient(`http://localhost:3000/api/graphql`);

  return client;
};
