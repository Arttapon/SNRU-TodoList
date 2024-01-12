import { useContext } from "react";
import TodoContext from "../contexts/todoContext";


export default function useTodo() {
  return useContext(TodoContext)
}