import React from 'react'
import "../styles/mainContent.css"; 
import CheckboxContainer from './CheckboxContainer';
import { useState } from 'react';
import Item from './Item';
import Supplier from './Supplier';
import SubmitContainer from './SubmitContainer';

export default function MainContent() {
    let [itemChecked , setItemChecked] = useState(true) ;
    let updateItemChecked = (val) => {
        setItemChecked(val) ;
    }
    return (
        <div className='main-content-cont'>
            <CheckboxContainer  itemChecked = {itemChecked} updateItemChecked={updateItemChecked}/>
            {
                itemChecked ? <Item/> : <Supplier/>
            }            
        </div>
    )
}
