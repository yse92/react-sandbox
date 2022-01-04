import React from 'react'
import UserInfo from './UserInfo';
import Clock from './Clock';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function formatDate(date) {
    return date.toLocaleDateString();
  }
  
function Comment(props) {
    return (
        <Card style={{ width: '18rem' }}>        
        <UserInfo user={props.author} />
        <Card.Body>
            <Card.Title>My profile info is here...</Card.Title>
            <Card.Text>
                <div className="Comment-text">{props.text}</div>
                <div className="Comment-date">
                {formatDate(props.date)}
                </div>
                <Clock date={new Date}/>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>

    );
}
export default Comment;