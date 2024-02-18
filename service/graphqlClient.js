import { gql, GraphQLClient } from "graphql-request";

export const getClient = (preview) => {
  const client = new GraphQLClient(`${process.env.NEXT_BASE_URL}/api/graphql`);

  return client;
};
