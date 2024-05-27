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
		title: "Resource Gathering",
		description:
			"Players gather resources such as catnip, fish, and yarn to fuel their faction's growth and expansion.",
		image: image4,
	},
	{
		title: "Unit Creation and Management",
		description:
			"Players recruit and command various feline units, each with distinct abilities and roles, and manage their deployment and movement on the battlefield.",
		image: image3,
	},
	{
		title: "Building Construction",
		description:
			"Players establish structures such as scratching posts, cat trees, and lookout towers to fortify their base, produce units, and unlock additional capabilities.",
		image: image,
	},
	{
		title: "Dynamic Objectives",
		description:
			"Players complete dynamic objectives and missions, such as raiding dog kennels, defending territory from invaders, or rescuing stranded cats, to advance the storyline and unlock rewards.",
		image: image,
	},
	{
		title: "Random Events",
		description:
			"Players face unexpected attacks and challenges from rival factions, rogue dogs, or mischievous mice, keeping the gameplay experience dynamic and unpredictable.",
		image: image,
	},
	{
		title: "Unit Traits and Strategy",
		description:
			"Players utilize units with distinct traits, strengths, and weaknesses, employing strategic matchups akin to rock-paper-scissors to outmaneuver and defeat their opponents.",
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
				{features.map(({ title, description }: FeatureProps) => (
					<Card key={title}>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter></CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
