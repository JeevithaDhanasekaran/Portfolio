import ResumeImg from '../assets/resume.jpg';


export default function Resume(){

    const config = {
        link: 'https://drive.google.com/file/d/1r3kiyEx1PXmGauwG73KWBEFapTpPBWji/view?usp=sharing'
    }

    return <section id='resume' className='flex flex-col md:flex-row  bg-about px-5 text-[#405D72]'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img src={ResumeImg} alt='Resume' className='w-[300px]'></img>
        </div>
        <div className='md:w-1/2 flex justify-center py-5'>
            <div className='flex flex-col justify-center font-semibold text-black'>
                <h1 className='text-4xl  font-bold mb-5 w-fit'>Resume </h1>
                <p className='pb-3'>You can view my resume here </p>
                <a href= {config.link} className='btn w-fit'>Download</a>
            </div>
        </div>
    </section>
}