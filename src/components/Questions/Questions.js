import React from 'react';
import QuestionsItem from "./QuestionsItem";
import "./Questions.scss";

const Questions = ({title, subtitle, itemsFirst, itemsSecond}) => {
    const itemsListFirst= itemsFirst.map((question, i) => <QuestionsItem question={question} number={i+1} key={i}/>);
    const itemsListSecond = itemsSecond.map((question, i) => <QuestionsItem question={question} number={i+1} key={i}/>);

    return (
        <section className="questions container">
            <h2 className="questions-title">{title}</h2>
            <p className="questions-subtitle">{subtitle}</p>
            <div className="questions-list">
                <div className="questions-list-first">
                    {itemsListFirst}
                </div>
                <div className="questions-list-two">
                    {itemsListSecond}
                </div>
            </div>
        </section>
    );
};

export default Questions;
