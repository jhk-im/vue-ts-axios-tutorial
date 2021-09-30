import axios from 'axios';

// web -> ionic serve --host=192.168.1.33 --port=8081
// ios -> ionic capacitor run ios -l --host=192.168.1.33 --port=8081
// android -> ionic capacitor run android -l --host=192.168.1.33 --port=8081
export default axios.create({
  // 192.168.1.33 -> WIFI
  baseURL: "http://192.168.1.33:8080/api",
  //baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json"
  }
});