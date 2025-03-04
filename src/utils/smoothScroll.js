const smoothScroll = (e, to) => {
  e.preventDefault();
  const targetElement = document.querySelector(to);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

export default smoothScroll;
