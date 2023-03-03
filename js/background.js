const images = [
  "https://picsum.photos/1200/800/?random",
  "https://picsum.photos/1200/900/?random",
];

function changeAll() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(${chosenImage})`;
}

changeAll();
// setInterval(changeAll, 10000);
