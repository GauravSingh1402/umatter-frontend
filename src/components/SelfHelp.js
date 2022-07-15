import React from "react";
import "../App.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import selfhelpicon from "../assets/selfhelpicon.png";
import smiling from "../assets/smiling.png";
import thoughts from "../assets/thoughts.png";
import hobbyicon from "../assets/hobbyicon.png";
import hobbies1 from "../assets/hobbies1.png";
import hobbies2 from "../assets/hobbies2.png";
import { useNavigate } from "react-router-dom";
import note from "../assets/note.png";
import Footer from "./Footer";
function SelfHelp() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `https://www.reddit.com/r/mademesmile`;
		navigate(path);
	};
	//   const [currentPost, setCurrentPost] = useState({
	// 		title: "",
	// 		text: "",
	// 		resource: "",
	// 	});

	// 	const [allPosts, setAllPosts] = useState([]);

	// 	useEffect(() => {
	// 		fetch("https://www.reddit.com/r/mademesmile.json")
	// 			.then((res) => res.json())
	// 			.then((data) => setAllPosts(data.data.children));
	// 	}, []);
	//   const[i,setI]=useState(0);
	// 	function getPost() {
	// 		const title = allPosts[i].data.title;
	// 		const text = allPosts[i].data.selftext_html;
	// 		const resource = "hello";
	// 		setCurrentPost({
	// 			title: title,
	// 			text: text,
	// 			resource: resource,
	// 		});
	//     setI(i+1);
	//     console.log(i);
	// 	}
	const quotes = [
		"Nothing is impossible. The word itself says 'I'm possible!",
		"The bad news is time flies. The good news is you're the pilot.",
		"Spread love everywhere you go",
		"It is during our darkest moments that we must focus to see the light",
		"Try to be a rainbow in someone's cloud",
		"Nobody built like you, you design yourself",
		"Out of the mountain of despair, a stone of hope",
		"You are never too old to set another goal or to dream a new dream.",
		"Embrace the glorious mess that you are.",
		"Never bend your head. Always hold it high. Look the world straight in the eye",
	];

	return (
		<>
			<div class="flex items-center  justify-center mt-7 mb-6">
				<img src={selfhelpicon} class="pointer-events-none h-20 mr-5" />
				<h1 class="font-bold md:text-5xl xs:text-4xl text-center">Self Help</h1>
			</div>
			<div class="w-[screen] my-7 flex justify-center items-center flex-col sm:flex-row sm:justify-around ...">
				<div class="my-2 w-[90%] py-5 h-[225px] flex justify-center items-center flex-col sm:py-0 sm:w-[45%] sm:h-[250px] sm:my-1 ...">
					<img
						src={smiling}
						class="object-contain h-7 w-7 md:h-10 md:w-10 ..."
					/>
					<h1 class="my-2 font-bold text-base text-center md:text-xl">
						Finds Way To Smile
					</h1>
					<p class="my-2 text-xs text-center lg:text-base ...">
						Explore posts from the subreddit r/mademesmile
					</p>
					<button class="my-2 bg-primary hover:scale-110 hover:text-black text-white font-bold py-2 px-4 rounded-xl inline-flex items-center">
						<a href="https://www.reddit.com/r/mademesmile">Go to Subreddit</a>
						&nbsp;&nbsp;
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
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div class="w-screen my-7 flex justify-center items-center flex-col-reverse md:flex-row">
				<Swiper
					className="xs:w-3/4 md:w-1/2 h-[150px] text-center rounded-xl bg-primary text-white md:h-[250px]"
					tag="section"
					wrapperTag="ul"
					id="main"
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					navigation
					pagination={{ clickable: true }}
				>
					{quotes.map((q, x) => (
						<SwiperSlide tag="li" key={x}>
							<h1 className="px-8 font-bold lg:text-3xl md:text-xl mt-[13%] sm:mt-[15%] md:mt-[19%] lg:mt-[13%] xl:mt-[13%] 2xl:[mt-0%]">
								{q}
							</h1>
						</SwiperSlide>
					))}
				</Swiper>
				<div class="my-2 w-10/12 py-5 h-5/6 flex justify-center items-center flex-col sm:py-0 sm:w-5/12 sm:h-3/6 ...">
					<img
						src={thoughts}
						class="object-contain h-7 w-7 md:h-10 md:w-10 ..."
					/>
					<h1 class="my-2 font-bold text-base text-center md:text-xl">
						Inspiring Quotes to Brighten Your Day
					</h1>
				</div>
			</div>
			<div class="w-screen my-7 flex justify-evenly items-center flex-col sm:flex-row ...">
				<img
					src={hobbies1}
					class="object-contain h-36 w-36 md:h-56 md:w-56 ..."
				/>
				<div class="my-2 w-10/12 py-5 h-5/6 flex justify-center items-center flex-col sm:py-0 sm:w-5/12 sm:h-3/6 ...">
					<img
						src={hobbyicon}
						class="object-contain h-7 w-7 md:h-10 md:w-10 ..."
					/>
					<h1 class="my-2 font-bold text-base text-center md:text-xl">
						Explore Different Hobbies
					</h1>
					<p class="my-2 mx-4 text-xs text-center lg:text-base ...">
						Exploring and investing time in various hobbies has shown to improve
						mental illness
					</p>
				</div>
				<img
					src={hobbies2}
					class="object-contain h-36 w-36 md:h-56 md:w-56 ..."
				/>
			</div>
			<div className="text-center text-1xl">
				<div className="flex justify-center pb-4">
					<div class="my-2 w-10/12 py-5 h-5/6 flex justify-center items-center flex-col sm:py-0 sm:w-5/12 sm:h-3/6 ...">
						<img
							src={note}
							class="object-contain h-7 w-7 md:h-10 md:w-10 ..."
						/>
						<h1 class="my-2 font-bold text-base text-center md:text-xl">
							Some more tips to tackle depression
						</h1>
					</div>
				</div>
				<div className="flex justify-center px-5">
					<ul class="tips-list flex flex-col gap-5 text-justify">
						<li className="litem">
							👉 Share your problems with family or close friends
						</li>
						<li className="litem">👉 Start practicing meditation and yoga</li>
						<li className="litem">👉 Eat to your hearts content</li>
						<li className="litem">👉 Explore new hobbies</li>
						<li className="litem">
							👉 Go for walks regularly as it is relaxing
						</li>
						<li className="litem">👉 Start loving yourself </li>
						<li className="litem">
							👉 Do not try to overthink matters and DO NOT DOUBT YOURSELF
						</li>
						<li className="litem">
							👉 Buy or Adopt a pet as they can show u the love u may be
							searching for
						</li>
						<li className="litem">
							👉 Look at old photos from trips or happy memories
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-8">
				<Footer></Footer>
			</div>
		</>
	);
}

export default SelfHelp;
