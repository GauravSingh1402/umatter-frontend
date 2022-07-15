import React, { Component } from "react";
import logo from "../assets/formicon.png";

export default class Surveyform5 extends Component {
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
				values.mental_health_interview === null ||
				values.phys_health_interview === null ||
				values.obs_consequence === null ||
				values.mental_vs_physical === null
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
									Would you bring up a mental health issue with a potential
									employer in an interview?
								</label>
								<div className="flex w-full justify-between self-center">
									<div className="flex items-center gap-2">
										<input
											name="men_health_interview"
											value={1}
											onChange={handleChange("mental_health_interview")}
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
											name="men_health_interview"
											value={0}
											onChange={handleChange("mental_health_interview")}
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
											name="men_health_interview"
											value={2}
											onChange={handleChange("mental_health_interview")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="notsure"
										>
											Maybe
										</label>
									</div>
								</div>
							</div>
							<div>
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Would you bring up a physical health issue with a potential
									employer in an interview?
								</label>
								<div className="flex w-full justify-between self-center">
									<div className="flex items-center gap-2">
										<input
											name="phys_health_interview"
											value={1}
											onChange={handleChange("phys_health_interview")}
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
											name="phys_health_interview"
											value={0}
											onChange={handleChange("phys_health_interview")}
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
											name="phys_health_interview"
											value={2}
											onChange={handleChange("phys_health_interview")}
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
									Do you feel that your employer takes mental health as
									seriously as physical health?
								</label>
								<div className="flex w-full justify-between self-center">
									<div className="flex items-center gap-2">
										<input
											name="mental_vs_physical"
											onChange={handleChange("mental_vs_physical")}
											value={1}
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
											name="mental_vs_physical"
											onChange={handleChange("mental_vs_physical")}
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
											name="mental_vs_physical"
											onChange={handleChange("mental_vs_physical")}
											value={2}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											Dont Know
										</label>
									</div>
								</div>
							</div>
							<div>
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Have you heard of or observed negative consequences for
									coworkers with mental health conditions in your organization
								</label>
								<div className="flex w-full justify-evenly self-center">
									<div className="flex items-center gap-2">
										<input
											onChange={handleChange("obs_consequence")}
											name="obs"
											value={1}
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
											name="obs"
											onChange={handleChange("obs_consequence")}
											value={0}
											type="radio"
											className="w-6 h-6"
										/>
										<label className="text-justify text-lg md:text-xl lg:text-2xl">
											No
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
