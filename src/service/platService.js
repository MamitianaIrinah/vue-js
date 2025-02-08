import axios from "axios";

const ip = "http://192.168.88.24:8000"


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