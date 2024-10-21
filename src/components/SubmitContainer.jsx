import React from 'react' ;
import "../styles/SubmitContainer.css" ;
import DataTable from './DataTable';

export default function SubmitContainer({data}) {
  return (
    <div className='submit-cont'>
         <div className='submit-cont-title centerIt'>
             <p className='family700'>Submitted Data</p>
         </div>
         <div className='submit-body centerIt'>
             <p className='family400'>The data submitted by users will be displayed below</p>
             <button className='submitBtn text-white family500'>Save Changes</button>
         </div>
    </div>
  )
}
