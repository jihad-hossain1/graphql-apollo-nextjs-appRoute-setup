import { gql } from "graphql-request";
import { getClient } from "../graphqlClient";

export const getTodos = async () => {
  const client = getClient(false);
  const gqlResponse = await client.request(
    gql`
      query getTodos {
        getTodos {
          name
          id
          content
        }
      }
    `
  );

  return {
    data: gqlResponse?.getTodos || [],
  };
};
