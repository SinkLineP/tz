import React, {useState} from 'react';
import DocumentsItem from "./DocumentsItem";
import "./Documents.scss";

const Documents = ({title, subtitle, items}) => {
    const [isAllFileShowing, setAllFileShowing] = useState(false);
    const toggleAllFile = (newValue) => {
        setAllFileShowing(newValue)
    }
    const itemsList = items.map((document, i) => isAllFileShowing
        ?
        i < 10 ? <DocumentsItem document={document} number={i+1} key={i}/> : ""
        :
        i < 6 ? <DocumentsItem document={document} number={i+1} key={i}/> : "");

    return (
        <section className="documents container">
            <h2 className="documents-title">{title}</h2>
            <p className="documents-subtitle">{subtitle}</p>
            <div className="documents-list">
                {itemsList}
                <p className="documents-download"
                   onClick={() => toggleAllFile(!isAllFileShowing)}>{ isAllFileShowing ? "Сховати всі документи" : "Завантажити всі документи"}</p>
            </div>
        </section>
    );
};

export default Documents;
