import React, { useContext, useEffect } from 'react'
import "./verify.css"
import { useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Verify = () => {
   
   const [searchParams , setSearchParams] = useSearchParams();
   const success = searchParams.get("success")
   const orderId = searchParams.get("orderId")
   const {url} = useContext(StoreContext);
   const navigate = useNavigate();
   console.log(success,orderId);
  
   const verifyPayment = async()=>{
      const response = await axios.post(url+"/api/order/verify",{success , orderId})
      if(response.data.success){
        navigate("/myorders")
      }
      else{
        navigate("/")
      }
   }



   useEffect(() => {
    verifyPayment();
  }, [success, orderId]); // Add success and orderId to the dependency array
  
    return (
    <div className='verify'>
       <div className="spinner">

       </div>
    </div>
  )
}

export default Verify
