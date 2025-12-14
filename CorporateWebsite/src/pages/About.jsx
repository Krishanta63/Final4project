import React from 'react'

const About = () => {
  return (
    <>
    <section className='py-6 h-[90vh] flex items-center'>
        <div className="flex container mx-auto justify-between">
            <div className="pic rounded-full overflow-hidden w-1/2 ml-5">
                <img className='w-[300px]' src="https://www.shutterstock.com/image-vector/people-hot-drinks-talking-during-260nw-2569348577.jpg" alt="" />
            </div>
            <div className="info w-1/2  px-4 items-center flex flex-col justify-center gap-5">
                <h1 className='text-3xl font-bold border-b-4 border-amber-300 inline-block p-4'>About Us</h1>
                <p className='mt-4 text-lg text-center'>Welcome to our coffee shop! We are passionate about serving the finest quality coffee and creating a warm, inviting atmosphere for our customers. Our journey began with a simple idea: to bring people together over a great cup of coffee.
                </p>
                <div className="icons">
                    <div className="">f</div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About