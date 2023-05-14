import Contact from "./Contact";
import Projects from "./Projects";
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf } from "react-icons/ai";

function Home() {
	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="flex flex-col items-start w-1/2 px-8">
					<h1 className="text-3xl font-bold mb-4">
						Hallo ik ben Mats Hazebroek
					</h1>
					<p className="mb-4 w-96">
						Ik ben Mats Hazebroek uit Zoetermeer. Ben 17 jaar. In Rotterdam volg
						ik de opleiding voor Software Devlopment op het Grafisch Lyceum
						Rotterdam. Naast mijn opleiding werk ik bij de Hoogvliet als
						vulploegmedewerker. Dit doe ik ruim 3,5 jaar. In mijn vrije tijd
						programmeer ik graag en speel graag games
					</p>
					<div className="flex space-x-4">
						<a
							href="https://www.linkedin.com/in/mats-hazebroek-44a345265/"
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
                            target="_blank"
						>
							<AiFillLinkedin />
							<span>LinkedIn</span>
						</a>
						<a
							href="https://github.com/MatsHazebroek"
							className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
                            target="_blank"
						>
							<AiFillGithub />
							<span>Github</span>
						</a>
						<a
							href="../assets/cv.pdf"
							className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
                            download
						>
							<AiOutlineFilePdf />
							<span>Download CV</span>
						</a>
					</div>
				</div>
			</div>

			<Projects />

			<Contact />
		</>
	);
}

export default Home;
