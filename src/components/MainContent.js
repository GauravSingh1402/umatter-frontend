import React, { useState } from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import blob1 from "../assets/blob1.svg";
import blob2 from "../assets/blob2.svg";
const MainContent = () => {
	const [read, setread] = useState(false);
	return (
		<div>
			<img
				src={blob1}
				className="xs:hidden lg:block absolute -z-10 opacity-60 h-60 -left-14"
				alt=""
			/>
			<h1 className="font-bold lg:mt-4 xs:text-xl sm:text-2xl xs:text-center">
				Know About the Test
			</h1>
			<div className="lg:mx-6">
				{/* <div className="flex xs:flex-col lg:flex-row w-full xs:py-4 lg:p-8">
					<div className="xs:m-auto flex items-center ">
						<img className="pointer-events-none h-12 p-2" src={one} alt="" />
						<h1 className="font-bold xs:text-l sm:text-xl">General Survey</h1>
					</div>
					<div className="w-3/4 h-1/2 xs:self-center text-justify">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
							tincidunt congue ipsum, cursus pellentesque feugiat. Ultrices
							pellentesque sed dictum tortor quis faucibus id tellus auctor.
							Sapien quam erat scelerisque vel amet amet, suscipit fermentum.
							Aliquam tincidunt vel sollicitudin odio accumsan vestibulum risus
							nunc arcu.
						</p>
					</div>
				</div> */}
				<img
					src={blob2}
					className="xs:hidden lg:block absolute right-0 -z-10 opacity-60 h-60 block"
					alt=""
				/>
				<div className="flex xs:flex-col w-full justify-between xs:py-4 lg:p-14">
					{/* <div className="xs:m-auto flex items-center">
						<img className="pointer-events-none h-12 p-2" src={two} alt="" />
						<h1 className="font-bold lg:mb-5 xs:text-l sm:text-xl">
							Tech Survey
						</h1>
					</div> */}
					<div className="w-3/4 h-1/2 xs:self-center text-justify mb-5">
						<p>
							The Mental Health Prediction is a test based on the Mental Health
							in Tech Survey dataset. This dataset is from a 2014 survey that
							measures attitudes towards mental health and frequency of mental
							health disorders in the tech workplace.
							<span className={`md:hidden ${read ? "xs:hidden" : "xs:inline"}`}>
								..
							</span>
							<span className={`md:block ${read ? "xs:block" : "xs:hidden"} `}>
								We'll ask you some broad questions about your job, organisation,
								and other characteristics in this test, and then use machine
								learning models to determine your risk of depression. The
								prediction will be based on the results of the survey and will
								only provide an estimate of the probability of depression. If
								you are experiencing symptoms, we recommend that you get
								professional help from a therapist or psychologist.
							</span>
							<button
								className="transition-all xs:scale-90 sm:scale-100 transform hover:scale-110 lg:px-5 lg:py-4 items-center flex text-primary underline font-bold p-2 rounded-xl md:hidden xs:inline-block"
								onClick={() => setread(!read)}
							>
								{read ? "Read Less" : "Read More"}
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
