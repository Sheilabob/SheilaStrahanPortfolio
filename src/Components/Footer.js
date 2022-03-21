import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1 m-5">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/' className = "link">Home</Link></li>
                            <li><Link to='/skills' className = "link">Skills</Link></li>
                            <li><Link to='/projects' className = "link">Projects</Link></li>
                            <li><Link to='/resume' className = "link">Resume</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center m-5">
                        <h5>Social</h5>

                        <a className="social-btn m-3" href="https://github.com/Sheilabob" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                        </a>
                        <a className="social-btn m-3" href="http://www.linkedin.com/in/sheila-strahan-729437226" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        </a> 
                        <a className="social-btn m-3" href="mailto:smstrahan@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                        </a>
                      
                    </div>
                    <div className="col-sm-3 text-center m-5">
                        <a role="button" className="btn btn-link" href="tel:+14352592985"><i className="fa fa-phone" /> 1-435-259-2985</a><br />
                        <a role="button" className="btn btn-link" href="mailto:smstrahan@gmail.com"><i className="fa fa-envelope-o" /> smstrahan@gmail.com</a>

                    </div>
                </div>
            </div>
        </footer>
    );
}