import taufiq from "../utils/images/taufiq.jpg"
import janhwee from "../utils/images/janwee.jpg"
import abhay from "../utils/images/abhay.jpg"
import shivam from "../utils/images/shivam.jpg"

const Blog =()=>{
    return (
        <div>
<div className="bg-white py-24 sm:py-32 lg:px-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">Our Team thoughts on building this Project</p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <article className="flex max-w-2xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Feb 25, 2024</time>
          {/* <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a> */}
        </div>
        <div className="group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              {/* <span className="absolute inset-0"></span> */}
              Concept of vitrual library
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></p>
        </div>
        <div className=" mt-8 flex items-center gap-x-4">
          <img src={abhay} alt="abhay" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              {/* <a href="#"> */}
                {/* <span className="absolute inset-0"></span> */}
               Abhay Pratap Maurya
              {/* </a> */}
            </p>
            <p className="text-gray-600">AR/VR | ML</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-2xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          {/* <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a> */}
        </div>
        <div className="group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {/* <a href="#"> */}
              {/* <span className="absolute inset-0"></span> */}
              Boost your conversion rate
            {/* </a> */}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className=" mt-8 flex items-center gap-x-4">
          <img src={shivam} alt="taufiq" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                {/* <span className="absolute inset-0"></span> */}
                Shivam Kumar
              </a>
            </p>
            <p className="text-gray-600">Web Developer</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-2xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          {/* <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a> */}
        </div>
        <div className="group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {/* <a href="#"> */}
              {/* <span className="absolute inset-0"></span> */}
              Concept of vitrual library
            {/* </a> */}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">"Virual library is an online platform where all readers share there knowledge, learning and experience of the book and post it which encourage other readers to read."</p>
        </div>
        <div className=" mt-8 flex items-center gap-x-4">
          <img src={taufiq} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              {/* <a href="#"> */}
                {/* <span className="absolute inset-0"></span> */}
                Taufiq Hassan
              {/* </a> */}
            </p>
            <p className="text-gray-600">Front-End / Back-End</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-2xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          {/* <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a> */}
        </div>
        <div className="group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {/* <a href="#"> */}
              {/* <span className="absolute inset-0"></span> */}
              User Interaction 
            {/* </a> */}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">it is a platform where readers can interact with readers and can discuss about their thoughts.
          and encouring a collaborative and social reading experience or promotive discussion around perspective on literature.</p>
        </div>
        <div className=" mt-8 flex items-center gap-x-4">
          <img src={janhwee} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              {/* <a href="#"> */}
                {/* <span className="absolute inset-0"></span> */}
                Janhwee Pandey
              {/* </a> */}
            </p>
            <p className="text-gray-600">Content Writing</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
        </div>
    )
}

export default Blog