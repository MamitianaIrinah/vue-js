import axios from "axios";

const ip = "http://192.168.88.24:8000"


export const getAllIngredient = () => {
    return new Promise((resolve, reject) => {axios.get(ip + "/api/v1/ingredients").then((data) => {
        resolve(data.data)
    })});
}