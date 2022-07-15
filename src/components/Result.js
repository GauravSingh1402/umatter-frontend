import React from "react";
import logo from "../assets/formicon.png";
import happy from "../assets/happy.png";
import Footer from "./Footer";
import { useNavigate } from "react-router";

function Result() {
	const navigate = useNavigate();
	function selfhelp() {
		navigate("/selfhelp");
	}
	function redo() {
		navigate("/form");
	}
	function psycho() {
		navigate("/psychologist");
	}
	return (
		<div>
			<div className="flex items-center px-5 justify-center mt-7 mb-6">
				<img className="pointer-events-none h-20 mr-5" src={logo} alt="log" />
				<h1 className="font-bold md:text-4xl xs:text-3xl text-center">
					Diagnosis Test Result
				</h1>
			</div>
			<div>
				<h2 className=" text-xl text-justify px-10 my-10 md:px-32 md:my-20">
					According to the results of our test analysis,{" "}
					<span className="font-bold text-green">
						you don't have a high risk of developing depression
					</span>
					. Maintain your mental wellbeing and engage in self-help activities
					that might enhance your mental health.
				</h2>
			</div>
			<div className="flex flex-col items-center justify-center gap-9 md:flex-row">
				<button
					onClick={selfhelp}
					className="text-white text-lg w-2/3 py-2 bg-primary md:w-1/5 transform hover:scale-110 rounded-xl"
				>
					Self Help
				</button>
				<button
					onClick={redo}
					className="text-white text-lg w-2/3 py-2 bg-primary md:w-1/5 transform hover:scale-110 rounded-xl"
				>
					Redo Survey
				</button>
				<button
					onClick={psycho}
					className="text-white text-lg w-2/3 py-2 bg-primary md:w-1/5 transform hover:scale-110 rounded-xl"
				>
					Find Psychologist
				</button>
			</div>
			{/* <div className="mt-30 flex justify-center ">
			
		</div> */}
			<div className="fixed bottom-0 w-full">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default Result;
