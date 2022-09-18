import React from 'react';
import logo from '../assets/logo.png'
import "../assets/styles/containers/Plan.css"
import "bootstrap"
import Comida from './Comida';
const Plan = () => {
    return( 
    <div className='Plan'>
        <div className='Plan__Header'>
            <div>
                <img src={logo} className='Plan__Header__logo'></img>
            </div>
            <div className='Plan__Header__title'>
                <div className='Plan__Header__title--text'>Plan de Alimentacion</div>
            </div>
        </div>
        <div className='Plan__Comidas'>
            <div className="card">
                <div className="card-header">
                    Comida
                </div>
                <Comida></Comida>
            </div>
            <div className="card">
                <div className="card-header">
                    Comida
                </div>
                <Comida></Comida>
            </div>
            <div className="card">
                <div className="card-header">
                    Comida
                </div>
                <Comida></Comida>
            </div>
            <div className="card">
                <div className="card-header">
                    Comida
                </div>
                <Comida></Comida>
            </div>
            <div className="card">
                <div className="card-header">
                    Comida
                </div>
                <Comida></Comida>
            </div>          
        </div>
    </div>
    );
}

export default Plan;