import React, { useState, useEffect } from 'react';
import Movie_one from '../assets/movie.jpeg';
import AnotherMovie from '../assets/Interstellar.jpeg';
import Movie_two from '../assets/LAND.jpeg';
import Movie_three from '../assets/Todo.jpeg';
import Movie_four from '../assets/Why.jpeg';
import Movie_five from '../assets/334add68-f5d4-416a-94af-9959c3a72598.jpeg';


const Screen = () => {
  const slides = [
    {
      image: Movie_one,
      title: 'Titanic movie',
      content: 'Titanic is a 1997 film directed by James Cameron, featuring a romance between passengers Jack and Rose aboard the ill-fated RMS Titanic. The film captures their love story amidst the ship is opulence and tragic sinking, becoming a classic known for its emotional depth and historical portrayal.',
    },
    {
      image: AnotherMovie,
      title: 'Interstellar',
      content: 'It looks like you have mentioned Interstellar but it is not clear what you are referring to. Could you please provide more context or clarify your question? Are you asking about software installers, installation processes, or something else? The more details you provide, the better I will be able to assist you.',
    },
    {
        image: Movie_two,
        title: 'La La Land',
        content: 'A modern musical that follows the romance between a struggling actress and a jazz musician in Los Angeles. The film explores the challenges of pursuing dreams while navigating a passionate relationship.',
      },
      {
        image: Movie_three,
        title: 'Avengers: Endgame',
        content: 'This epic superhero film concludes the Marvel Cinematic Universes Infinity Saga. The Avengers and their allies work together to undo the devastating effects of the villain Thanos snap, resulting in an action-packed battle across time and space.',
      },
      {
        image: Movie_four,
        title: 'Get out',
        content: 'A thought-provoking horror-thriller directed by Jordan Peele, addressing racial tensions through the story of a Black man who uncovers disturbing secrets while visiting his white girlfriend s family estate.',
      },
      {
        image: Movie_five,
        title: 'John Weak',
        content: 'Certainly! The "John Wick" series is a high-octane action-thriller franchise starring Keanu Reeves as an ex-assassin seeking vengeance after his dog is killed, setting off a series of intense and stylish confrontations in the criminal underworld. The franchise is celebrated for its dynamic action sequences and world-building.',
      },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const { image, title, content } = slides[currentSlide];

  return (
    <div className='w-[100%] h-[600px] border rounded-lg relative overflow-hidden group' >
      <img src={image} className='w-full h-full object-cover' alt={title} />
      <div className='cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8 text-center bg-black bg-opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-200 shadow-md'>
        <h1 className='font-bold text-3xl text-light-white mb-4'>{title}</h1>
        <p className='font-normal text-lg text-light-white max-w-md'>{content}</p>
        <div className='flex gap-6 mt-4'>
          <button className='gradient-button px-10 py-4 rounded-lg bg-blue border border-light-white shadow-sm shadow-light-white text-light-white transition duration-300 font-medium hover:bg-light-white hover:text-blue'>
            Watch now
          </button>
          <button className='gradient-button px-10 py-4 rounded-lg bg-blue border border-light-white shadow-sm shadow-light-white text-light-white transition duration-300 font-medium hover:bg-light-white hover:text-blue'>
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
