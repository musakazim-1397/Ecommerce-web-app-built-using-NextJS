import React from 'react'

const Blog = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center gap-8'>
         <div className="w-[30rem] h-[30rem] border-2 border-gray-500 relative">
            <img className="w-full h-full" src='/img/featured/featured-3.jpg'/>
            <button className='py-2 px-4 bg-blue-500 absolute -bottom-[4%] left-[40%]'>SEE MORE</button>
        </div>
        <div className="flex flex-col justify-between items-start w-[35rem] h-[30rem]">
            <div>
                <h1 className='text-4xl'>FROM THE BLOG</h1>
            </div>
            <div className="flex flex-col justify-between items-start gap-8">
                <div className="firstBlog flex justify-between items-center gap-4">
                    <img src='/img/blog-thumb/1.jpg' className='w-[10rem] h-[7rem]'/>
                    <div className="flex flex-col justify-between items-start">
                        <div>
                            <h1 className='text-white text-[1.3rem] mb-2'>10 TIPS TO DRESS LIKE A QUEEN</h1>
                            <span className=' text-gray-700 text-xs'>SEPTEMBER 28, 2022 | BY MARIA DELOREEN</span>
                        </div>
                        <div>
                            <span className=' text-gray-700 text-xs'>Read More</span>
                        </div>
                    </div>
                </div>
                <div className="secondBlog flex justify-between items-center gap-4">
                <img src='/img/blog-thumb/2.jpg' className='w-[10rem] h-[7rem]'/>
                    <div className="flex flex-col justify-between items-start">
                        <div>
                            <h1 className='text-white text-[1.3rem] mb-2'>FASHION OUTLET PRODUCTS</h1>
                            <span className=' text-gray-700 text-xs'>SEPTEMBER 20, 2022 | BY JESSICA SMITH</span>
                        </div>
                        <div>
                            <span className=' text-gray-700 text-xs'>Read More</span>
                        </div>
                    </div>
                </div>
                <div className="thirdBlog flex justify-between items-center gap-4">
                <img src='/img/blog-thumb/3.jpg' className='w-[10rem] h-[7rem]'/>
                    <div className="flex flex-col justify-between items-start">
                        <div>
                            <h1 className='text-white text-[1.3rem] mb-2'>THE LITTLE BLACK DRESS JUST FOR YOU</h1>
                            <span className=' text-gray-700 text-xs'>SEPTEMBER 18, 2022 | BY MARIA DELOREEN</span>
                        </div>
                        <div>
                            <span className=' text-gray-700 text-xs'>Read More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog