// import axios from "axios";
// export default axios.create ({
//     baseURL: "https://api.rawg.io/api",
//     params:{
//         key: "9adb761b7a0a453898fc576545671931",
//     },
// }); Old API key wasnt working - renewed API works fine

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e56818a12aac4e23b66aedce4d91b1e1",
  },
});