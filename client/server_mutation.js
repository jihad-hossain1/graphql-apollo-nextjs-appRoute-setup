"use server";

import { addTodo } from "@/service/mutation/todoMutation";
import { revalidatePath } from "next/cache";

export async function addTodoServer(data) {
  const res = await addTodo(data);
  revalidatePath("/");
  return res;
}
