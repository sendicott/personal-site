import { useState } from 'react';

function About() {
  const days = () => {
    const today = Date.now();
    const startDate = new Date('2016-08-01');
    return (Math.floor((today - startDate) / (1000 * 60 * 60 * 24)));
  };

  const years = (days() / 365).toFixed(1);

  const arrayOfHotTakes = [
    'Having your own baby unlocks the cuteness of all babies.',
    'React and Vue are just JavaScript. Focus on learning vanilla JS.',
    'Read the Chronicles of Narnia in publication order, not chronological order.',
    'Get married young and grow up together.',
    'Goldendoodles were designed for walking on sidewalks. Don\'t get one if you live in the country. They will accumulate every leaf and twig in a 5 mile radius. Learn from my mistakes.',
    'There is no such thing as getting rest from a quick break. Meaning is what rejuvenates us.',
    'Much of being a senior engineer is just knowing what to Google.',
    'Much of being a senior engineer is knowing when to say no.',
    'The only way to learn is to do.',
    'There will never be a better time than right now to start raising chickens.',
    'Don\'t only consume. Create. Write a letter, build a website, learn an instrument.',
    'The more specific a story is, the more people it will resonate with.',
  ];

  const [hotTake, setHotTake] = useState('');

  const generateHotTake = () => {
    const randomHotTake = arrayOfHotTakes[Math.floor(Math.random() * arrayOfHotTakes.length)];

    setHotTake(randomHotTake);
  };
    

  return (
    <>
      <div className="text-center px-14">
        <h2 className="font-medium text-gray-600 text-lg md:text-2xl uppercase py-12">About Me</h2>
        <p className="font-normal text-gray-600 text-md md:text-xl mb-12">Thanks for visiting the About page for a deeper cut.</p>
        <p className="font-normal text-gray-600 text-md md:text-xl mb-12">In brief, I'm a book nerd, several other kinds of nerd, and yet somehow blessed to be married and the father of three young boys. For the past <span className="font-bold italic">{days().toLocaleString()} days (or {years} years)</span>, I have been building websites. You know what I look like from the home page. Sadly, that's my only good picture, so here's a better-looking crew.</p>
        <img src="https://i.postimg.cc/bvmqTYZF/IMG-7998.jpg" alt="Me" className="rounded-lg shadow-lg inline-block grayscale mb-12" />
        <p className="font-normal text-gray-600 text-md md:text-xl mb-6">And just for fun.</p>
        <button
          onClick={generateHotTake}
          className="inline-block px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500 cursor-pointer mb-4"
        >
          Hot Take Generator
        </button>
        <h2 className="font-medium text-gray-600 text-lg md:text-2xl mb-12 italic">{hotTake}</h2>
      </div>
    </>
  );
}

export default About;