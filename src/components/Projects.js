import websiteImage1 from '../assets/ecommerce-websites.jpg';
import websiteImage2 from '../assets/food-ecommerce.jpg';
import websiteImage3 from '../assets/website-blog.jpg';


export default function Projects() {

    const config = {
        projects : [
            {
                image:websiteImage1,
                description :'An E-commerce Website Build with Mern stack',
                link:'https://github.com/JeevithaDhanasekaran/WeatherApp'
            },
            {
                image:websiteImage2,
                description :'A food E-commerce website build with Mern',
                link:'https://github.com/JeevithaDhanasekaran/WeatherApp'
            },
            {
                image:websiteImage3,
                description :'A blogging website made with next js and mongo db',
                link:'https://github.com/JeevithaDhanasekaran/WeatherApp'
            }
        ]
    }

    return <section id='projects' className="flex flex-col px-5 py-20 justify-center bg-primary">
        <div className="w-full">
            <div className="flex justify-start px-10 py-5">
                <h1 className='text-4xl  font-bold mb-5 w-fit'>Projects</h1>
            </div>
        </div>
        <div className="w-full text-white">
            <div className='flex flex-col md:flex-row px-10 gap-4'>
                {config.projects.map((project) => (
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={project.image} alt='Portfolio Website'/>
                    <div className='project-desc'>
                        <p className='text-center py-5 px-5'>{project.description}</p>
                        <div className='flex justify-center'>
                            <a target='_blank' href={project.link} className='btn'>View Project</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
}

