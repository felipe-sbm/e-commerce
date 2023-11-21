import Link from "next/link";
import Particles from "./componentes/particulas";
import React from "react";

const navigation = [
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
  { name: "Curriculum", href: "/curriculum" },
  { name: "Lista de visitantes (em breve!)", href: "/lista" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Felipe SBM
      </h1>
      {/* <img src="card.gif" alt="Card do SBM" /> */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Muito prazer e obrigado por estar aqui! Me chamo{" "}
          <Link
            target="_blank"
            href="https://instagram.com/felipe_sbm"
            className="underline duration-500 hover:text-zinc-300"
          >
            Felipe Samuel
          </Link>
          , e comecei na carreira de programação no ano de 2022 pelo
          <br />{" "}
          <Link
            target="_blank"
            href="https://portal.imd.ufrn.br/portal/"
            className="underline duration-500 hover:text-zinc-300"
          >
            IMD na UFRN
          </Link>{" "}
          , e estou no meu terceiro semestre. Pretendo me aprofundar mais
          fazendo o bacharel e graduações.
        </h2>
      </div>
    </div>
  );
}
