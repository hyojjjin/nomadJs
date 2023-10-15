const backImg = [
    {
        url:"src/img/sky1.jpg",
        name:"sky1"
    },
    {
        url:"src/img/sky2.jpg",
        name:"sky2"
    },
    {
        url:"src/img/sky3.jpg",
        name:"sky3"
    }
]

const img = document.querySelector("#img")
const getRandomBackImg = () => {
    const randomNum =  Math.ceil(Math.random()*2)
    img.style.backgroundImage = `url(${backImg[randomNum].url})`;
}

getRandomBackImg()