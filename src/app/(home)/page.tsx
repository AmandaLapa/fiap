import { NextPage } from "next";
import Hero from "./components/hero";
import Marquee from "./components/marquee";
import Scroll from "./components/scroll";
import Wave from "./components/wave";
import Courses from "./components/courses";
import Faq from "./components/faq";

const Home: NextPage = () => {
	return (
		<main>
			<Hero />
			<Marquee />
			<Scroll />
			<Wave />
			<Courses />
			<Faq />
		</main>
	);
};

export default Home;
