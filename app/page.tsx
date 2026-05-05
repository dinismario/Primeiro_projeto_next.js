import { Metadata } from "next";
import Image from "next/image";
import { Card } from "./components/card/card";
import { Section } from "./components/section/Section";
import { KeepWatching } from "./components/KeepWatching ";

export const metadata: Metadata = {
  title: "CordaSe - Pagina Inicial"
};

export default function PageHome() {
  return (
      <main className="mt-8 flex justify-center">
    <div className='w-full min-[880px]:max-w-[880px] flex flex-col gap-4'>

        <KeepWatching />
        <Section
        variant="h-list"
        title="Veja mais Cursos"
         items={[
              {
                href: '/cursos/123',
                title: 'Curso de API Rest, Node e Typescript',
                image: 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg',
                description: `onsectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
            `
              }, 

              {
                href: '/cursos/123',
                title: 'Curso de API Rest, Node e Typescript',
                image: 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg',
                description: `onsectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
            `
              }, 

              {
                href: '/cursos/123',
                title: 'Curso de API Rest, Node e Typescript',
                image: 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg',
                description: `onsectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
            `
              }, 

              {
                href: '/cursos/123',
                title: 'Curso de API Rest, Node e Typescript',
                image: 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg',
                description: `onsectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquam molestias pariatur nihil in aut, culpa nemo sequi
            maiores ducimus dolore quam odit voluptatibus fuga alias,
            explicabo error facere inventore mollitia?
            `
              }, 
            ]}
        />
    </div>
      </main>
  );
} 