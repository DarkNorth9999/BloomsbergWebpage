const headerRef = document.querySelector("header")

const closeBtn = document.getElementById("close-btn")

closeBtn.addEventListener("click", () => {
  headerRef.classList.remove("nav-open")
})

const openBtn = document.getElementById("open-btn")
openBtn.addEventListener("click", () => headerRef.classList.add("nav-open"))
