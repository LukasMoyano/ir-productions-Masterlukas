import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const SolutionsSection = () => {
	return (
		<section id="soluciones" className="py-12 md:py-20 lg:py-28 bg-gray-50">
			<div className="container mx-auto px-4 md:px-6">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
						Soluciones
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Nuestras Líneas de Solución
					</p>
				</div>
				<div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-1">
					<Card className="transform hover:scale-105 transition-transform duration-300">
						<CardHeader>
							<CardTitle className="text-2xl font-bold">
								Tres pilares tecnológicos para transformar tu futuro
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600 mb-6">
								Descubre cómo nuestra propuesta integral de Upcycling,
								Inteligencia Artificial y Robótica está revolucionando la
								agricultura sostenible.
							</p>
							<Link to="/presentacion-cultivatech">
								<Button>
									Descubre más <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default SolutionsSection;
