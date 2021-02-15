import React from 'react';
import './About.css';
import aboutLogo from '../../utils/aboutuslogo.svg';
import portrait from '../../utils/portrait.jpg';

const About = () => {
    return (
        <div className="about__container">
            <div className="about__content">
                <p className="about__text">
                    <span className="about__title">About Us</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum nesciunt voluptatem consequuntur nemo, quae facere voluptate modi quibusdam excepturi? Ex sapiente fugit quae deleniti beatae expedita vero dolorum laudantium.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui obcaecati ex odit accusamus veritatis dignissimos assumenda fugiat nam explicabo suscipit doloribus mollitia odio necessitatibus sapiente dolor, ut maxime minus aspernatur. Lorem ipsum dolor sit amet.
                </p>
                <img src={aboutLogo} width="310px" alt="" />
            </div>
            <div className="about__members__container">
                <h3 className="about_members_team">Our Team</h3>
                <div className="about__members">
                    <div className="member">
                        <img src={portrait} width="200px" alt="" />
                        <p className="member_name">Lorem ipsum</p>
                    </div>
                    <div className="member">
                        <img src={portrait} width="200px" alt="" />
                        <p className="member_name">Lorem ipsum dolor</p>
                    </div>
                    <div className="member">
                        <img src={portrait} width="200px" alt="" />
                        <p className="member_name">Lorem ipsum dolor sit</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;