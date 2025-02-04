import { createContext } from "react";

const userContext=createContext({
    sidebar:false,
    logedin:false,
    username:"",
    search:"",
    userid:"",
});
export default userContext;