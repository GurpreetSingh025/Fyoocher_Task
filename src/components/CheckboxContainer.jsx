import React from 'react'
import "../styles/CheckboxContainer.css"
export default function CheckboxContainer({itemChecked , updateItemChecked}) {
    return (
        <div className='outer-checkbox-cont'>
            <div className={`checkbox-cont items-checkbox-cont ${itemChecked ? "checked" : ""}`} onClick={() => updateItemChecked(!itemChecked)}>
                <span className='checkbox centerIt'>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6666 1.5L4.24992 7.91667L1.33325 5" stroke="#007AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <span className='checkbox-text family500'>Item</span>
            </div>
            <div className={`checkbox-cont supplier-checkbox-cont ${itemChecked == false ? "checked" : ""}`} onClick={() => updateItemChecked(!itemChecked)} >
                <span className='checkbox centerIt'>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6666 1.5L4.24992 7.91667L1.33325 5" stroke="#007AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <span className='checkbox-text family500'>Supplier</span>
            </div>
        </div>
    )
}
