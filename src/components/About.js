import AboutImg from '../assets/about.png';


export default function About(){

    const config = {
        line1: 'Welcome to my portfolio!',
        
        line2: "I’m Jeevitha Dhanasekaran,a final year student in field of Computer Science and Engineering and I am passionate about software development. I have a foundational understanding of Java, React, DBMS, and MySQL. My academic journey has equipped me with the basics of coding and database management, and I am eager to apply my skills in real-world projects." ,

        line3:'I am enthusiastic about learning and growing in the tech industry, and I thrive on solving problems and creating efficient solutions. In my free time, I enjoy exploring new technologies and enhancing my coding skills. Thank you for visiting my portfolio!'
    }

    return <section id='about' className='flex flex-col md:flex-row  bg-about px-5 text-[#405D72]'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg} alt='About me'></img>
        </div>
        <div className='md:w-1/2 flex justify-center py-5'>
            <div className='flex flex-col justify-center font-semibold text-black'>
                <h1 className='text-4xl  font-bold mb-5 w-fit'>About Me </h1>
                <p className='pb-3'> {config.line1} </p>
                <p className='pb-3'>{config.line2}</p>
                <p className='pb-3'>{config.line3}</p>
            </div>
        </div>
    </section>
}