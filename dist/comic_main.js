var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
function fetchComicId() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://fwd.innopolis.university/api/hw2?email=a.suhoverkova@innopolis.university`);
        if (!response.ok) {
            throw new Error('Failed to fetch comic ID');
        }
        const comicId = yield response.text();
        return comicId;
    });
}
function fetchComicDetails(comicId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch comic details');
        }
        const comicDetails = yield response.json();
        return comicDetails;
    });
}
function displayComic(comic) {
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
function displayXKCDComic() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const comicId = yield fetchComicId();
            const comicDetails = yield fetchComicDetails(comicId);
            displayComic(comicDetails);
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
window.onload = displayXKCDComic;
