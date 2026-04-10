"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.getElementById("main-nav");
  const hero = document.querySelector(".hero");

  function handleScroll() {
    if (!mainNav || !hero) return;

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const navHeight = mainNav.offsetHeight;

    if (window.scrollY >= heroBottom) {
      if (!mainNav.classList.contains("nav--sticky")) {
        mainNav.classList.add("nav--sticky");
        document.body.style.paddingTop = navHeight + "px";
      }
    } else {
      if (mainNav.classList.contains("nav--sticky")) {
        mainNav.classList.remove("nav--sticky");
        document.body.style.paddingTop = "";
      }
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });

  const hamburger = document.querySelector(".nav__hamburger");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("nav--open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (e) {
      if (
        !mainNav.contains(e.target) &&
        mainNav.classList.contains("nav--open")
      ) {
        mainNav.classList.remove("nav--open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  const searchInput = document.querySelector(".nav__search-input");
  const searchBtn = document.querySelector(".nav__search-btn");

  function triggerSearch() {
    if (!searchInput) return;
    const query = searchInput.value.trim();
    if (query) {
      /* Replace console.log with real search logic when backend is ready */
      console.info("[Search] Query submitted:", query);
      searchInput.value = "";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        triggerSearch();
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", triggerSearch);
  }
});
