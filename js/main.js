(() => {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(el=>{
    if(el.dataset.nav === page) el.classList.add("active");
  });
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
})();
