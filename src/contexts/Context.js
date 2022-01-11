import React, { useState, createContext } from 'react';


const Context = createContext();

export function ConstProvider({children}){
  
    const [baseUrl, setBaseUrl] = useState('https://blog-blackend-api.herokuapp.com/api/v1');  

 /*    const getAllUsers = () => {
        return fetch(`${baseUrl}/users`)
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(222222, data);
            return data;
        })
        .catch(err => console.log(err))
    } */

    return(
        <Context.Provider value={{
            baseUrl
             }}>
        {children}
        </Context.Provider>
      )
}


export default Context;