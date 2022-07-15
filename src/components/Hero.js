import React from "react";
import meditate from "../assets/homepage.png";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div>
			<div className="flex p-4 xs:flex-col lg:flex-row lg:mx-8">
				<div className="h-1/2 flex flex-col xs:items-center lg:items-start self-center gap-5">
					<h1 className="font-bold xs:text-2xl sm:text-3xl xs:text-center">
						Take the Mental Health Prediction Test
					</h1>
					<p className="xs:text-center lg:text-left lg:text-lg">
						Make Mental Health a priority by identifying the risk of falling in
						depression before its onset.
					</p>
					<div className="flex gap-x-5">
						{/* <Link to="/">
							<button className="transition-all xs:scale-90 md:scale-100 transform hover:scale-110 lg:px-5 lg:py-4 flex items-center bg-primary text-white p-2 rounded-xl">
								General Survey
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
						</Link> */}
						<Link to="/form">
							<button className="transition-all xs:scale-90 sm:scale-100 transform hover:scale-110 lg:px-5 lg:py-4 items-center flex bg-primary text-white p-2 rounded-xl">
								Take the Test
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
				<div className="xs:w-3/4 lg:w-1/2 h-1/2 xs:self-center">
					<img className="pointer-events-none" src={meditate} alt="" />
				</div>
			</div>
			<div className="flex justify-center">
				<span className="inline-block animate-bounce">
					<svg
						className="h-10 mb-5"
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
						/>
					</svg>
				</span>
			</div>
		</div>
	);
};

export default Hero;
