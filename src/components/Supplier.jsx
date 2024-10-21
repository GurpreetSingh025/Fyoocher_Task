import React, { useState } from 'react'
import "../styles/supplier.css" ;
import SubmitContainer from './SubmitContainer';

export default function Supplier() {
    let [name, setName] = useState("");
    let [company, setCompany] = useState("");
    let [country, setCountry] = useState("");
    let [state, setState] = useState("");
    let [city, setCity] = useState("");
    let [mail, setMail] = useState("");
    let [mail2, setMail2] = useState("");
    return (
        <>
        <div className='supplier-cont'>
            <div className='title'>
                <p className='family700 centerIt'>Supplier Details</p>
            </div>
            <div className='supplier-form-cont'>
                <div className='form-field-cont'>
                    <p className='normalText family500'>Supplier Name</p>
                    <input type="text" required className='form-field' placeholder='Enter supplier name' value={name} onChange={(e) => setName(name.length + e.target.value.length <= 255 ? e.target.value : name)} />
                    <p className='family400 field-message-text'>Max 225 characters</p>
                </div>
                <div className='form-field-cont'>
                    <p className='normalText family500'>Company Name</p>
                    <input type="text" required className='form-field' placeholder='Enter company name' value={company} onChange={(e) => setCompany(e.target.value)} max="50" />
                    <p className='family400 field-message-text'>Max 50 characters</p>
                </div>
                <div className='form-field-cont'>
                    <p className='normalText family500'>Country</p>
                    <select className='form-field' value={country} onChange={(e) => setCountry(e.target.value)} required>
                        <option value="usa">USA</option>
                        <option value="japan">Japan</option>
                    </select>
                    <p className='family400 field-message-text'>Select country from the list</p>
                </div>
                <div className='form-field-cont'>
                    <p className='normalText family500'>State</p>
                    <select className='form-field' value={state} onChange={(e) => setState(e.target.value)} required>
                        <option value="florida">Florida</option>
                        <option value="xyz">XYZ</option>
                    </select>
                    <p className='family400 field-message-text'>Select state from the list</p>
                </div>
                <div className='form-field-cont'>
                    <p className='normalText family500'>City</p>
                    <input type="text" className='form-field' placeholder='Enter city' value={city} required onChange={(e) => setCity(e.target.value)} max="50" />
                    <p className='family400 field-message-text'>Max 50 characters</p>
                </div>
                <div className='form-field-cont'>
                    <p className='normalText family500'>Email Address</p>
                    <input type="text" className='form-field' placeholder='Enter email address' value={mail} required onChange={(e) => setMail(e.target.value)} max="50" />
                    <p className='family400 field-message-text'>Valid email format</p>
                </div>
                <div className='form-field-cont'>
                    <p className='normalText family500'>Email Address</p>
                    <input type="text" className='form-field' placeholder='Enter email address' required value={mail2} onChange={(e) => setMail2(e.target.value)} max="50" />
                    <p className='family400 field-message-text'>Valid email format</p>
                </div>
            </div>
        </div>
        <SubmitContainer/>
        </>
    )
}
