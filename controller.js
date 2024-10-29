// set initial state of all elements and continue checking
setTimeout(() => {
  const p1 = document.querySelector("#landing-page-paragraph-foo");
  const i1 = document.querySelector("#landing-page-img-foo");
  const a1 = document.querySelector("#landing-page-explore-foo");
  const c1 = document.querySelector(".cards-type-0");
  const c2 = document.querySelector(".cards-type-1");
  const c3 = document.querySelector(".cards-type-2");
  const c4 = document.querySelector(".cards-type-3");
  const c5 = document.querySelector(".cards-type-4");
  const a5 = document.querySelector("#top-1");
  const b5 = document.querySelector("#bottom-2");

  setInterval(() => {
    ifVisibleInViewportActivate(p1);
    ifVisibleInViewportActivate(i1);
    ifVisibleInViewportActivate(a1);
    ifVisibleInViewportActivate(c1);
    ifVisibleInViewportActivate(c2);
    ifVisibleInViewportActivate(c3);
    ifVisibleInViewportActivate(c4);
    ifVisibleInViewportActivate(c5);
    ifVisibleInViewportActivate(a5);
    ifVisibleInViewportActivate(b5);
  }, 200);
}, 500);

function ToggleHiddenMenu() {
  const menu = document.querySelector(".anchor-wrapper");
  if (menu) {
    menu.classList.toggle("active");
  }
}

const ifVisibleInViewportActivate = (element) => {
  const rect = element.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    if (!element.classList.contains("active")) {
      element.classList.toggle("active");
    }
  }
};
