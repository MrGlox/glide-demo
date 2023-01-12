import "./styles.scss";

import "@glidejs/glide/dist/css/glide.core.min.css";

import Glide from "@glidejs/glide";

new Glide(".glide", {
  type: "carousel",
  perView: 3,
}).mount();
