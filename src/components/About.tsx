export const About = () => {
	return (
		<section id="story" className="container py-24 sm:py-32">
			<div className="bg-muted/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					{/* <img
						src={pilot}
						alt=""
						className="w-[300px] object-contain rounded-lg"
					/> */}
					<div className="bg-green-0 flex flex-col text-center">
						<div className="pb-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
									Our{" "}
								</span>
								Story
							</h2>
							<p className="text-xl text-muted-foreground mt-4">
								We are developing a 2D Real-Time Strategy (RTS)
								game set in a whimsical world where dogs and
								cats clash for supremacy. In this game, players
								assume the role of leaders of their chosen
								feline faction, employing their strategic
								prowess to dominate the battlefield. They must
								gather resources, build formidable armies, and
								engage in intense battles against rival dog
								packs.
							</p>
							<p className="text-xl text-muted-foreground mt-4">
								Players will embark on a journey of strategy and
								conquest, honing their skills by completing
								dynamic objectives. These objectives range from
								daring raids on dog kennels to expanding their
								empire, constructing essential structures, and
								diversifying their units to strengthen their
								faction.
							</p>

							<p className="text-xl text-muted-foreground mt-4">
								As players progress, they will face increasingly
								challenging enemies and obstacles, requiring
								careful planning and resource management. Each
								decision made will shape the outcome of battles
								and determine the fate of their feline
								civilization. With its end goal to achieve
								dominance in the dog-ruling world.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
