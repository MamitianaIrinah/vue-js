import axios from "axios";

const ip = "https://jeu-production-2a49.up.railway.app"


export const getAllIngredient = () => {
    return new Promise((resolve, reject) => {axios.get(ip + "/api/v1/ingredients").then((data) => {
        resolve(data.data)
    })});
}