const headerAccordion = document.querySelectorAll(".header-accordion");

headerAccordion.forEach((item, index) => {
  let jobomschrijving = item.querySelector(".jobomschrijving");
  jobomschrijving.addEventListener("click", () => {
    headerAccordion.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("open")) {
        otherItem.classList.remove("open");

        let otherOmschrijving = otherItem.querySelector(".ervaringuitleg");
        otherOmschrijving.style.height = "0px";
      }
    });

    item.classList.toggle("open");

    let omschrijving = item.querySelector(".ervaringuitleg");
    if (item.classList.contains("open")) {
      omschrijving.style.height = `${omschrijving.scrollHeight}px`;
    } else {
      omschrijving.style.height = "0px";
    }
  });
});
