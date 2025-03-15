import pfp from '../assets/scott.jpeg';

function Home() {
  return (
    <div className="mt-80">
      <img className="mx-auto grayscale rounded-full h-64" src={pfp} alt="Profile photo of Scott Endicott" />
      <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase my-8 text-center">Scott Endicott</h6>
      <p>This is the home page. Hi, I’m Scott!</p>
    </div>
  );
}

export default Home;