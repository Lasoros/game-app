import axios from "axios";

export default axios.create ({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "9adb761b7a0a453898fc576545671931"
    }
})

// export default axios.create
// const apiClient = {
//     get: (url: string) => {
//         ({
//             baseURL: "https://api.rawg.io/api",
//             params:{
//                 key: "9adb761b7a0a453898fc576545671931"
//             }
//         })
//     }
//   };