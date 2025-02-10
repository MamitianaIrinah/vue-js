import axios from "axios";

const ip = "https://jeu-production-2a49.up.railway.app"


export const getAllStock = () => {
    return new Promise((resolve, reject) => {axios.get(ip + "/api/v1/Stocks").then((data) => {
        resolve(data.data)
    })});
}

export const getByIngredient = (id) => {
    return new Promise((resolve, reject) => {axios.get(ip + "/api/v1/Stocks/" + id).then((data) => {
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
