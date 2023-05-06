import Header from "./components/header"
import Home from "./pages/Home"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-900 to-blue-500 transition-colors duration-500">   
      <Header/> 
      
      <Home />
    </div>
  )
}

export default App