import pfp from '../assets/scott.jpeg';

function Home() {
  return (
    <div className="text-center p-16">
      <img className="mx-auto grayscale rounded-full h-64" src={pfp} alt="Profile photo of Scott Endicott" />
      <h2 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mt-8">Scott Endicott</h2>
      <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mt-8">Senior Front-End Engineer</h1>
      <p className='font-normal text-gray-600 text-md md:text-xl mt-8'>Welcome. My name is Scott Endicott and I live in central PA with my wife and three sons. 8 years ago, I left the world of literature analysis to build websites or, as we like to say on our resumes, create impactful web applications and reusable solutions through scalable front-end architecture. I like talking to people about what interests them most, whether that's medieval cosmology, the delights of TailwindCSS, or the woes of Wordpress. If you need anything, click the button below and say hello.</p>
      <a href="mailto:sendicott1391@gmail.com" className='inline-block mt-12 px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500'>Get In Touch</a>
      <div class="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="bg-gray-50 px-8 py-10 rounded-md">
          <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
          </div>
          <h4 class="font-medium text-gray-700 text-lg mb-4">UI/UX Collaboration</h4>
          <p class="font-normal text-gray-500 text-md">Translating design systems into pixel-perfect, responsive, interactive interfaces while collaborating with designers to balance aesthetics and functionality.</p>
        </article>

          <article class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
            </div>
            <h4 class="font-medium text-gray-700 text-lg mb-4">Front-End Architecture</h4>
            <p class="font-normal text-gray-500 text-md">Crafting scalable, maintainable web applications with client-side technologies to support robust, user-focused solutions.</p>
          </article>

          <article class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            </div>

            <h4 class="font-medium text-gray-700 text-lg mb-4">Debugging & Performance Optimization</h4>

            <p class="font-normal text-gray-500 text-md">Resolving complex front-end challenges and enhancing reliability with modern techniques to deliver seamless web experiences.</p>
          </article>
      </div>
    </div>
  );
}

export default Home;