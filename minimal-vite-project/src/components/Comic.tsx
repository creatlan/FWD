// pages/comic.tsx

import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Header from './Header';
import Footer from './Footer';
import '../styles/comic.css';

dayjs.extend(relativeTime);

interface ComicProps {
  comic: any;
}

const Comic: React.FC<ComicProps> = ({ comic }) => {
  if (!comic) {
    return <div>Loading...</div>;
  }

  const publishedDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`).format('MMMM D, YYYY');
  const timeAgo = dayjs(`${comic.year}-${comic.month}-${comic.day}`).fromNow();

  return (
    <>
      <Header />
      <main>
        <div id="comic-container">
          <h1>{comic.safe_title}</h1>
          <img src={comic.img} alt={comic.alt} />
          <h2>Published on: {publishedDate} ({timeAgo})</h2>
          <p>Text for the comic: {comic.alt}</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Comic;

export async function getServerSideProps() {
  const fetchComicId = async () => {
    try {
      const response = await axios.get(`https://fwd.innopolis.university/api/hw2?email=a.suhoverkova@innopolis.university`);
      if (response.status !== 200) {
        throw new Error('Failed to fetch comic ID');
      }
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  const fetchComicDetails = async (comicId: string) => {
    try {
      const response = await axios.get(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
      if (response.status !== 200) {
        throw new Error('Failed to fetch comic details');
      }
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  try {
    const comicId = await fetchComicId();
    if (comicId) {
      const comic = await fetchComicDetails(comicId);
      if (comic) {
        return {
          props: {
            comic,
          },
        };
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }

  return {
    props: {
      comic: null,
    },
  };
}
