import React, { Component } from "react";
import logo from "../assets/formicon.png";
import { Navigate } from "react-router-dom";
// import Result from "./Result";
// import Result1 from "./Result1";

export default class Submit extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextSection();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevSection();
	};
	revert = (e) => {
		e.preventDefault();
		this.props.revert();
	};
	handleTreat = (vals) => (e) => {
		e.preventDefault();
		this.props.treatment(vals);
	};
	state = {
		result: false,
		redirectss: false,
	};

	render() {
		const { values } = this.props;
		const { result } = this.state;
		// const { redirectss } = this.state;
		const {
			values: {
				step,
				givenName,
				age,
				gender,
				self_employed,
				family_history,
				work_interfere,
				remote_work,
				tech_company,
				benefits,
				care_options,
				wellness_program,
				seek_help,
				anonymity,
				leave,
				mental_health_consequence,
				phys_health_consequence,
				coworkers,
				supervisor,
				mental_health_interview,
				phys_health_interview,
				mental_vs_physical,
				obs_consequence,
				treatment,
			},
		} = this.props;
		let treat;
		// const redirect=e=>{
		//   e.preventDefault();
		//   this.setState({ redirectss: true });
		//   console.log(redirectss);
		// }
		const submit = (e) => {
			e.preventDefault();

			fetch("https://umatter-backend.herokuapp.com/postSurveyData", {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					age: parseInt(age),
					gender: parseInt(gender),
					self_employed: parseInt(self_employed),
					family_history: parseInt(family_history),
					work_interfere: parseInt(work_interfere),
					remote_work: parseInt(remote_work),
					tech_company: parseInt(tech_company),
					benefits: parseInt(benefits),
					care_options: parseInt(care_options),
					wellness_program: parseInt(wellness_program),
					seek_help: parseInt(seek_help),
					anonymity: parseInt(anonymity),
					leave: parseInt(leave),
					mental_health_consequence: parseInt(mental_health_consequence),
					phys_health_consequence: parseInt(phys_health_consequence),
					coworkers: parseInt(coworkers),
					supervisor: parseInt(supervisor),
					mental_health_interview: parseInt(mental_health_interview),
					phys_health_interview: parseInt(phys_health_interview),
					mental_vs_physical: parseInt(mental_vs_physical),
					obs_consequence: parseInt(obs_consequence),
				}),
			})
				.then((response) => response.json())
				.then((json) => {
					console.log(json);
					const sd = json.msg;
					console.log(sd);
					treat = json.msg.toString();
					console.log(treat);
					values.treatment = treat;
					this.setState({
						result: true,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		};
		return (
			<>
				{result === false ? (
					<div>
						<div className="flex flex-col gap-10 justify-center items-center">
							<div className="flex items-center justify-center mt-7 mb-6">
								<img
									className="pointer-events-none h-20 px-5 md:mr-5"
									src={logo}
									alt="log"
								/>
								<h1 className="font-bold md:text-5xl xs:text-4xl text-center">
									Confirmation Page
								</h1>
							</div>
							<div className="text-center text-2xl">
								<p>Ready to submit or wish to make any changes?</p>
							</div>
							<div className="flex justify-center gap-2 md:gap-6">
								<button
									onClick={submit}
									className="px-10 py-3 text-2xl transition-all xs:scale-90 sm:scale-100 transform hover:scale-110 items-center flex bg-primary text-white p-2 rounded-xl "
								>
									Submit
								</button>
								<button
									onClick={this.back}
									className="px-10 py-3 text-2xl transition-all xs:scale-90 sm:scale-100 transform hover:scale-110 items-center flex bg-primary text-white p-2 rounded-xl "
								>
									Back
								</button>
							</div>
						</div>
					</div>
				) : (
					<>
						{treatment === "0" ? (
							<Navigate to="/result" />
						) : (
							<Navigate to="/result1" />
						)}
					</>
				)}
			</>
		);
	}
}
