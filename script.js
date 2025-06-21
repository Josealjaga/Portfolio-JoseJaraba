document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".bar div").forEach(bar => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => bar.style.width = width, 500);
    });
  });
  