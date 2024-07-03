// src/components/Comic.tsx
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs'
import Header from './Header';
import Footer from './Footer';
import relativeTime from 'dayjs/plugin/relativeTime';
import '../styles/comic.css'; // Ensure this path is correct

dayjs.extend(relativeTime);

const Comic: React.FC = () => {
  const [comic, setComic] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComicId = async () => {
      try {
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=a.suhoverkova@innopolis.university`);
        if (!response.ok) {
          throw new Error('Failed to fetch comic ID');
        }
        const comicId = await response.text();
        return comicId;
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchComicDetails = async (comicId: string) => {
      try {
        const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch comic details');
        }
        const comicDetails = await response.json();
        return comicDetails;
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const displayXKCDComic = async () => {
      try {
        const comicId = await fetchComicId();
        if (comicId) {
          const comicDetails = await fetchComicDetails(comicId);
          if (comicDetails) {
            setComic(comicDetails);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    displayXKCDComic();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
