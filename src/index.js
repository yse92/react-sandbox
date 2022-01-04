import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import Comment from './components/Comment'
import UserTable  from './components/UserTable';

const comment = {
  date: new Date(),
  text: 'I hope I will use React with no doubts!',
  author: {
    name: 'Hello, I\'m Yaroslav, begginer programmer!',
    avatarUrl: 'https://images.squarespace-cdn.com/content/v1/55550428e4b0d770e3f981ab/1597343395494-MKCBQIS54Y42OX4QQ8AS/4.jpg?format=1000w',
  },
};

ReactDOM.render(
  <React.StrictMode>
    {/* <Comment date={comment.date}
            text={comment.text}
            author={comment.author}/> */}
      <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
