import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export default function Header() {

        return(
            <React.Fragment>
                               <Navbar dark sticky="top" expand="sm">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <h3>Projects</h3>
                        </NavbarBrand>
                        </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                            </div>
                            <div className="col-1"></div>
                            <div className="col-8">
                                <h1>Sheila Strahan</h1>
                                <h2>Web Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>
             </React.Fragment>
        );
}