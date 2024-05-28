import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface TeamProps {
	name: string;
	position: string;
	socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
	name: string;
	url: string;
}

const teamList: TeamProps[] = [
	{
		name: "Aaron Kwah",
		position: "Game Developer Lead",
		socialNetworks: [
			{ name: "Linkedin", url: "https://www.linkedin.com/in/aaronkwah/" },
		],
	},
	{
		name: "Kristina Högberg",
		position: "Level Designer",
		socialNetworks: [{ name: "Linkedin", url: "http://linkedin.com" }],
	},
	{
		name: "Rikard Johansson",
		position: "Unit Asset Designer",
		socialNetworks: [
			{
				name: "Linkedin",
				url: "https://www.linkedin.com/in/rkaj/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
			},
		],
	},
	{
		name: "Eva Tanya Banerjee",
		position: "Building Asset Designer",
		socialNetworks: [
			{
				name: "Linkedin",
				url: "https://www.linkedin.com/in/eva-banerjee-b7aa45211/",
			},
		],
	},
];

export const Team = () => {
	const socialIcon = (iconName: string) => {
		switch (iconName) {
			case "Linkedin":
				return <Linkedin size="20" />;
		}
	};

	return (
		<section id="team" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				Meet the{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Purr-fect Dev Team{" "}
				</span>
				Behind the Game!
			</h2>

			<p className="mt-4 mb-10 text-xl text-muted-foreground">
				Bringing your feline strategy dreams to life, one whisker at a
				time!
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
				{teamList.map(
					({ name, position, socialNetworks }: TeamProps) => (
						<Card
							key={name}
							className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
						>
							<CardHeader className="mt-8 flex justify-center items-center pb-2">
								<CardTitle className="text-center">
									{name}
								</CardTitle>
								<CardDescription className="text-primary">
									{position}
								</CardDescription>
							</CardHeader>

							<CardFooter>
								{socialNetworks.map(
									({ name, url }: SociaNetworkslProps) => (
										<div key={name}>
											<a
												rel="noreferrer noopener"
												href={url}
												target="_blank"
												className={buttonVariants({
													variant: "ghost",
													size: "sm",
												})}
											>
												<span className="sr-only">
													{name} icon
												</span>
												{socialIcon(name)}
											</a>
										</div>
									)
								)}
							</CardFooter>
						</Card>
					)
				)}
			</div>
		</section>
	);
};
