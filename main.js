window.onload = function () {
  document.getElementById("loader-wrapper").style.display = "none";
};

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
  this.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  function closeMenu() {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  }

  document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      closeMenu();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var contactButton = document.querySelector(".contact");
  var orderButton = document.querySelector(".order_link");

  contactButton.addEventListener("click", function () {
    window.location.href = "#contact";
  });

  orderButton.addEventListener("click", function () {
    window.location.href = "#order_link";
  });
});

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".gallery img");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const slideWidth = slides[0].clientWidth;
  const gallery = document.querySelector(".gallery");
  gallery.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

// Показываем первый слайд при загрузке страницы
showSlides();

let slideIndex1 = 0;

function showSlides1() {
  const slides = document.querySelectorAll(".achievements img");
  if (slideIndex1 >= slides.length) {
    slideIndex1 = 0;
  }
  if (slideIndex1 < 0) {
    slideIndex1 = slides.length - 1;
  }
  const slideWidth = slides[0].clientWidth;
  const achievements = document.querySelector(".achievements");
  achievements.style.transform = `translateX(${-slideIndex1 * slideWidth}px)`;
}

function nextSlide1() {
  slideIndex1++;
  showSlides1();
}

function prevSlide1() {
  slideIndex1--;
  showSlides1();
}

showSlides1();

// Функция для анимации статистики CO2 и генерации электричества
function animate(statisticElement, targetValue, stepValue, stepDuration) {
  var currentValue = 0;

  function updateStatistic() {
    setTimeout(function () {
      currentValue += stepValue;
      statisticElement.textContent = Math.round(currentValue);
      if (currentValue < targetValue) {
        updateStatistic();
      }
    }, stepDuration);
  }

  updateStatistic();
}

// Функция для генерации статистики CO2
function generateCO2Statistics() {
  var targetCO2 = 10000; // Заданное количество тонн углекислого газа, до которого будет проходить анимация
  var stepDurationCO2 = 30; // Длительность одного шага анимации для CO2
  var stepValueCO2 = targetCO2 / 100; // Значение, на которое нужно увеличивать текущее количество CO2 в каждом шаге
  animate(
    document.getElementById("CO2Number"),
    targetCO2,
    stepValueCO2,
    stepDurationCO2
  );
}

// Функция для генерации статистики по генерации электричества
function generateElectricityStatistics() {
  var totalElectricity = 5000; // Заданное общее количество электричества, сгенерированное с момента запуска
  var stepDurationElectricity = 30; // Длительность одного шага анимации для электричества
  var stepValueElectricity = totalElectricity / 100; // Значение, на которое нужно увеличивать текущее количество электричества в каждом шаге
  animate(
    document.getElementById("electricityNumber"),
    totalElectricity,
    stepValueElectricity,
    stepDurationElectricity
  );
}

// Обработчик для Intersection Observer для статистики CO2
var observerCO2 = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      generateCO2Statistics();
      observerCO2.unobserve(entry.target); // Остановить наблюдение после генерации статистики
    }
  });
});

// Наблюдение за элементом-триггером для статистики CO2
var triggerCO2 = document.getElementById("triggerCO2");
observerCO2.observe(triggerCO2);

// Обработчик для Intersection Observer для статистики по генерации электричества
var observerElectricity = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      generateElectricityStatistics();
      observerElectricity.unobserve(entry.target); // Остановить наблюдение после генерации статистики
    }
  });
});

// Наблюдение за элементом-триггером для статистики по генерации электричества
var triggerElectricity = document.getElementById("triggerElectricity");
observerElectricity.observe(triggerElectricity);

document.addEventListener("DOMContentLoaded", function () {
  const toggleNavButton = document.getElementById("toggleNavButton");
  const navBar = document.querySelector(".nav-bar");

  toggleNavButton.addEventListener("click", function () {
    navBar.classList.toggle("open");
  });
});
