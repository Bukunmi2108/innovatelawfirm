const menu = document.getElementById("menu")

const header = document.querySelector("header")

const links = document.querySelector(".navlinks")


menu.addEventListener("click", () => {
  links.classList.toggle("active")
  header.classList.add("black")
})

document.addEventListener("scroll", () => {
  if (scrollY > 500) {
    header.classList.add("black")
  } else if (scrollY < 500){
    header.classList.remove("black")
  }
})

const faqTitles = document.querySelectorAll(".une-faq-title")

faqTitles.forEach(
  function(faqTitle) {
    faqTitle.addEventListener("click", function(e) {
      const faqAnswer = e.currentTarget.nextElementSibling

      faqAnswer.classList.toggle("show")

      if(faqTitle.classList.contains("active")) {
        faqTitle.classList.remove("active")
      } else{
        faqTitle.classList.add("active")
      }
    })
  }
)