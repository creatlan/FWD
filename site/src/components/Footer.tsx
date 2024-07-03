import React from 'react';
import '../styles/main.css';

import telegram from '../photo/telegram.png';
import github from '../photo/github.png';
import discord from '../photo/discord.png';
import mail from '../photo/gmail.png';

export const Footer = () => (
    <footer>
    <div className="contact">
    <h3>Let's work together?</h3>
    <a href="https://t.me/diggoryk" target="_blank" id="contact-link">
    <button>Contact me</button></a>
    </div>
    <div className="social-media">
    <h3>You can find me on social media:</h3>
    <ul>
        <li><a href="https://t.me/diggoryk" target="_blank" id="telegram-link">
            <img src={telegram} alt="Telegram"style={{ width: 30, height: 30 }} /></a></li>
        <li><a href="https://github.com/creatlan" target="_blank" id="github-link">
            <img src={github} alt="github" style={{ width: 30, height: 30 }} /></a></li>
        <li><a href="https://discord.com/users/691624992726712390" target="_blank" id="discord-link" >
            <img src={discord} alt="discord" style={{ width: 30, height: 30 }} /></a></li>
        <li><a href="mailto:a.suhoverkova@innopolis.university" target="gmail" id="mail-link">
            <img src={mail} alt="mail" style={{ width: 30, height: 30 }} /></a></li>
    </ul>
    </div>
    </footer>
)

export default Footer;