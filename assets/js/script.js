'use strict';

document.addEventListener("DOMContentLoaded", () => {
  // -------- Element Toggle Function --------
  const elementToggleFunc = function (elem) {
    if (elem) elem.classList.toggle("active");
  };

  // -------- Sidebar Toggle --------
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  }

  // -------- Testimonials Modal --------
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  };

  testimonialsItem.forEach((item) => {
    item.addEventListener("click", function () {
      if (modalImg && modalTitle && modalText) {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

  // -------- Page Navigation --------
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  const handleNavigation = (clickedLink) => {
    pages.forEach((page) => page.classList.remove("active"));
    navigationLinks.forEach((link) => link.classList.remove("active"));

    const targetPage = clickedLink.getAttribute("data-nav-link");
    const targetSection = document.querySelector(`[data-page="${targetPage}"]`);

    if (targetSection) {
      targetSection.classList.add("active");
      clickedLink.classList.add("active");
      window.scrollTo(0, 0);
    }
  };

  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      handleNavigation(this);
    });
  });

  // -------- Logo Button Navigation --------
  const logoBtn = document.querySelectorAll("[data-nav-logo]");
  if (logoBtn) {
    logoBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        pages.forEach((page) => page.classList.remove("active"));
        navigationLinks.forEach((link) => link.classList.remove("active"));

        pages[0].classList.add("active");
        navigationLinks[0].classList.add("active");
        window.scrollTo(0, 0);
      });
    });
  }

  // -------- Accordion Toggle --------
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel) panel.classList.toggle("active");
    });
  }
});
