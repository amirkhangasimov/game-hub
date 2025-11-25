import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "03208f9584714135b8b21383dca27070",
  },
});
