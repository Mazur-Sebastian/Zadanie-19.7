import React from 'react';
import './App.css';
import CommentListContainer from './CommentsListContainer';


const App = () =>  {  
    return (
        
        <div className='App'>
            
            <h1>
                Tu będzie lista komentarzy
            </h1>
            <CommentListContainer />        
        </div>
    );  
}

export default App;


