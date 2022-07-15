import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div>
			<div className="flex p-3 justify-between items-center">
				<Link to="/" className="flex items-center xs:scale-90 sm:scale-100">
					<img className="pointer-events-none h-12" src={logo} alt="logo" />
					<h2 className="font-bold text-lg p-2">UMatter</h2>
				</Link>
				<div className="xs:hidden md:flex items-center">
					<Link className="px-5 hover:underline" to="/">
						Home
					</Link>
					<Link className="px-5 hover:underline" to="/selfhelp">
						Self Help
					</Link>
					<Link className="px-5 hover:underline" to="/credits">
						Credits
					</Link>
					<Link
						className="px-5 transition-all transform hover:scale-110"
						to="/psychologist"
					>
						<button className="bg-primary text-white p-2 rounded-xl">
							Find Psychologist
						</button>
					</Link>
				</div>
				<button
					className="md:hidden items-center p-3 scale-125"
					onClick={() => setToggleMenu(!toggleMenu)}
				>
					{toggleMenu ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</span>
					)}
				</button>
			</div>
			{toggleMenu ? (
				<div className="flex flex-col items-center md:hidden">
					<Link className="p-5" to="/">
						Home
					</Link>
					<Link className="p-5" to="/selfhelp">
						Self Help
					</Link>
					<Link className="p-5" to="/credits">
						Credits
					</Link>
					<Link className="p-5" to="/psychologist">
						<button className="bg-primary text-white p-2 rounded-xl">
							Find Psychologist
						</button>
					</Link>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Navbar;
