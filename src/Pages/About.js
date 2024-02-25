import QR  from "../utils/images/Qr.png"

const About = ( ) =>{
    return(
        <div>
<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p className="font-bold text-xl">
        Meet our team members
    </p>
   
        <img src={QR} />
   
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Scan this QR </h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Join our community</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="https://discord.com/invite/ddYnn3cB" class="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Discord</a>
      <a href="https://www.instagram.com/readconnect838/" class="text-sm font-semibold text-gray-900">Follow us on instagram<span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
        </div>
    )
}

export default About