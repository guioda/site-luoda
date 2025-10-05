// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active")

  // Animate hamburger menu
  const spans = menuToggle.querySelectorAll("span")
  spans[0].style.transform = navLinks.classList.contains("active") ? "rotate(45deg) translate(5px, 5px)" : "none"
  spans[1].style.opacity = navLinks.classList.contains("active") ? "0" : "1"
  spans[2].style.transform = navLinks.classList.contains("active") ? "rotate(-45deg) translate(7px, -6px)" : "none"
})

// Close mobile menu when clicking on a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
    const spans = menuToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Header scroll effect
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Smooth scroll reveal animation
const revealElements = document.querySelectorAll(".reveal")

const revealOnScroll = () => {
  const windowHeight = window.innerHeight
  const revealPoint = 100

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)
revealOnScroll() // Initial check

// Form submission
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
  }

  // Here you would typically send the data to a server
  console.log("Form submitted:", formData)

  // Show success message
  alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")

  // Reset form
  contactForm.reset()
})

// Service cards hover effect
const serviceCards = document.querySelectorAll(".service-card")

serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      const headerOffset = 100
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-in"
    document.body.style.opacity = "1"
  }, 100)
})

// Parallax effect for hero section
// const hero = document.querySelector(".hero")
//
// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset
//   const parallaxSpeed = 0.5
//
//   if (hero && scrolled < window.innerHeight) {
//     hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
//   }
// })
