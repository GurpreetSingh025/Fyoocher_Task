import React from 'react' ;
import "../styles/DataTable.css" ;

export default function DataTable({data}) {
  return (
    <div className='data-table-cont'>
        <div className='data-table-header'>
            <div className='data-table-title'>Uploaded Data</div>
            <div className='clearBtn'>Clear All</div>
        </div>
    </div>
  )
}
