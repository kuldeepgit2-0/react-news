import axios from "axios";

export const homeAxioss = async() => {

    const response = await axios.get("https://newsapi.org/v2/everything?q=everything&from=2024-07-25&to=2024-07-25&sortBy=popularity&apiKey=b5305ac6719b46d6b04ca3de333732ab")
const data = response.data
return data
}

export const indiaAxioss = async() => {

    const response = await axios.get("https://newsapi.org/v2/everything?q=india&from=2024-07-25&to=2024-07-25&sortBy=popularity&apiKey=b5305ac6719b46d6b04ca3de333732ab")
const data = response.data
return data
 }
 
 export const politicsAxioss = async() => {

    const response = await axios.get("https://newsapi.org/v2/everything?q=politics&from=2024-07-25&to=2024-07-25&sortBy=popularity&apiKey=b5305ac6719b46d6b04ca3de333732ab")
const data = response.data
return data

 }

 export const sportsAxioss = async() => {

    const response = await axios.get("https://newsapi.org/v2/everything?q=sports&from=2024-07-25&to=2024-07-25&sortBy=popularity&apiKey=b5305ac6719b46d6b04ca3de333732ab")
const data = response.data
return data

 }

 export const technologyAxioss = async() => {

    const response = await axios.get("https://newsapi.org/v2/everything?q=technology&from=2024-07-25&to=2024-07-25&sortBy=popularity&apiKey=b5305ac6719b46d6b04ca3de333732ab")
const data = response.data
return data

 }

 export const bussinessAxioss = async() => {

    const response = await axios.get("https://newsapi.org/v2/everything?q=bussines&from=2024-07-25&to=2024-07-25&sortBy=popularity&apiKey=b5305ac6719b46d6b04ca3de333732ab")
const data = response.data
return data

 }


 