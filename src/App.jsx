import { Provider } from "react-redux"

import Todo from "./Todo"
import todoStore from "../Store/todoStore"

function App() {
  return (
    <Provider store={todoStore}>
      <Todo />
    </Provider>
  )
}

export default App