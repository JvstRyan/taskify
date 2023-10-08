import React from 'react'
import classes from './SideBar.module.css'
import logo from '../../../assets/logo.svg'

const SideBar = () => {
    return (
        <>
        <section>
            <article>
             <img src={logo}></img>
            </article>
        </section>
        </>
    )
}

export default SideBar;