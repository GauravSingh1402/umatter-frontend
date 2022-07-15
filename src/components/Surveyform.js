import React, { Component } from "react";
import logo from "../assets/formicon.png";

export default class Surveyform extends Component {
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
			console.log(values.gender);
			e.preventDefault();
			if (values.givenName === null) {
				alert("Please Enter Name");
			} else if (values.age === null) {
				alert("Please Enter Age");
			} else if (values.gender === null) {
				alert("Please Select Gender");
			} else if (values.self_employed === null) {
				alert("All The Fields are Mandatory");
			} else {
				this.continue(e);
			}
		};
		return (
			<div>
				<div className="flex items-center  justify-center mt-7 mb-6">
					<img className="pointer-events-none h-20 mr-5" src={logo} alt="log" />
					<h1 className="font-bold md:text-5xl xs:text-4xl text-center">
						General Survey
					</h1>
				</div>
				<div className="flex justify-center">
					<div className="bg-primary bg-opacity-50 rounded-2xl flex flex-col gap-8 md:w-10/12 xs:w-11/12 px-5 py-10 lg:px-10">
						<div className="flex justify-between flex-col gap-2 lg:flex-row">
							<label className="text-2xl self-center">Name</label>
							<input
								name="giveName"
								value={values.givenName}
								onChange={handleChange("givenName")}
								type="text"
								className="rounded-md h-10 text-lg px-3 lg:w-2/3"
							></input>
						</div>
						<div className="flex justify-between flex-col gap-2 lg:flex-row">
							<label className="text-2xl self-center">Age</label>
							<input
								onChange={handleChange("age")}
								value={values.age}
								type="number"
								className="rounded-md h-10 text-lg px-3 lg:w-2/3"
							></input>
						</div>
						<div className="flex justify-between flex-col gap-2 lg:flex-row">
							<label className="text-2xl self-center">Gender</label>
							<div className="flex justify-around lg:w-2/3 lg:justify-between">
								<div className="flex items-center gap-2">
									<input
										name="gender"
										value={1}
										onChange={handleChange("gender")}
										type="radio"
										className="w-6 h-6"
									/>
									<label className="text-2xl self-center" name=" yes">
										Male
									</label>
								</div>
								<div className="flex items-center gap-2">
									<input
										name="gender"
										value={0}
										onChange={handleChange("gender")}
										type="radio"
										className="w-6 h-6"
									/>
									<label className="text-2xl self-center" name="no">
										Female
									</label>
								</div>
							</div>
						</div>
						<div className="flex justify-between flex-col gap-2 lg:flex-row">
							<label className="text-2xl self-center">
								Are you self employed
							</label>
							<div className="flex justify-around lg:w-2/3 lg:justify-between">
								<div className="flex items-center gap-2">
									<input
										name="self_employed"
										value={1}
										onChange={handleChange("self_employed")}
										type="radio"
										className="w-6 h-6"
									/>
									<label className="text-2xl self-center" name=" yes">
										Yes
									</label>
								</div>
								<div className="flex items-center gap-2 lg:mr-12">
									<input
										name="self_employed"
										value={0}
										onChange={handleChange("self_employed")}
										type="radio"
										className="w-6 h-6"
									/>
									<label className="text-2xl self-center" name="no">
										No
									</label>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<button
								onClick={check}
								className="px-10 py-3 text-2xl transition-all xs:scale-90 sm:scale-100 transform hover:scale-110 items-center flex bg-primary text-white p-2 rounded-xl lg:scale-75 lg:hover:scale-95"
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
