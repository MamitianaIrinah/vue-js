import axios from "axios";

const ip = "https://jeu-production-2a49.up.railway.app"


export const getAllPlat = () => {
    return new Promise((resolve, reject) => {axios.get(ip + "/api/v1/plats").then((data) => {
        resolve(data.data)
    })});
}

export const insertionPlat = (nomPlat, tempsCuisson, prixUnitaire) => {
    return new Promise((resolve, reject) => {axios.post(ip + "/api/v1/plats", {
        nomPlat: nomPlat,
        prixUnitaire: prixUnitaire,
        tempsCuisson: tempsCuisson

    }).then((data) => {
        resolve(data.data)
    })});
}