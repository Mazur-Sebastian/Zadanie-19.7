import React from 'react';
import './App.css';
import CommentList from './CommentsList';


const App = () =>  {  
    return (
        <div className='App'>
            <h1>
                Tu będzie lista komentarzy
            </h1>
            <CommentList />        
        </div>
    );  
}

export default App;


