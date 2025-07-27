import React, { useRef, useState, useEffect } from "react";

const SlideIn = ({ children, direction = "left" }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const baseClasses = "transition-all duration-700 ease-out transform opacity-0";
  const animationClasses = isVisible
    ? "opacity-100 translate-x-0"
    : direction === "left"
    ? "-translate-x-20"
    : "translate-x-20";

  return (
    <div ref={ref} className={`${baseClasses} ${animationClasses}`}>
      {children}
    </div>
  );
};

export default SlideIn;
