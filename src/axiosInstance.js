import axios from "axios";
export default axios.create({
  baseURL: "https://crudcrud.com/api/6fa6d5d463ad4dc2b14e241abc2182c3",
  headers: {
    "Content-type": "application/json"
  }
});