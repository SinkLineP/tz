import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons'

const DocumentsItem = ({document, number}) => {
    return (
        <div className="documents-list-item">
            <FontAwesomeIcon className="documents-list-item-icon" icon={faFile} />
            <a href={document.url}  download className="documents-list-item-text">{document.title}</a>
        </div>
    );
};

export default DocumentsItem;
