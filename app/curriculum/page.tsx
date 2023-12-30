"use client";
import { Smile, SmilePlus, FileBadge, GraduationCap, PersonStanding, Languages, MapPin,} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../componentes/nav";
import { Card } from "../componentes/card";

const socials = [
	{
		icon: <Smile size={22} />,
		href: "",
		label: "",
		handle: "Sobre mim",
	},
	{
		icon: <SmilePlus size={22} />,
		href: "",
		label: "Sou um programador altamente motivado e apaixonado por tecnologia. Meu objetivo é trabalhar em uma empresa de tecnologia líder no mercado, onde possa aplicar minhas habilidades em programação para desenvolver soluções inovadoras e eficientes para a empresa.",
		handle: "Objetivo profissional",
	},
	{
		icon: <FileBadge size={22} />,
		href: "",
		label: "",
		handle: "Certificados",
	},
	{
		icon: <GraduationCap size={22} />,
		href: "",
		label: "",
		handle: "Formação acadêmica",
	},
	{
		icon: <PersonStanding size={22} />,
		href: "",
		label: "Várias linguagens de programação; Desenvolvimento Full-Stack; Trabalho em equipe; Fácil socialização; Rápida adaptação a novas linguagens de programação",
		handle: "Competencias pessoais",
	},
	{
		icon: <Languages size={22} />,
		href: "",
		label: "Português (nativo) e inglês (proeficiente)",
		handle: "Idiomas",
	},
	{
		icon: <MapPin size={22} />,
		href: "",
		label: "Português (nativo) e inglês (proeficiente)",
		handle: "Idiomas",
	},
];


export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
