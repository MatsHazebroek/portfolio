import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

function index() {
  return (
    <>
        {/* <div className="fixed w-full bg-gradient-to-l from-blue-900 to-[#2C5EC0] transition-colors duration-500"> */}
            <header className="flex justify-between items-center py-4 px-6 text-white">
                <div>
                    <h1 className="text-lg font-bold">Portfolio</h1>
                </div>
                <nav className="flex items-center">
                    <a href="#" className="ml-6 hover:text-gray-400 transition duration-300">Home</a>
                    <a href="#" className="ml-6 hover:text-gray-400 transition duration-300">Over Mij</a>
                    <a href="#" className="ml-6 hover:text-gray-400 transition duration-300">Projecten</a>
                    <a href="#" className="ml-6 hover:text-gray-400 transition duration-300">Contact</a>
                </nav>
                <div className="flex items-center">
                    <a href="\https://www.linkedin.com/in/mats-hazebroek-44a345265/" className="mr-6 hover:text-gray-400 transition duration-300" target="_blank">
                        <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/MatsHazebroek" className="mr-6 hover:text-gray-400 transition duration-300" target="_blank">
                        <AiFillGithub/>
                    </a>
                </div>
            </header>
            <hr />
        {/* </div> */}

    </>
  );
}

export default index;