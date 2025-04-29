const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Change the position of the no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight); // Corrected this line to use offsetHeight
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none"; // Hide the question container
  heartLoader.style.display = "block"; // Show the heart loader

  // After 3 seconds, hide the loader and show the result container
  setTimeout(() => {
    heartLoader.style.display = "none"; // Hide the loader
    resultContainer.style.display = "block"; // Show the result container
    gifResult.style.display = "block"; // Ensure the GIF is visible
  }, 3000);
});

