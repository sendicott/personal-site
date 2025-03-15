import pfp from '../assets/scott.jpeg';

function Home() {
  return (
    <div className="text-center py-16">
      <img className="mx-auto grayscale rounded-full h-64" src={pfp} alt="Profile photo of Scott Endicott" />
      <h2 className="font-medium text-gray-600 text-lg md:text-2xl uppercase my-8">Scott Endicott</h2>
      <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Senior Front-End Developer</h1>
      <p className='font-normal text-gray-600 text-md md:text-xl mb-16'>This is the home page. Hi, I’m Scott!</p>
      <a href="mailto:sendicott1391@gmail.com" className='px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500'>Get In Touch</a>
    </div>
  );
}

export default Home;