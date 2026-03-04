(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar: on subject pages (no hero) always show white bar; on homepage transparent at top, white when scrolled
  var header = document.querySelector(".site-header");
  if (header) {
    var hasHero = document.querySelector(".hero");
    if (!hasHero) {
      header.classList.add("is-scrolled");
    } else {
      function updateHeaderScroll() {
        if (window.scrollY > 60) {
          header.classList.add("is-scrolled");
        } else {
          header.classList.remove("is-scrolled");
        }
      }
      updateHeaderScroll();
      window.addEventListener("scroll", updateHeaderScroll, { passive: true });
    }
  }

  // Mobile nav: open/close drawer and backdrop
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  var backdrop = document.querySelector(".nav-backdrop");
  if (toggle && nav && header) {
    function setNavOpen(open) {
      nav.classList.toggle("is-open", open);
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (backdrop) backdrop.setAttribute("aria-hidden", !open);
      document.body.style.overflow = open ? "hidden" : "";
    }
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });
    if (backdrop) {
      backdrop.addEventListener("click", function () {
        setNavOpen(false);
      });
    }
    // Close drawer when clicking any link that navigates (not the Our Subjects toggle)
    nav.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (!link || !link.closest(".main-nav")) return;
      if (link.matches(".nav-item-with-dropdown > a")) return;
      setNavOpen(false);
    });
  }

  // Mobile: Our Subjects expandable — click toggles sub-items, arrow rotates
  document
    .querySelectorAll(".nav-item-with-dropdown > a")
    .forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          e.stopPropagation();
          var parent = trigger.closest(".nav-item-with-dropdown");
          if (!parent) return;
          parent.classList.toggle("is-open");
          trigger.setAttribute(
            "aria-expanded",
            parent.classList.contains("is-open")
          );
        }
      });
    });

  // WhatsApp contact form
  var waForm = document.getElementById("whatsapp-form");
  if (waForm) {
    waForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = waForm.querySelector('[name="name"]').value.trim();
      var email = waForm.querySelector('[name="email"]').value.trim();
      var message = waForm.querySelector('[name="message"]').value.trim();
      var checked = waForm.querySelectorAll(
        'input[name="subjects"]:checked'
      );
      var subjects = [];
      checked.forEach(function (cb) {
        subjects.push(cb.value);
      });

      // Clear previous errors
      waForm.querySelectorAll(".form-error").forEach(function (el) {
        el.remove();
      });

      var valid = true;
      if (!name) {
        showError(waForm.querySelector('[name="name"]'), "Please enter your name");
        valid = false;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError(waForm.querySelector('[name="email"]'), "Please enter a valid email");
        valid = false;
      }
      if (subjects.length === 0) {
        showError(
          waForm.querySelector(".checkbox-grid"),
          "Please select at least one subject"
        );
        valid = false;
      }
      if (!valid) return;

      var text =
        "*New Inquiry from Website*\n\n" +
        "*Name:* " + name + "\n" +
        "*Email:* " + email + "\n" +
        "*Subjects:* " + subjects.join(", ") + "\n" +
        (message ? "*Message:* " + message : "");

      var waURL =
        "https://wa.me/14434846773?text=" + encodeURIComponent(text);
      window.open(waURL, "_blank");
    });

    function showError(el, msg) {
      var err = document.createElement("span");
      err.className = "form-error";
      err.textContent = msg;
      el.parentNode.appendChild(err);
    }
  }

  // Scroll animations: reveal sections when they enter the viewport
  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    var animatedSections = document.querySelectorAll(".animate-section");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0 }
    );
    animatedSections.forEach(function (section) {
      observer.observe(section);
    });
  } else {
    document.querySelectorAll(".animate-section").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
