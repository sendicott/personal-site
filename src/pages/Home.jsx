import pfp from '../assets/scott.jpeg';

function Home() {
  return (
    <>
      <img src={pfp} alt="Profile photo of Scott Endicott" />
      <h2 className="mb-4">Welcome to My Personal Site</h2>
      <p>This is the home page. Hi, I’m Scott!</p>
    </>
  );
}

export default Home;