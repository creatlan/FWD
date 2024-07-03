import { Comic } from "./interfaces";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs().format();

dayjs.extend(relativeTime);

async function fetchComicId(): Promise<string> {
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=a.suhoverkova@innopolis.university`);
    if (!response.ok) {
        throw new Error('Failed to fetch comic ID');
    }
    const comicId = await response.text();
    return comicId;
}

async function fetchComicDetails(comicId: string): Promise<Comic> {
    const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch comic details');
    }
    const comicDetails: Comic = await response.json();
    return comicDetails;
}

function displayComic(comic: Comic): void {
    const comicContainer = document.getElementById('comic-container');
    
    if (!comicContainer) {
        throw new Error("Comic container not found");
    }

    comicContainer.innerHTML = ''; // Clear previous content

    const titleElement = document.createElement('h1');
    titleElement.textContent = comic.safe_title;
    comicContainer.appendChild(titleElement);
    
    const imgElement = document.createElement('img');
    imgElement.src = comic.img;
    imgElement.alt = comic.alt;
    comicContainer.appendChild(imgElement);
    
    const dateElement = document.createElement('h2');
    const publishedDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`).format('MMMM D, YYYY');
    const timeAgo = dayjs(`${comic.year}-${comic.month}-${comic.day}`).fromNow();
    dateElement.textContent = `Published on: ${publishedDate} (${timeAgo})`;
    comicContainer.appendChild(dateElement);

    const altText = document.createElement('p');
    altText.textContent = `Text for the comic: ${comic.alt}`;
    comicContainer.appendChild(altText);
}

async function displayXKCDComic(): Promise<void> {
    try {
        const comicId = await fetchComicId();
        const comicDetails = await fetchComicDetails(comicId);
        displayComic(comicDetails);
    } catch (error) {
        console.error('Error:', error);
    }
}

window.onload = displayXKCDComic;