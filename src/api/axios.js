 import axios from "axios";

 //coz develpmnt backend is going to be run on port:3000 
 export default axios.create({
     baseURL: "http://localhost:3500"
    });