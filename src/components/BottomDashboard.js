import React from "react";
import { Link } from "react-router-dom";
import homepage2 from "../assets/homepage2.jpg";

const BottomDashboard = () => {
	return (
		<div>
			<div className="flex p-4 xs:flex-col lg:flex-row-reverse lg:justify-between">
				<div className="lg:w-1/2 h-1/2 lg:ml-3 flex flex-col xs:items-center lg:items-start self-center gap-5">
					<h1 className="font-bold xs:text-2xl sm:text-3xl xs:text-center">
						Don't want to take the Survey?
					</h1>
					<p className="xs:text-center lg:text-left lg:text-lg">
						You can try these self help exercises
					</p>
					<div className="flex gap-x-5">
						<Link to="/selfhelp">
							<button className="transition-all xs:scale-90 md:scale-100 transform hover:scale-110 lg:px-5 lg:py-4 flex items-center bg-primary text-white p-2 rounded-xl">
								Self Help
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</Link>
					</div>
				</div>
				<div className="xs:w-3/4 lg:w-1/3 xs:self-center">
					<img className="pointer-events-none " src={homepage2} alt="" />
				</div>
			</div>
		</div>
	);
};

export default BottomDashboard;
