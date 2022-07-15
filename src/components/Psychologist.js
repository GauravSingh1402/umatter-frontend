import React from "react";
import { useState, useEffect } from "react";
import map from "../assets/map.png";
import Footer from "./Footer";

function Psychologist() {
	const [location, setLocation] = useState("");
	let url =
		"https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22psychologist%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22subspeciality%22%7D%5D&city=" +
		location;
	// useEffect(() => {
	// 	url =
	// 		"https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22psychologist%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22subspeciality%22%7D%5D&city=" +
	// 		location;
	// }, [location]);

	return (
		<div className="flex flex-col gap-10 h-full py-20">
			<div className="flex items-center justify-center gap-3">
				<img className="pointer-events-none h-10" src={map} alt="" />
				<h1 className="font-bold xs:text-2xl sm:text-3xl xs:text-center">
					Enter your location
				</h1>
			</div>
			<input
				className="border-2 lg:w-1/2 xs:w-3/4 self-center rounded-xl p-3 text-2xl"
				type="text"
				value={location}
				onChange={(e) => setLocation(e.target.value)}
			/>
			<a className="px-5 self-center" href={url} target="_blank">
				<button className=" scale-110 transition-all transform hover:scale-125 bg-primary text-white p-2 rounded-xl">
					Find Psychologist
				</button>
			</a>
			<div className="w-full bottom-0 fixed">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default Psychologist;
