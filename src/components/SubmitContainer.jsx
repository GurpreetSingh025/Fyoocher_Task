import React, { useState } from 'react' ;
import "../styles/SubmitContainer.css" ;
import DataTable from './DataTable';

export default function SubmitContainer({data , caller}) { 
  let [tableData , setTableData] = useState([]) ;
  let headerData = [] ;
  if(data.fromItem == true){
      headerData = ["Name" , "Quantity" , "Start Date" , "Unit Price"]
  }else{
      headerData = ["Supplier" , "Company Name" , "Country" , "State" , "City" , "Email Address"] ;
  }

  let handleSubmit = (e) => {
      e.preventDefault  ;
      if(caller == "item"){
          if(data.date){
              let dt = new Date() ;
              let currDate = dt.getDate() ;
              let currMonth = dt.getMonth() + 1 ;
              let currYear =  dt.getFullYear() ;
              
              let splitStr = data.date.split("|") ;
            
              let selectedMonth =  Number(splitStr[0]) ;
              let selectedDate = Number(splitStr[1]) ;
              let selectedYear = Number(splitStr[2]) ;
            
              if((currDate > selectedDate && currMonth > selectedMonth) || (currMonth > selectedMonth && currYear > selectedYear) || currYear > selectedYear){
                  alert("Selected Date should be greater than current date") ;
                  return ;
              }
          }
          if(!data.name || data.name == "" ||  !data.quantity || data.quantity < 1 || !data.unitPrice || data.unitPrice < 1 || !data.date || data.date == "" ) {
            alert("Please fill in all fields properly");
          }else{
               setTableData([...tableData , data]) ;
          }
      }else{
         if(!data.mail1Valid.current || !data.mail2Valid.current){
            alert("Please fill mail fields properly");
            return ;
         }
          if(!data.name || !data.company || data.name == "" || data.company == "" || !data.city || data.city.trim() == ""){
             alert("Please fill in all fields properly");
          }else{
               setTableData([...tableData , data]) ;
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
    <DataTable  data={tableData} headerData = {headerData}/>

    </>
  )
}
