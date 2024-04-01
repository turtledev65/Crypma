import Button from "./components/button"

function App() {
  return (
    <>
      <p>Hello World</p>
      <Button onClick={() => console.log("Hello World")}>Click Me</Button>
    </>
  )
}

export default App
