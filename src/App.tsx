
function App() {
  return (
    <>
      <div className="h-screen relative scroll-smooth">
        <div className="h-full bg-gradient-to-tr from-blue-500 to-black"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-6">Mats Hazebroek</h1>
          <div className="text-right">
            <a href="#projects" className="text-white text-xl font-semibold mb-2">Projects</a>
          </div>
        </div>
      </div>

      <section id="projects" className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <ul>
            <li><a href="#">Project 1</a></li>
          </ul>
        </div>
      </section>


    </>
  )
}

export default App
