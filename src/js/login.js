const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input")
const loginBtn = loginForm.querySelector("button")

const logout = document.querySelector("#logout")
const userName = logout.querySelector("#userName")
const logoutBtn = logout.querySelector("button")

const userTodoForm = document.querySelector("#todo-form")
const userTodoList = document.querySelector("#todo-list")
const userWeather = document.querySelector("#weather")

const HIDDEN = "hidden"
const onClickloginBtn = () => {
    if(!loginInput.value) {
        return
    }
    localStorage.setItem("loginName", loginInput.value)
    userName.innerHTML = `${localStorage.getItem("loginName")}의 todo-list`
    setToggleAttribute()
}

const onClickLogoutBtn = () => {
    loginInput.value = ''
    localStorage.clear()

    userTodoList.innerHTML = ''
    setToggleAttribute()
}

const setUser = () => {
    const loginName = localStorage.getItem("loginName")
    if(loginName) {
        userName.innerHTML = `${localStorage.getItem("loginName")}의 todo-list`
        setToggleAttribute()
    }
}
const setToggleAttribute = () => {
    loginForm.toggleAttribute(HIDDEN)
    logout.toggleAttribute(HIDDEN)
    userTodoForm.toggleAttribute(HIDDEN)
    userWeather.toggleAttribute(HIDDEN)
}

setTimeout(setUser, 300)

loginBtn.addEventListener("click", onClickloginBtn)
logoutBtn.addEventListener("click", onClickLogoutBtn)
