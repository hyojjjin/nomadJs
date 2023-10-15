const weather = document.querySelector("#weather")
const API_KEY = "2d18d0d32a6bbb441bdc7d8237d85856"
const onGeoSucess = (p) => {
    const lat = p.coords.latitude;
    const lon = p.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data => {
        const span = document.createElement("span");
        weather.appendChild(span);

        span.innerHTML = `현재 위치 > ${data.name}  현재 날씨 > ${data.weather[0].main}  `

    })
}

const onGeoError = () => {
    alert("위치 정보를 알 수 없습니다.")

}
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError)