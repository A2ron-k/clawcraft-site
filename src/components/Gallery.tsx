import React from "react";
import image1 from "../assets/growth.png";

export const Gallery = () => {
	return (
		<section id="screenshot" className="container py-24 sm:py-32">
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
					src={image1}
					alt="Screenshot 1"
					className="w-full h-auto object-cover"
				/>
				<img
					src={image1}
					alt="Screenshot 2"
					className="w-full h-auto object-cover"
				/>
				<img
					src={image1}
					alt="Screenshot 3"
					className="w-full h-auto object-cover"
				/>
				<img
					src={image1}
					alt="Screenshot 4"
					className="w-full h-auto object-cover"
				/>
				<img
					src={image1}
					alt="Screenshot 5"
					className="w-full h-auto object-cover"
				/>
				<img
					src={image1}
					alt="Screenshot 6"
					className="w-full h-auto object-cover"
				/>
			</div>
		</section>
	);
};
