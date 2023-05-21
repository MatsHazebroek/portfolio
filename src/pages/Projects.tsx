import { AiFillGithub } from "react-icons/ai";
import Nyx from "../assets/nyx.png";
import Verzamelaar from "../assets/verzamelaar.png";
import TodoList from "../assets/todo-list.png";
import WIP from "../assets/wip.jpeg"

function Projects() {
	return (
		<>
			<div id="projecten" className="container mx-auto py-8 h-screen mt-20">
				<h1 className="text-5xl font-bold mb-8 text-center">
					Projecten
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
					<div className="bg-white rounded-lg shadow-lg p-4">
						<img src={Nyx} alt="Project 1" className="mb-4 rounded-md" />
						<h2 className="text-xl font-bold mb-2">Fivem Scripts</h2>
						<p className="text-gray-700 text-base">
							Met een mede fivem developer ben ik scripts gaan ontwerpen. Hier kun je een voorbeeld zien
						</p>
						<div className="mt-3">
							<p className="text-sm text-gray-500 font-bold">LUA</p>
						</div>
						<div className="mt-4 flex justify-between">
							<a
								href="https://streamable.com/o3z2l5"
								className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
								target="_blank"
							>
								Voorbeeld Link
							</a>
							<a
								href="https://github.com/MatsHazebroek/nyx-scripts"
								className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
								target="_blank"
							>
								<AiFillGithub />
								<span>Github link</span>
							</a>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow-lg p-4">
						<img
							src={Verzamelaar}
							alt="Project 2"
							className="mb-4 rounded-md"
						/>
						<h2 className="text-xl font-bold mb-2">Beroeps Verzamelaar</h2>
						<p className="text-gray-700 text-base">
							Het is mogelijk om je favoriete elpees op te slaan. Je kan ze toevoegen, aanpassen, verwijderen en bekijken (CRUD)
						</p>
						<div className="mt-3">
							<p className="text-sm text-gray-500 font-bold">PHP</p>
						</div>
						

						<div className="mt-4 flex justify-between">
							<a
								href="https://87794.stu.sd-lab.nl/school/beroeps/beroeps_elpees/"
								className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
								target="_blank"
							>
								Voorbeeld Link
							</a>
							<a
								href="https://github.com/MatsHazebroek/beroeps_elpees"
								className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
								target="_blank"
							>
								<AiFillGithub />
								<span>Github link</span>
							</a>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow-lg p-4">
						<img src={TodoList} alt="Project 3" className="mb-4 rounded-md" />
						<h2 className="text-xl font-bold mb-2">Todo-List</h2>
						<p className="text-gray-700 text-base">
							Het is mogelijk door taken die je hebt hier te maken. Je kan ze toevoegen, aanpassen, verwijderen en bekijken (CRUD)
						</p>
						<div className="mt-3">
							<p className="text-sm text-gray-500 font-bold">Next.js (<a className="text-blue-500" href="https://create.t3.gg/">https://create.t3.gg/</a>)</p>
						</div>
						<div className="mt-4 flex justify-between">
							<a
								href="https://todo-list-eight-khaki.vercel.app/Login"
								className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
								target="_blank"
							>
								Voorbeeld Link
							</a>
							<a
								href="https://github.com/MatsHazebroek/todo-list"
								className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
								target="_blank"
							>
								<AiFillGithub />
								<span>Github link</span>
							</a>
						</div>
					</div>
				</div>

				<div className="container mx-auto py-8 mt-20">
					<h1 className="text-4xl font-bold mb-8 text-center">
						Projecten in bouw
					</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
						<div className="bg-white rounded-lg shadow-lg p-4">
							<img src={WIP} alt="WIP Project 1" className="mb-4 rounded-md" />
							<h2 className="text-xl font-bold mb-2">Smart Chef</h2>
							<p className="text-gray-700 text-base">
								Een AI-aangedreven recepten-app die gezonde en heerlijke maaltijden voorstelt op basis van de dieetvoorkeuren, kookvaardigheden en beschikbare ingrediënten van de gebruiker.
							</p>
							<div className="mt-4 flex justify-between">
								<a
									href="#!"
									className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
								>
									Voorbeeld Link (niet beschikbaar)
								</a>
								<a
									href="https://github.com/MatsHazebroek/smart-chef"
									className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
									target="_blank"
								>
									<AiFillGithub />
									<span>Github link</span>
								</a>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-lg p-4">
							<img src={WIP} alt="WIP Project 2" className="mb-4 rounded-md" />
							<h2 className="text-xl font-bold mb-2">Chat-app</h2>
							<p className="text-gray-700 text-base">
								Dit wordt een remake dat gebasseerd is op Whats-App 
							</p>
							<div className="mt-4 flex justify-between">
								<a
									href="#!"
									className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
								>
									Voorbeeld Link (niet beschikbaar)
								</a>
								<a
									href="https://github.com/MatsHazebroek/chat-app"
									className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
									target="_blank"
								>
									<AiFillGithub />
									<span>Github link</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
