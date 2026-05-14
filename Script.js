const dropdowns = document.querySelectorAll(".dropdown-title");

dropdowns.forEach(dropdown => {

    dropdown.addEventListener("click", () => {

        const parent = dropdown.parentElement;

        parent.classList.toggle("active");

    });

});

const bars = document.querySelectorAll(".skill-fill");

bars.forEach(bar => {

    const level = bar.dataset.level;

    bar.style.width = level + "%";

});