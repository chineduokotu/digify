import React from "react";

import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';

import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';

import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                    <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
                </div>
                <div className="project">
                    <a href="https://lnxlogistics.site/move-household-goods" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?fm=jpg&ixlib=rb-4.0.3&q=60&w=1600" className="zoom" alt="Logistics and moving services" width="100%" /></a>
                    <a href="https://lnxlogistics.site/move-household-goods" target="_blank" rel="noreferrer"><h2>LNX Logistics: Move Household Goods</h2></a>
                    <p>Logistics platform for moving household goods, providing seamless booking, real-time tracking, and reliable delivery services.</p>
                </div>
                <div className="project">
                    <a href="https://thebuildershubb.com/" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1707904645731-9879090f77c5?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" className="zoom" alt="Construction site with crane" width="100%" /></a>
                    <a href="https://thebuildershubb.com/" target="_blank" rel="noreferrer"><h2>The Builders Hubb</h2></a>
                    <p>Construction marketplace connecting builders, vendors, and clients with project listings, services, and procurement support.</p>
                </div>
                <div className="project">
                    <a href="https://www.salonbookingsystem.com/" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?fm=jpg&ixlib=rb-4.0.3&q=60&w=1600" className="zoom" alt="Salon booking system" width="100%" /></a>
                    <a href="https://www.salonbookingsystem.com/" target="_blank" rel="noreferrer"><h2>Salon Booking System</h2></a>
                    <p>A comprehensive salon management and booking platform that enables clients to schedule appointments, manage services, and streamline salon operations.</p>
                </div>
                <div className="project">
                    <a href="https://rentola.com/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://rentola.com/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                    <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
                </div>
                <div className="project">
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                    <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
                </div>

                <div className="project">
                    <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                    <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
                </div>
                <div className="project">
                    <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                    <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;
