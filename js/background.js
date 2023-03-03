const images = [
  "http://www.desktopwallpaperhd.net/wallpapers/3/d/nature-ivanandreevich-bellevue-room-wallpaper-38877.jpg",
  "http://www.desktopwallpaperhd.net/wallpapers/4/9/wallpapers-mountains-filter-random-nature-nuahs-glacial-high-resolutions-room-40425.jpg",
  "http://www.desktopwallpaperhd.net/wallpapers/1/a/mountains-green-wallpapers-walls-resolutions-19514.jpg",
  "http://www.desktopwallpaperhd.net/wallpapers/0/8/autumn-wallpaper-beauty-landscape-plant-source-7064.jpg",
  "http://www.desktopwallpaperhd.net/wallpapers/1/e/windows-theme-official-autumn-canada-wallpaper-themes-maple-leaves-gallery-rocks-15470.jpg",
  "http://www.desktopwallpaperhd.net/wallpapers/1/6/water-board-autumn-background-summer-nature-wallpaper-16550.jpg",
];

function changeAll() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(${chosenImage})`;
}

changeAll();
// setInterval(changeAll, 10000);
