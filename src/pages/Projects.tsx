import { AiFillGithub } from "react-icons/ai";
import Nyx from "../assets/nyx.png";
import Verzamelaar from "../assets/verzamelaar.png";
import TodoList from "../assets/todo-list.png";

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
							Hier kan je fivem scripts vinden die ik heb gemaakt
						</p>
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
							Hier kan je een verzameling van elpees op opslaan (CRUD)
						</p>
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
							Hier kan je taken toevoegen (CRUD)
						</p>
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
			</div>
		</>
	);
}

export default Projects;
