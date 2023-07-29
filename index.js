const sectionsIds = ["about", "car", "house", "tourism", "contact"];

const sections = sectionsIds.reduce(
  (prev, selector) => ({
    ...prev,
    [selector]: document.getElementById(`${selector}-section`),
  }),
  {}
);

const hamburgerMenu = document.querySelector(".hamburger-menu");
const asideMenu = document.querySelector(".aside-menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-menu-open");
  asideMenu.classList.toggle("aside-menu-open");
});

const scrollToSelectedSection = (selector) => {
  sections[selector].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "center",
  });
};

const scrollToSelectedSectionAndCloseHamburgerMenu = (selector) => {
  scrollToSelectedSection(selector);
  hamburgerMenu.classList.remove("hamburger-menu-open");
  asideMenu.classList.remove("aside-menu-open");
};

const addEventListenerToNavElemenr = ({ element, selector }) => {
  const isMobile = element.dataset.device === "mobile";
  const handler = isMobile
    ? scrollToSelectedSectionAndCloseHamburgerMenu
    : scrollToSelectedSection;

  const callback = () => {
    handler(selector);
  };
  element.addEventListener("click", callback);
};

for (const selector of sectionsIds) {
  document.querySelectorAll(`.${selector}`).forEach((element) => {
    addEventListenerToNavElemenr({ selector, element });
  });
}
