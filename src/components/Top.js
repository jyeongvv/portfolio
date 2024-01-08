// backToTop.js

const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const getScrollPosition = () => {
    return window.scrollY || document.documentElement.scrollTop;
  };
  
  const setScrollTop = (top) => {
    document.documentElement.scrollTop = top;
    window.scrollY = top;
  };
  
  export { backToTop, getScrollPosition, setScrollTop };
  