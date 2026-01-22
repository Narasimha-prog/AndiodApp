import { createContext, useEffect, useState } from 'react'
import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext=createContext({
    obj: {
        name: "React Context API",
        email: "React@context.com",
    },
    setObj: () => {},
});
const CustomProvider = ({ children }) => {

  useEffect(() => {
  console.log('CustomProvider mounted');
  return () => console.log('CustomProvider unmounted');
}, []);
  <br></br>
console.log('CustomProvider rendered');


  const [obj, setObj] = useState({name:"React Context API", email:"React@context.com"});
  return (
    <AppContext.Provider value={{ obj,setObj }}>
      {children}
    </AppContext.Provider>
  )
}

export default CustomProvider