import React from 'react'
import "../styles/Item.css"
import {useState} from 'react' ;
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubmitContainer from './SubmitContainer';
export default function Item() {
    let [name , setName] = useState("") ;
    let [quantity , setQuantity] = useState(0) ;
    let [unitPrice , setUnitPrice] = useState(0) ;
    const [startDate, setStartDate] = useState(new Date());
    let [date , setDate] = useState("") ;
    let data = {
        name ,
        quantity ,
        unitPrice ,
        date ,
        fromItem : true 
    }
  return (
    <>
    <div className='item-cont'>
       <div className='title'>
           <p className='family700 centerIt'>Item Details</p>
       </div>
       <div className='item-form-cont'>
           <div className='form-field-cont'>
               <p className='normalText family500'>Item Name</p>
               <input type="text" className='form-field' placeholder='Enter item name' value={name} onChange={(e) => setName(name.length + e.target.value.length <= 255 ? e.target.value : name)} />
               <p className='family400 field-message-text'>Max 225 characters</p>
           </div>
           <div className='form-field-cont'>
                 <p className='normalText family500'>Quantity</p>
                 <input type="number" className='form-field' placeholder='Enter Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value > 10 || e.target.value < 0 ? quantity : Math.round(e.target.value))} />
                 <p className='family400 field-message-text'>Numeric Value</p>
           </div>
           <div className='form-field-cont'>
                 <p className='normalText family500'>Unit Price</p>
                 <input type="number" className='form-field' placeholder='Enter Unit Price' value={unitPrice} onChange={(e) => setUnitPrice(e.target.value < 0 ? unitPrice : e.target.value)} />
                 <p className='family400 field-message-text'>Numeric Value(USD)</p>
           </div>
           <div className='form-field-cont'>
                 <p className='normalText family500'>Date Of Submission</p>
                 {/* <input type="text" className='form-field' placeholder='Enter Unit Price' value={date} onChange={(e) => setDate(e.target.value)}  /> */ }
                 <DatePicker className='form-field' selected={startDate} onChange={(date) => {
                    setStartDate(date) ;
                    setDate(`${date.getMonth() + 1} | ${date.getDate()} | ${date.getFullYear()}`) ;

                 }} />
                 <p className='family400 field-message-text'>Format MM/DD/YY</p>
           </div>
       </div>
    </div>
    <SubmitContainer data={data} caller="item"/>
    </>
  )
}
