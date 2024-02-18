import React from "react";
import TodoForm from "./TodoForm";
// import { addTodo } from "@/service/mutation/todoMutation";
import { addTodoServer } from "@/client/server_mutation";

import { getTodos } from "@/service/query/todoQuery";

const AllTodo = async () => {
  let data = await getTodos();
  //   console.log(data);
  return (
    <div className="flex flex-col gap-3">
      <TodoForm addTodo={addTodoServer} />
      <h4>AllTodo: {data?.data?.length || 0} </h4>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {data?.data
          ?.reverse()
          .slice()
          .map((todo, index) => (
            <div key={todo?.id}>
              <h4>
                <span className="text-sm px-3 py-1 text-green-500 border rounded-lg">
                  {index + 1}
                </span>
                {todo?.name}
              </h4>
              <h4>{todo?.content}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTodo;
