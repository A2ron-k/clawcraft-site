import { Button } from "./ui/button";

export const Cta = () => {
	return (
		<section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
			<div className="container lg:grid lg:grid-cols-2 place-items-center">
				<div className="lg:col-start-1">
					<h2 className="text-3xl md:text-4xl font-bold ">
						Command
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							{" "}
							Your Cat Army{" "}
						</span>
						Now!
					</h2>
					<p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
						Lead your feline warriors to victory with strategic
						prowess.
					</p>
				</div>

				<div className="space-y-4 lg:col-start-2">
					<a href="https://drive.google.com/file/d/1gOqwK47gmzDNrK3qDw7TfK4OWBlwXxSL/view?usp=sharing">
						<Button className="w-full md:mr-4 md:w-auto">
							Start Playing Today!
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
};
