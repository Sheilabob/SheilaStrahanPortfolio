import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import HomePlayground from './HomePlayground';

export default function Header() {

        return(
            <React.Fragment >
                               {/* <Navbar dark sticky="top" expand="sm" className="headbar">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <h3>Projects</h3>
                        </NavbarBrand>
                        </div>
                </Navbar> */}
                            <Link to='/' style={{textDecoration: 'none'}}>
<div className="jumbotron header">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 title">
                                <h1>Sheila Strahan</h1>
                                <h2>Web Developer</h2>
                            </div>
                            <div className="col-4"><img src="../assets/images/squareMsSheilaRingArch.jpg" className="header-pic" /></div>
                        </div>
                    </div>
                </div></Link>
             </React.Fragment>
        );
}