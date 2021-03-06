import React from 'react'
import './Header.css'

export default props =>
    <header className="header d-none d-sm-flex flex-colum">
        <h1 className="mt3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>