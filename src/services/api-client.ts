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
    key: "71a9b3d6c37b4d2c9c1d06bfebcbb9a7",
  },
});