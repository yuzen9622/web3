let titles = document.querySelectorAll(".main-title");
let menus = document.querySelectorAll("li[class]");

function menuTitle() {
  titles.forEach((el, index) => {
    const rect = el.getBoundingClientRect();

    if (rect.top <= 50) {
      menus.forEach((menu, liIndex) => {
        if (liIndex == index) {
          menu.style.borderColor = "var(--skin-color)";
        } else {
          menu.style.borderColor = "#333";
        }
      });
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hidden")) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.add("fade-up");
      }
    }
  });
});
let hiddenEl = document.querySelectorAll(
  ".hidden,h2[id],div.main-title>p,.code,.example,aside,div.main-title>h4,div.main-title>ul>li,div.main-title>ol>li,.div.main-title>ol>li,a.box,div.img-p>img,h2,table"
);
hiddenEl.forEach((el) => {
  observer.observe(el);
});

let scrollbar = document.querySelector(".scroll-bar");
let topBtn = document.getElementById("top");
document.addEventListener("scroll", () => {
  menuTitle();
});
let navbarEl = document.getElementsByClassName("navbar");
let lastScroll = 0;
function listenScrollY() {
  let currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    navbarEl[0].style.transform = "translateY(-100%)";
    rwdUl.style.transform = "translateY(-120%)";
    isOpen = false;
  } else {
    navbarEl[0].style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;
}
function scrollbarFunc() {
  let top = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let width = (top / height) * 100;
  scrollbar.style.width = `${width}%`;
  if (width > 1) {
    topBtn.style.visibility = "visible";
    topBtn.style.opacity = 1;
    topBtn.style.transform = "translateY(-10px)";
  } else {
    topBtn.style.visibility = "hidden";
    topBtn.style.opacity = 0;
    topBtn.style.transform = "translateY(0px)";
  }
}

function navbarControle() {
  rwdLi.forEach((el, index) => {
    el.addEventListener("click", () => {
      drop.forEach((e, key) => {
        if (index === key) {
          if (e.style.display === "flex") {
            e.style.display = "none";
          } else {
            e.style.display = "flex";
          }
        } else {
          e.style.display = "none";
        }
      });
    });
  });
}
let bar = document.getElementById("bar");
let rwdUl = document.getElementById("rwd-ul");
let rwdLi = document.querySelectorAll("#rwd-li");
let drop = document.querySelectorAll(".drop");
let isOpen = false;
bar.addEventListener("click", () => {
  drop.forEach((e) => {
    e.style.display = "none";
  });
  if (isOpen) {
    rwdUl.style.transform = "translateY(-120%)";

    // rwdUl.style.visibility = "hidden";
    // rwdUl.style.backgroundColor = "transparent";
    isOpen = false;
  } else {
    rwdUl.style.transform = "translateY(0)";
    rwdUl.style.opacity = 1;
    rwdUl.style.backgroundColor = "var(--dark-blue)";
    rwdUl.style.visibility = "visible";
    isOpen = true;
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  scrollbarFunc();
  if (document.body.offsetWidth <= 720) {
    listenScrollY();
  }
});

navbarControle();
