import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "Dynamic Resource Gathering",
		description:
			"Efficiently manage your economy with Silly Cats gathering resources from various zones.",
		image: image4,
	},
	{
		title: "Diverse Unit Types",
		description:
			"Command a unique feline army with distinct abilities and roles to dominate the battlefield.",
		image: image3,
	},
	{
		title: "Real-Time Tactical Combat",
		description:
			"Engage in thrilling battles with strategic positioning and fog of war mechanics.",
		image: image,
	},
];

const featureList: string[] = [
	// "Dark/Light theme",
	// "Reviews",
	// "Features",
	// "Pricing",
	// "Contact form",
	// "Our team",
	// "Responsive design",
	// "Newsletter",
	// "Minimalist",
];

export const Features = () => {
	return (
		<section id="features" className="container py-24 sm:py-32 space-y-8">
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center">
				Many{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Great Features
				</span>
			</h2>

			<div className="flex flex-wrap md:justify-center gap-4">
				{featureList.map((feature: string) => (
					<div key={feature}>
						<Badge variant="secondary" className="text-sm">
							{feature}
						</Badge>
					</div>
				))}
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{features.map(({ title, description, image }: FeatureProps) => (
					<Card key={title}>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter>
							<img
								src={image}
								alt="About feature"
								className="w-[200px] lg:w-[300px] mx-auto"
							/>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
