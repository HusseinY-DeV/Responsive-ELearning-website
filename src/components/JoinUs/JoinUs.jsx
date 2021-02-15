import React from 'react';
import join from '../../utils/joinus.svg';
import contactus from '../../utils/contactus.svg';
import fb from '../../utils/fb.png';
import phone from '../../utils/phone.png';
import email from '../../utils/email.png';
import './JoinUs.css';

const JoinUs = () => {
    return (
        <div className="join__us">
            <div className="join__us__content">
                <img src={join} alt="" className="join__us__img" height="300px" />
                <p className="join__us__text">
                    <span className="join__us__title">Join Us</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis, corporis, fugit officia, consectetur qui minima labore officiis sequi ullam voluptatem possimus? In eligendi deserunt sequi aut animi fugiat natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nihil minus quia sit ducimus mollitia laboriosam porro saepe placeat nostrum maiores maxime officia voluptate explicabo beatae quod. Rerum, tempora provident?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias officia ab tempore aliquid ipsa minima reprehenderit dolore necessitatibus quos ea, doloribus rerum adipisci veniam explicabo. Distinctio id quisquam accusantium incidunt!</p>
            </div>
            <div className="join__us__contact">
                <p className="join__us__contact__title">
                    We are happy to recieve your questions, comments and quotation requests !
                </p>
                <div className="contact__form__container">
                    <div className="contact__form__card">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Your feedback !" cols="26"
                            rows="10"
                        />
                        <button className="contact__form__btn">Submit</button>
                    </div>
                    <div className="contact__form__links">
                        <img className="contact__us__img" src={contactus} alt="" width="400px" />
                        <div className="links">
                            <a href="https://www.facebook.com" target="__blank"><img src={fb} alt="" /></a>
                            <a href="https://www.gmail.com" target="__blank"><img src={email} alt="" /></a>
                            <a href="tel:+961 78869598" target="__blank"><img src={phone} alt="" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default JoinUs;