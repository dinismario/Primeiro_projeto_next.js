import { Metadata } from "next";
import { Section } from "../components/section/Section";
import { title } from "process";

export const metadata: Metadata = {
  title: "CordaSe - Todos os cursos"
};

export default function PageCursos() {
    return(
        <main className="mt-8 flex justify-center">
          <div className='w-full min-[880px]:max-w-[880px]'>
            <Section
            title="Todos os cursos"
            variant="grid"
            items={[
              {
                href: '/cursos',
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
                href: '/cursos',
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
                href: '/cursos',
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
                href: '/cursos',
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