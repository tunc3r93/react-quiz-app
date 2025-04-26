import React from 'react';
import "./Quiz.css";

const Quiz = () => {
    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            <h2>Which HTML tag is used to create a hyperlink?</h2>
            <ul>
                <li>&lt;link&gt;</li>
                <li>&lt;a&gt;</li>
                <li>&lt;href&gt;</li>
                <li>&lt;url&gt;</li>
            </ul>
            <button>Next</button>
            <div className="index">
                1 of 5 questions
            </div>
        </div>
    )
}

export default Quiz;