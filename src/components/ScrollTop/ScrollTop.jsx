import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up a scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <img src={assets.scroll_top} alt="Scroll to top" />
    </div>
  );
};

export default ScrollTop;
