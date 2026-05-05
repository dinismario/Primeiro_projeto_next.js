import { ClassGroup } from "@/app/components/course-content/components/ClassGroup";
import { CourseContent } from "@/app/components/course-content/CourseContent";
import { CourseHeader } from "@/app/components/course-header/CourseHeader";
import { StartCourse } from "@/app/components/StartCourse";
import { Metadata } from "next";

interface Props{
    params:{id: string}
}


export async function generateMetadata({params}: Props): Promise<Metadata> {

  return{
    title: params.id,
    description: params.id
  };
};

export default function PageCurseDetail({params}: Props){

    return(
        <main className='mt-8 flex justify-center'>
            <div className='w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 lg:px-0 md:flex-row-reverse'>

                    <div className="flex-1">
                        <StartCourse 
                        idClass="1" 
                        idCourse="1"
                        title="Curso de Figma para DEVs "
                        imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"

                        />
                    </div>

                    <div className="flex-[2] flex flex-col gap-12 pb-12">
                        <CourseHeader
                        numberOfClsses = {48}
                        title="Curso de Figma para DEVs"               
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           obis sint cupiditate necessitatibus aliquam consequatur 
           magnam commodi dolorum officia iusto? Quae doloremque 
           saepe facere quisquam veniam possimus nostrum praesentium, 
           aliquam eveniet.
           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           obis sint cupiditate necessitatibus aliquam consequatur 
           magnam commodi dolorum officia iusto? Quae doloremque 
           saepe facere quisquam veniam possimus nostrum praesentium, 
           aliquam eveniet.
           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           obis sint cupiditate necessitatibus aliquam consequatur 
           magnam commodi dolorum officia iusto? Quae doloremque 
           saepe facere quisquam veniam possimus nostrum praesentium, 
           aliquam eveniet.
           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           obis sint cupiditate necessitatibus aliquam consequatur 
           magnam commodi dolorum officia iusto? Quae doloremque 
           saepe facere quisquam veniam possimus nostrum praesentium, 
           aliquam eveniet."
                        />

                        <CourseContent
                        classGroups={[
                            {
                                title: "Itrodução e apresentação do projeto",
                                courseId: "123",
                                classes: [
                                    {id:'234', title: 'Next, TailwindCSS e Typescript: #00 - Apresentação do Projeto' },
                                    {id:'235', title: 'Next, TailwindCSS e Typescript: #01 - Apresentação do Prototipo' }
                                ]
                            },

                             {
                                title: "Primeiras configuração necessárias",
                                courseId: "123",
                                classes: [
                                    {id:'234', title: 'Next, TailwindCSS e Typescript: #00 - Apresentação do Projeto' },
                                    {id:'235', title: 'Next, TailwindCSS e Typescript: #01 - Apresentação do Prototipo' }
                                ]
                            }, 
                            
                        ]}
                        />
                    </div>
            </div>
        </main>
    );
}