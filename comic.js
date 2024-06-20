// Fetch the comic ID using your email
async function fetchComicId() {
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=a.suhoverkova@innopolis.university`);
    if (!response.ok) {
      throw new Error('Failed to fetch comic ID');
    }
    const comicId = await response.text();
    return comicId;
  }
  
// Fetch comic details using the comic ID
async function fetchComicDetails(comicId) {
    const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comic details');
    }
    const comicDetails = await response.json();
    console.log(comicDetails)
    return comicDetails;
  }
  
// Function to display the comic details
function displayComic(comic) {
  const comicContainer = document.getElementById('comic-container');
  
  const titleElement = document.createElement('h1');
  titleElement.textContent = comic.safe_title;
  comicContainer.appendChild(titleElement);
  
  const imgElement = document.createElement('img');
  imgElement.src = comic.img;
  imgElement.alt = comic.alt;
  comicContainer.appendChild(imgElement);
  
  const dateElement = document.createElement('h2');
  const altText = document.createElement('p');
  const publishedDate = new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString();
  dateElement.textContent = `Published on: ${publishedDate}`;
  comicContainer.appendChild(dateElement);
  altText.textContent = `Text for the comic: ${comic.alt}`;
  comicContainer.appendChild(altText);
}
  

// Main function to fetch and display the comic
async function displayXKCDComic() {
    try {
      const comicId = await fetchComicId();
      const comicDetails = await fetchComicDetails(comicId);
      displayComic(comicDetails);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the main function when the page loads
  window.onload = displayXKCDComic;
  