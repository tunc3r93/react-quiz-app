import React, {useRef, useState} from 'react';
import "./Quiz.css";
import {data} from "../../assets/data.js";

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAnswer = (e, ans) => {
        if(lock === false){
            if(ans === question.ans) {
                e.target.classList.add("correct");
                setLock(true);
            }else{
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    }

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            <h2>{index + 1} . {question.question}</h2>
            <ul>
                <li ref={Option1} onClick = {(e) => {checkAnswer(e, 1)}}>{ question.option1 }</li>
                <li ref={Option2} onClick = {(e) => {checkAnswer(e, 2)}}>{ question.option2 }</li>
                <li ref={Option3} onClick = {(e) => {checkAnswer(e, 3)}}>{ question.option3 }</li>
                <li ref={Option4} onClick = {(e) => {checkAnswer(e, 4)}}>{ question.option4 }</li>
            </ul>
            <button>Next</button>
            <div className="index">
                1 of 5 questions
            </div>
        </div>
    )
}

export default Quiz;