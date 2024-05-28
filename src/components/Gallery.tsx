import React from "react";
import test from "../assets/test.gif";
import dev from "../assets/dev.png";
import dev1 from "../assets/dev-1.png";
import level1 from "../assets/level-one.png";
import level2 from "../assets/level-two.png";
import level3 from "../assets/level-three.png";
import level4 from "../assets/level-three-1.png";
import titlescreen from "../assets/title-screen.png";

export const Gallery = () => {
	return (
		<section id="screenshots" className="container py-24 sm:py-32">
			{/* 3 section */}
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center">
				A Little Sneak{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Peek
				</span>
			</h2>

			{/* grid of images 3 by 3 */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
				<img
					src={test}
					alt="Screenshot 1"
					className="w-full h-auto object-cover"
				/>
				<img
					src={level1}
					alt="Screenshot 2"
					className="w-full h-auto object-cover"
				/>
				<img
					src={level2}
					alt="Screenshot 3"
					className="w-full h-auto object-cover"
				/>
				<img
					src={level3}
					alt="Screenshot 4"
					className="w-full h-auto object-cover"
				/>
				<img
					src={level4}
					alt="Screenshot 5"
					className="w-full h-auto object-cover"
				/>
				<img
					src={titlescreen}
					alt="Screenshot 6"
					className="w-full h-auto object-cover"
				/>
				<img
					src={dev}
					alt="Screenshot 7"
					className="w-full h-auto object-cover"
				/>
				<img
					src={dev1}
					alt="Screenshot 8"
					className="w-full h-auto object-cover"
				/>
			</div>
		</section>
	);
};
