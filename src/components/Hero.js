import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";

export default function Hero(){

    const config = {
        subtitle: "A Budding Developer",
        social:{
            github:'https://github.com/JeevithaDhanasekaran',
            linkedin:'https://www.linkedin.com/in/jeevitha-dhanasekaran-11475a214/',
            gfg:'https://www.geeksforgeeks.org/user/jeevithasekar2127/',
            leetcode:'https://leetcode.com/u/Jeevitha_Dhanasekaran/'
        }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center '>
        <div className='md:w-1/2 flex-col'>
            <h1 className=' text-white text-2xl md:text-6xl font-hero-font'>
                Hi, 
                <br/>I'm Jeevitha <span className='text-black'>Dhanasekaran</span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-8'>
                <a href={config.social.github} className='pr-3 hover:text-white'> <AiOutlineGithub size={30}/> </a>
                <a href={config.social.linkedin} className='pr-3 hover:text-white'> <AiOutlineLinkedin size={30}/> </a>
                <a href={config.social.gfg} className='pr-3 hover:text-white'> <SiGeeksforgeeks size={40} /> </a>
                <a href={config.social.leetcode} className=' hover:text-white'> < TbBrandLeetcode size={40} /> </a>
            </div>
        </div>
        
        <img src={HeroImg} alt='Animated Candidate' className='md:w-1/3'/>
    </section>
}