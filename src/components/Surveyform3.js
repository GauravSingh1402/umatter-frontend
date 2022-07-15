import React, { Component } from "react";
import logo from "../assets/formicon.png";

export default class Surveyform3 extends Component {
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
				values.care_options == null ||
				values.anonymity === null ||
				values.seek_help === null ||
				values.wellness_program === null
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
									Do you know the options for mental health care your employer
									provides?
								</label>
								<div className="flex w-4/5 justify-between self-center">
									<div className="flex gap-1 items-center">
										<input
											name="care_options"
											onChange={handleChange("care_options")}
											value={1}
											type="radio"
											className="w-6 h-6"
										/>
										<label className="text-justify text-lg md:text-xl lg:text-2xl">
											Yes
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="care_options"
											onChange={handleChange("care_options")}
											value={0}
											type="radio"
											className="w-6 h-6"
										/>
										<label className="text-justify text-lg md:text-xl lg:text-2xl">
											No
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="care_options"
											onChange={handleChange("care_options")}
											value={values.menemp}
											type="radio"
											className="w-6 h-6"
										/>
										<label className="text-justify text-lg md:text-xl lg:text-2xl">
											Not Sure
										</label>
									</div>
								</div>
							</div>
							<div className="flex gap-2 flex-col">
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Has your employer ever discussed mental health as part of an
									employee wellness program?
								</label>
								<div className="flex w-4/5 justify-evenly self-center">
									<div className="flex gap-1 items-center">
										<input
											name="wellness"
											value={1}
											onChange={handleChange("wellness_program")}
											type="radio"
											className="w-6 h-6"
										/>
										<label className="text-justify text-lg md:text-xl lg:text-2xl">
											Yes
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="wellness"
											onChange={handleChange("wellness_program")}
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
							<div className="flex gap-2 flex-col">
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Does your employer provide resources to learn more about
									mental health issues and how to seek help?
								</label>
								<div className="flex w-4/5 justify-evenly self-center">
									<div className="flex gap-1 items-center">
										<input
											name="seek_help"
											value={1}
											onChange={handleChange("seek_help")}
											type="radio"
											className="w-6 h-6"
										/>
										<label className="text-justify text-lg md:text-xl lg:text-2xl">
											Yes
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="seek_help"
											onChange={handleChange("seek_help")}
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
							<div className="flex gap-2 flex-col">
								<label className="text-justify text-lg md:text-xl lg:text-2xl">
									Is your anonymity protected if you choose to take advantage of
									mental health or substance abuse treatment
								</label>
								<div className="flex w-4/5 justify-between self-center">
									<div className="flex gap-1 items-center">
										<input
											name="anoymity"
											value={1}
											onChange={handleChange("anonymity")}
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
											name="anoymity"
											value={0}
											onChange={handleChange("anonymity")}
											type="radio"
											className="w-6 h-6"
										/>
										<label className="text-justify text-lg md:text-xl lg:text-2xl">
											No
										</label>
									</div>
									<div className="flex gap-1 items-center">
										<input
											name="anoymity"
											value={2}
											onChange={handleChange("anonymity")}
											type="radio"
											className="w-6 h-6"
										/>
										<label className="text-justify text-lg md:text-xl lg:text-2xl">
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
