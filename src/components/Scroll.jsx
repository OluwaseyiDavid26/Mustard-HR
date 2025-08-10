import React, { useState, useEffect } from "react";

function Scroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkFooter = () => {
      const footer = document.querySelector("footer"); // target your footer
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only show if the footer is actually in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", checkFooter);
    return () => window.removeEventListener("scroll", checkFooter);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: "black",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            fontSize: "24px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Scroll;
