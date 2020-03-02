import axios from "axios"

axios.defaults.withCredentials = true

const DeliriumAPI = axios.create({
  baseURL: "https://delirium-api.thesoban.pl",
})

export default DeliriumAPI
