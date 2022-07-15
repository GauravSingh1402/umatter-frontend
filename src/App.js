import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Survey from "./components/Survey";
import Result1 from "./components/Result1";
import Result from "./components/Result";
import SelfHelp from "./components/SelfHelp";
import Psychologist from "./components/Psychologist";
import Credit from "./components/Credit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Navbar />
								<Dashboard /> <Footer />
							</>
						}
					/>
					<Route
						path="/selfhelp"
						element={
							<>
								<Navbar />
								<SelfHelp />
							</>
						}
					/>
					<Route
						path="/form"
						element={
							<>
								<Navbar /> <Survey />
							</>
						}
					/>
					<Route
						path="/result"
						element={
							<>
								<Navbar /> <Result />
							</>
						}
					/>
					<Route
						path="/result1"
						element={
							<>
								<Navbar /> <Result1 />
							</>
						}
					/>
					<Route
						path="/psychologist"
						element={
							<>
								<Navbar />
								<Psychologist />
							</>
						}
					/>
						<Route
						path="/credits"
						element={
							<>
								<Navbar />
								<Credit />
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}
