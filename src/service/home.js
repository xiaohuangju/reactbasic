import axios from "./http";
export const test = (state) =>
  axios.post("/compliance/product/find-product-review-list", {});
