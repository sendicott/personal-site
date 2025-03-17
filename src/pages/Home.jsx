import pfp from '../assets/scott.jpeg';
import bcLogo from '../assets/best-colleges.svg';
import rvLogo from '../assets/red-ventures.svg';
import tbsLogo from '../assets/the-best-schools.svg';
import njLogo from '../assets/nurse-journal.svg';
import cnetLogo from '../assets/cnet.svg';
import gskLogo from '../assets/gsk.svg';

function Home() {
  return (
    <div className="text-center p-16">
      <img className="mx-auto grayscale rounded-full h-64" src={pfp} alt="Profile photo of Scott Endicott" />
      <h2 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mt-8">Scott Endicott</h2>
      <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mt-8">Senior Front-End Engineer</h1>
      <p className='font-normal text-gray-600 text-md md:text-xl mt-8'>Welcome. My name is Scott Endicott and I live in central PA with my wife and three sons. 8 years ago, I left the world of literature analysis to build websites or, as we like to say on our resumes, create impactful web applications and reusable solutions through scalable front-end architecture. I like talking to people about what interests them most, whether that's medieval cosmology, the delights of TailwindCSS, or the woes of Wordpress. If you need anything, click the button below and say hello.</p>
      <a href="mailto:sendicott1391@gmail.com" className='inline-block mt-12 px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500'>Get In Touch</a>
      <section className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">UI/UX Collaboration</h4>
          <p className="font-normal text-gray-500 text-md">Translating design systems into pixel-perfect, responsive, interactive interfaces while collaborating with designers to balance aesthetics and functionality.</p>
        </article>

        <article className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">Front-End Architecture</h4>
          <p className="font-normal text-gray-500 text-md">Crafting scalable, maintainable web applications with client-side technologies to support robust, user-focused solutions.</p>
        </article>

        <article className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">Debugging & Performance Optimization</h4>
          <p className="font-normal text-gray-500 text-md">Resolving complex front-end challenges and enhancing reliability with modern techniques to deliver seamless web experiences.</p>
        </article>
      </section>

      <section className="py-10 md:py-16" id="work-history">
        <div className="container max-w-screen-xl mx-auto">
          <div className="mb-18">
            <h2 className="text-gray-900 text-4xl md:text-5xl mb-5">Work History</h2>
            <p className="font-normal text-gray-500 text-xs md:text-base">I spent the past 8 years at Red Ventures, a dynamic work environment where things rarely stay the same for long. I had the pleasure of working with several different teams and learning new tech stacks with each one. Here's the overview.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-24">
              <article className="flex space-x-6">
                <h3 className="font-normal text-gray-700 text-3xl md:text-4xl">01</h3>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h3 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">CNET</h3>
                  <p className="font-normal text-gray-500 text-sm md:text-base">Enhanced CNET’s digital ecosystem by mastering their in-house CMS and upgrading WordPress-based Money pages with new features. Led ad integration with precise customization (type, placement, frequency, spacing) aligned with the primary site. Post-Ziff Davis acquisition, partnered with engineers, business analysts, and data analysts to transition Red Ventures’ proprietary tools to open-source solutions like Google Analytics.</p>
                </div>
              </article>
              <article className="flex space-x-6">
                <h3 className="font-normal text-gray-700 text-3xl md:text-4xl">02</h3>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h3 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Education</h3>
                  <p className="font-normal text-gray-500 text-sm md:text-base">Managed and enhanced 50+ higher education sites, including bestcolleges.com, nursejournal.org, and thebestschools.org. Architected a React component library for a portfolio-wide migration from traditional WordPress to a headless CMS, integrating GraphQL and WP Engine for scalability.</p>
                </div>
              </article>
              <article className="flex space-x-6">
                <h3 className="font-normal text-gray-700 text-3xl md:text-4xl">03</h3>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h3 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Healthcare</h3>
                  <p className="font-normal text-gray-500 text-sm md:text-base">Built an interactive web app with Vue and Nuxt that walked elderly users through a questionnaire to deliver curated Medicare plan recommendations based on their input. We worked with a UX expert to ensure clarity, accessibility, and ease of use for a population that can struggle navigating online experiences.</p>
                </div>
              </article>
              <article className="flex space-x-6">
                <h3 className="font-normal text-gray-700 text-3xl md:text-4xl">04</h3>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h3 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Pharma</h3>
                  <p className="font-normal text-gray-500 text-sm md:text-base">Collaborated with a small team to build informational websites using Hugo and dozens of HTML emails for GSK, a global pharmaceutical leader. Delivered pixel-perfect designs for FDA submission, leveraging Inky (Foundation for Emails) to ensure cross-provider consistency and mitigate costly errors."</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="" id="brands">
        <h2 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Brands</h2>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-10">Notable companies I've collaborated with on significant projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
            <img className="mx-auto grayscale" src={bcLogo} alt="BC Logo" />
   
            <img className="mx-auto grayscale" src={rvLogo} alt="RV Logo" />

            <img className="mx-auto grayscale" src={tbsLogo} alt="TBS Logo" />

            <img className="mx-auto grayscale" src={njLogo} alt="NJ Logo" />

            <img className="mx-auto grayscale" src={cnetLogo} alt="CNET Logo" />

            <img className="mx-auto grayscale" src={gskLogo} alt="GSK Logo" />

        </div>
      </section>
    </div>
  );
}

export default Home;