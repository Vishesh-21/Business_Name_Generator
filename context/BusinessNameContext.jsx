"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

const QueryContext = createContext()

export const BusinessNameContext = ({children}) => {

    const [query,setQuery] = useState({});

    useEffect(() => {
        const data  = sessionStorage.getItem('query');
        if (data) {
            setQuery(JSON.parse(data));
          }
    },[])

    const updateQuery = (newQuery) => {
        setQuery((prev) => {
            const newQueryData = {...prev,...newQuery};
            sessionStorage.setItem('query',JSON.stringify(newQueryData));
            return newQueryData;
        })
    }
  return (
    <QueryContext.Provider value={{query,updateQuery}}>
        {children}
    </QueryContext.Provider>
  )
}

//custom hook to use query context
export function useQueryContext (){
    return useContext(QueryContext);
}