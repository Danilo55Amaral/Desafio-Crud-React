import React from 'react'
import './Main.css'
import Header from './Header'
import logo from '../../assets/img/logo-001.png'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
            <img src={logo} alt="logo" />
        </main>
    </React.Fragment>