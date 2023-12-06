const rootElement = document.querySelector("html");

const disableScroll = () => {
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  };

  rootElement.style.scrollBehavior = "auto";
};

const enableScroll = () => {
  window.onscroll = () => {};
  localStorage.setItem("opened", "true");
  rootElement.style.scrollBehavior = "smooth";
};

!localStorage.getItem("opened") && disableScroll();
