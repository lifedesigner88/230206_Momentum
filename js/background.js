const images = [
    "https://p4.wallpaperbetter.com/wallpaper/33/261/282/5bd28eeaec175-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/256/905/291/5bd28ee4b4842-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/80/447/738/5bd28f380e1f3-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/543/394/461/finding-nemo-1920x1080-nature-oceans-hd-art-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/911/531/655/1920x1080-px-microsoft-windows-pokemon-nature-sunsets-hd-art-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/346/888/35/cool-lake-nature-photography-nature-lakes-hd-art-wallpaper-preview.jpg"

]

function changeAll(){

    const chosenImage = images[Math.floor(Math.random() * images.length)];
    bgImage.src = `${chosenImage}`
    document.body.appendChild(bgImage);

}


const bgImage = document.createElement("img");

changeAll()
// setInterval(changeAll, 10000);