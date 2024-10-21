import React from 'react';
import "../styles/DataTable.css";

export default function DataTable({ data , headerData}) {
    return (
        <>
        {
            data.length > 0 ? (
                <div className='container'>
                <div className="header">
                    <h1 className='family500'>Uploaded Data</h1>
                    <button className='family600'>Clear All</button>
                </div>
                <table>
                    <thead>
                        <tr className='family500 tableHeaderCont'>
                             {
                                headerData.map((val , idx) => <th key={idx+1}>{val}</th>)
                             }
                        </tr>
                    </thead>
                    <tbody>
                                {                                  
                                    data[0].fromItem == true ? (
                                       data.map((row , index) => (
                                            <tr key={index} className='table-row family500'>
                                                <td>
                                                    <span className='table-checkbox'></span>
                                                    <span className='table-text'>{row.name}</span>
                                                </td>
                                                <td>
                                                    {row.quantity}
                                                </td>
                                                <td>
                                                    {row.unitPrice}
                                                </td>
                                                <td>
                                                    {row.date}
                                                </td>
                                            </tr>
                                       ))
                                    ) : (
                                        data.map((row, index) => (
                                            <tr key={index} className='table-row family500'>
                                                <td>
                                                    <span className='table-checkbox'></span>
                                                    <span className='table-text'>{row.name}</span>
                                                </td>
                                                <td>{row.company}</td>
                                                <td>{row.country}</td>
                                                <td>{row.state}</td>
                                                <td>{row.city}</td>
                                                <td>{row.mail}</td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                </table>
            </div>
            ) : (
                <></>
            )
        }
        </>
    )
}
