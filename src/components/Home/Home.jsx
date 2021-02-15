import React from 'react';
import { Link } from 'react-router-dom';
import books from '../../utils/Books.svg';
import './Home.css';


const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home__features">
                    <div className="home__features__card">
                        <h4 className="title">Lorem</h4>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?</p>
                    </div>

                    <div className="home__features__card">
                        <h4 className="title">Lorem</h4>
                        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, porro.</p>
                    </div>

                    <div className="home__features__card">
                        <h4 className="title">Lorem</h4>
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, quas?</p>
                    </div>

                    <div className="home__cto">
                        <Link to="/join-us">Join Us</Link>
                    </div>
                </div>
            </div>
            <div className="course__overview">
                <p className="section__title">Courses Overview</p>
                <div className="courses">
                    <div className="course">
                        <img src={books} alt="" />
                        <p className="course__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, itaque.</p>
                    </div>
                    <div className="course">
                        <img src={books} alt="" />
                        <p className="course__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, perferendis.</p>
                    </div>
                    <div className="course">
                        <img src={books} alt="" />
                        <p className="course__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, obcaecati.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;