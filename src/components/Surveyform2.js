import React, { Component } from "react";
import logo from "../assets/formicon.png";

export default class Surveyform2 extends Component {
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
				values.work_interfere == null ||
				values.family_history === null ||
				values.benefits === null ||
				values.remote_work === null ||
				values.tech_company === null
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
									If you have a mental condition,do you think it interferes with
									your work?
								</label>
								<div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
									<div className="flex gap-1 items-center">
										<input
											name="work_interference"
											value={3}
											onChange={handleChange("work_interfere")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="yes"
										>
											Often
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="work_interference"
											value={2}
											onChange={handleChange("work_interfere")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="no"
										>
											Sometimes
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="work_interference"
											value={1}
											onChange={handleChange("work_interfere")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="notsure"
										>
											Rarely
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="work_interference"
											value={0}
											onChange={handleChange("work_interfere")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="notsure"
										>
											Never
										</label>
									</div>
								</div>
							</div>
							<div className="flex gap-2 flex-col">
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Do you have a family history of mental illness?
								</label>
								<div className="flex w-4/5 justify-between self-center">
									<div className="flex gap-1 items-center">
										<input
											name="fam"
											value={1}
											onChange={handleChange("family_history")}
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
											name="fam"
											value={0}
											onChange={handleChange("family_history")}
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
								</div>
							</div>
							<div className="flex gap-2 flex-col">
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Do you work remotely (outside of an office) at least 50% of
									the time?
								</label>
								<div className="flex w-4/5 justify-between self-center">
									<div className="flex gap-1 items-center">
										<input
											name="remote"
											value={1}
											onChange={handleChange("remote_work")}
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
											name="remote"
											value={0}
											onChange={handleChange("remote_work")}
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
								</div>
							</div>
							<div className="flex gap-2 flex-col">
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Is your employer primarily a tech company/organization?
								</label>
								<div className="flex w-4/5 justify-between self-center">
									<div className="flex gap-1 items-center">
										<input
											name="company"
											value={1}
											onChange={handleChange("tech_company")}
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
											name="company"
											value={0}
											onChange={handleChange("tech_company")}
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
								</div>
							</div>
							<div className="flex gap-2 flex-col">
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Does your employer provide mental health benefits?
								</label>
								<div className="flex w-4/5 justify-between self-center">
									<div className="flex gap-1 items-center">
										<input
											name="benefits"
											value={1}
											onChange={handleChange("benefits")}
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
											name="benefits"
											value={0}
											onChange={handleChange("benefits")}
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
											name="benefits"
											value={2}
											onChange={handleChange("benefits")}
											type="radio"
											className="w-6 h-6"
										/>
										<label
											className="text-justify text-lg md:text-xl lg:text-2xl"
											name="notsure"
										>
											Not Sure
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
