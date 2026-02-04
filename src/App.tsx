import Counter from "./components/Counter"
import Greet from "./components/Greet"
import ThemeToggle from "./components/ThemeToggle"

function App() {

  return (
    <>
      <Greet name="ARK" />
      <Greet name="ARK" message="Welcome back" />

      <Counter />

      <ThemeToggle />
    </>
  )
}

export default App
