import React from 'react';
import './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FaBeer } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

export const Profile = () => {
    const sayHello = "Hello, react developers!"
    return (
        <div>
            <h3>{sayHello}</h3>
            <div>
                <div className="Logo"></div>                
                <p className="title">Junior React Developer</p>
                <p>Студия веб-дизайна</p>
                <p>Ярослав, 29</p>
                <p>Мой стек:</p>
                <ul>
                    <li>Javascript ES6</li>
                    <li>OOP</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>React</li>
                </ul>
                <a href="#"><FaBeer/>https://publish.twitter.com/</a>
                <a href="#"><FaBeer/>https://developers.facebook.com/docs/plugins/</a>
                <a href="#"><FaBeer/>https://react-icons.github.io/react-icons</a>
                <a href="#"><FaBeer/>https://snack.expo.dev/@yse92/f3e4cd</a>
                <Button variant="danger">Contact me</Button>{' '}
            </div>
        </div>
    )
}

export default Profile