import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
	imageUrl: string;
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
		imageUrl: "https://i.pravatar.cc/150?img=35",
		name: "Aaron Kwah",
		position: "Game Developer Lead",
		socialNetworks: [{ name: "Linkedin", url: "http://linkedin.com" }],
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=60",
		name: "Kristina Högberg",
		position: "Level Designer",
		socialNetworks: [{ name: "Linkedin", url: "http://linkedin.com" }],
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=36",
		name: "Rikard Johansson",
		position: "Unit Asset Designer",
		socialNetworks: [{ name: "Linkedin", url: "http://linkedin.com" }],
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=17",
		name: "Eva Tanya Banerjee",
		position: "Building Asset Designer",
		socialNetworks: [{ name: "Linkedin", url: "http://linkedin.com" }],
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
					({
						imageUrl,
						name,
						position,
						socialNetworks,
					}: TeamProps) => (
						<Card
							key={name}
							className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
						>
							<CardHeader className="mt-8 flex justify-center items-center pb-2">
								<img
									src={imageUrl}
									alt={`${name} ${position}`}
									className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
								/>
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
