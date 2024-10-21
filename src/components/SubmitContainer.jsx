import React, { useState } from 'react' ;
import "../styles/SubmitContainer.css" ;
import DataTable from './DataTable';

export default function SubmitContainer({data}) { 
  let [tableData , setTableData] = useState([]) ;
  let handleSubmit = (e) => {
      e.preventDefault  ;
      if(data.fromItem = true){
          if(!data.name || data.name == "" ||  !data.quantity || data.quantity < 1 || !data.unitPrice || data.unitPrice < 1 || !data.startDate || data.startDate == "" ) {
            alert("Please fill in all fields properly");
          }else{
               setTableData([data]) ;
          }
      }else{
         if(!data.mail1Valid.current || !data.mail2Valid.current){
            alert("Please fill mail fields properly");
         }
         else if(!data.name || !data.company || data.name == "" || data.company == "" || !data.city || data.city == ""){
             alert("Please fill in all fields properly");
          }else{
               setTableData([data]) ;
          }
      }
  }
  return (
    <>
    <div className='submit-cont'>
         <div className='submit-cont-title centerIt'>
             <p className='family700'>Submitted Data</p>
         </div>
         <div className='submit-body centerIt'>
             <p className='family400'>The data submitted by users will be displayed below</p>
             <button className='submitBtn text-white family500' onClick={handleSubmit}>Save Changes</button>
         </div>         
    </div>
     { /* <DataTable tableData={tableData}/> */ }
    </>
  )
}
