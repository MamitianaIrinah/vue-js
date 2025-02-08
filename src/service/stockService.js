import axios from "axios";

const ip = "http://192.168.88.24:8000"


export const getAllStock = () => {
    return new Promise((resolve, reject) => {axios.get(ip + "/api/v1/Stocks").then((data) => {
        resolve(data.data)
    })});
}

export const insertionStock = (IngredientById, quantiteEntree, quantiteSortie) => {
    return new Promise((resolve, reject) => {axios.post(ip + "/api/v1/Stocks", {
        IngredientById: IngredientById,
        quantiteEntree: quantiteEntree,
        quantiteSortie: quantiteSortie
     

    }).then((data) => {
        resolve(data.data)
    })});
}
