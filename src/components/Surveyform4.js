import React, { Component } from "react";
import logo from "../assets/formicon.png";

export default class Surveyform4 extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextSection();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevSection();
	};
	render() {
		const { values, handleChange } = this.props;
		const check = (e) => {
			if (
				values.leave === null ||
				values.mental_health_consequence === null ||
				values.phys_health_consequence === null ||
				values.coworkers === null ||
				values.supervisor === null
			) {
				alert("All The Field Are Mandatory");
			} else {
				this.continue(e);
			}
		};
		return (
			<div>
				<React.Fragment>
					<div className="flex items-center  justify-center mt-7 mb-6">
						<img
							className="pointer-events-none h-20 mr-5"
							src={logo}
							alt="log"
						/>
						<h1 className="font-bold md:text-5xl xs:text-4xl text-center">
							General Survey
						</h1>
					</div>

					<div className="flex justify-center">
						<div className="bg-primary bg-opacity-50 rounded-2xl flex flex-col gap-8 md:w-10/12 xs:w-11/12 px-5 py-10 lg:px-10 mb-5">
							<div className="flex gap-2 flex-col">
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									How easy is it for you to take medical leave for a mental
									health condition?
								</label>
								<div className="flex w-full flex-col gap-2 md:flex-row justify-between self-center">
									<div className="flex items-center gap-2">
										<input
											name="leave"
											value={1}
											onChange={handleChange("leave")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name=" yes"
										>
											Somewhat easy
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="leave"
											onChange={handleChange("leave")}
											value={3}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											Somewhat Difficult
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="leave"
											onChange={handleChange("leave")}
											value={2}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											Don't Know
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="leave"
											onChange={handleChange("leave")}
											value={0}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											Very Easy
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="leave"
											onChange={handleChange("leave")}
											value={4}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											Very Difficult
										</label>
									</div>
								</div>
							</div>
							<div>
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Do you think that discussing a mental health issue with your
									employer would have negative consequences?
								</label>
								<div className="flex w-full justify-between self-center">
									<div className="flex items-center gap-2">
										<input
											value={1}
											name="men_health"
											onChange={handleChange("mental_health_consequence")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name=" yes"
										>
											Yes
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											value={0}
											name="men_health"
											onChange={handleChange("mental_health_consequence")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											No
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											value={2}
											name="men_health"
											onChange={handleChange("mental_health_consequence")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											Maybe
										</label>
									</div>
								</div>
							</div>
							<div>
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Has your employer ever discussed physical health as part of an
									employee wellness program?
								</label>
								<div className="flex w-full justify-between self-center">
									<div className="flex items-center gap-2">
										<input
											name="phys_health"
											value={1}
											onChange={handleChange("phys_health_consequence")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name=" yes"
										>
											Yes
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											onChange={handleChange("phys_health_consequence")}
											name="phys_health"
											value={0}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											No
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											onChange={handleChange("phys_health_consequence")}
											name="phys_health"
											value={2}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											Maybe
										</label>
									</div>
								</div>
							</div>
							<div>
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Would you be willing to discuss a mental health issue with
									your coworkers?
								</label>
								<div className="flex w-full justify-between self-center">
									<div className="flex items-center gap-2">
										<input
											name="coworker"
											value={1}
											onChange={handleChange("coworkers")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name=" yes"
										>
											Yes
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											onChange={handleChange("coworkers")}
											name="coworker"
											value={0}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											No
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											onChange={handleChange("coworkers")}
											name="coworker"
											value={2}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="some"
										>
											Some of them
										</label>
									</div>
								</div>
							</div>
							<div>
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Would you be willing to discuss a mental health issue with
									your direct supervisor(s)?
								</label>
								<div className="flex w-full justify-between self-center">
									<div className="flex items-center gap-2">
										<input
											name="supervisor"
											value={1}
											onChange={handleChange("supervisor")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="yes"
										>
											Yes
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											onChange={handleChange("supervisor")}
											name="supervisor"
											value={0}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											No
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											onChange={handleChange("supervisor")}
											name="supervisor"
											value={2}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="some"
										>
											Some of them
										</label>
									</div>
								</div>
							</div>
							<div className="flex justify-center gap-2">
								<button
									onClick={check}
									className="px-10 py-3 text-2xl transition-all xs:scale-90 sm:scale-100 transform hover:scale-110 items-center flex bg-primary text-white p-2 rounded-xl lg:scale-75 lg:hover:scale-95"
								>
									Next
								</button>
								<button
									onClick={this.back}
									className="px-10 py-3 text-2xl transition-all xs:scale-90 sm:scale-100 transform hover:scale-110 items-center flex bg-primary text-white p-2 rounded-xl lg:scale-75 lg:hover:scale-95"
								>
									Back
								</button>
							</div>
						</div>
					</div>
				</React.Fragment>
			</div>
		);
	}
}
