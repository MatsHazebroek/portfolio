import Projects from "./Projects"

function Home() {
  return (
    <>
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white">Mats Hazebroek</h1>
                <h2 className="text-2xl font-bold text-white">Portfolio</h2>
            </div>
        </div>

        <Projects />

        {/* <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white">Mats Hazebroek</h1>
                <h2 className="text-2xl font-bold text-white">Portfolio</h2>
            </div>
        </div> */}
    </>
  )
}

export default Home
