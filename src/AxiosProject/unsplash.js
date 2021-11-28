import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID G9R-1ehNsAN9sXyOKU620dssUo_VxSAxTT8KRUAr2As",
  },
});
