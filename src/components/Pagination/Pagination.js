import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    return(
        <div className="Pagination">
            {props.pagination.previousPage >= 1?
                <button className="Pagination-left" onClick={props.clicked}>&#10094;</button>:null
            }
            <span>{props.pagination.currentPage}/{props.pagination.totalPages}</span>
            {props.pagination.currentPage < props.pagination.totalPages?
                <button className="Pagination-right" onClick={props.clicked}>&#10095;</button>:null
            }
            
        </div>
    )
}

export default Pagination;