import { getClient } from "@/service/graphqlClient";
import { gql } from "graphql-request";

export const addTodo = async (todoObj) => {
  console.log(todoObj);
  try {
    const client = getClient(false);

    const gqlRes = await client.request(
      gql`
        #graphql
        mutation createTodo($name: String!, $content: String!) {
          createTodo(name: $name, content: $content) {
            id
            name
            content
          }
        }
      `,
      {
        name: todoObj.name,
        content: todoObj.content,
      }
    );

    return {
      data: gqlRes?.createTodo || null,
    };
  } catch (exception) {
    console.log(`Error ${exception}`);
  }
};
