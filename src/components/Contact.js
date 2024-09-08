export default function Contact(){

    const config = {
        email:'jeevithasekar2127@gmail.com',
        phone:'+919876452301'
    }

    return <section id="contact" className='flex flex-col  text-white bg-primary py-28'>
        <div className='flex flex-col items-center'>
                <h1 className='text-4xl  font-bold mb-5 w-fit'>Contact </h1>
                <p className='pb-3 text-center'>If you want to discuss more in detail, Please contact me</p>
                <p className="py-2"><span className="font-bold"> Email :</span>{config.email}</p>
                <p className="py-2"><span className="font-bold"> Phone :</span>{config.phone}</p>
        </div>
    </section>
}