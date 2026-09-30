const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const stars = document.querySelector(".stars");
if (stars && !rm) for (let i = 0; i < 34; i++) {
  const s = document.createElement("span"), z = 2 + Math.random() * 3;
  s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 85}%;width:${z}px;height:${z}px;animation-delay:${Math.random() * 4}s;animation-duration:${3 + Math.random() * 3}s`;
  stars.append(s);
}
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll("section.block h2, section.block .card").forEach((el, i) => { el.classList.add("reveal"); el.style.transitionDelay = (i % 4) * 90 + "ms"; io.observe(el); });
const h = document.querySelector("header.site");
addEventListener("scroll", () => h?.classList.toggle("scrolled", scrollY > 30), { passive: true });
