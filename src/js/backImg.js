const backImg = [
    {
        url:"src/img/seoul1.png",
        name:"seoul1"
    },
    {
        url:"src/img/seoul2.png",
        name:"seoul2"
    },
    {
        url:"src/img/seoul3.png",
        name:"seoul3"
    },
    {
        url:"src/img/seoul4.png",
        name:"seoul4"
    },
    {
        url:"src/img/seoul5.png",
        name:"seoul5"
    }
]

const img = document.querySelector("#img")
const getRandomBackImg = () => {
    const randomNum =  Math.ceil(Math.random()*4)
    img.style.backgroundImage = `url(${backImg[randomNum].url})`;
}

getRandomBackImg()