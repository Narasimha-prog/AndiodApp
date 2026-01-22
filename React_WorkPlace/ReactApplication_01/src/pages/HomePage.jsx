import React, { useContext, useEffect } from 'react'
import { AppContext } from '../components/CustomProvider'

const HomePage = () => {
console.log('HomePage rendered');
  useEffect(()=>{
    console.log('HomePage mounted');

    return () => console.log('HomePage unmounted');
  },[])

         const { obj } = useContext(AppContext);
  return (
    <div>HomePage
        <div>{obj.name}</div>
        <div>{obj.email}</div>
    </div>
  )
}

export default HomePage