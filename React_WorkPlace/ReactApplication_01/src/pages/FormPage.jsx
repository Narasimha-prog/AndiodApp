import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from '../components/CustomProvider.jsx'

const FormPage = () => {

    console.log('FormPage rendered');
useEffect(() => { 
    console.log('FormPage mounted');

    return () => console.log('FormPage unmounted');
   }, []);

         const {  setObj } = useContext(AppContext);
         const [formData, setFormData] = useState({ name: '', email: '' });



         const handleChange =(e)=>{
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
         }

         const handleSubmit =(e)=>{
            e.preventDefault();
            setObj(()=>({ name: formData.name, email: formData.email }));
            console.log('Form submitted:', formData);
         }
  return (
    <div>FormPage

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name"    name="name" value={formData.name} onChange={handleChange} />
            <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormPage