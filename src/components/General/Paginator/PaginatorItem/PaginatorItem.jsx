import React from 'react';

function PaginatorItem (props) {
    let paginatorStyle = "paginator__item  "
    paginatorStyle += props.activePage === props.page ? '_active' : ''
    return (
        <li onClick={()=>props.changePage(props.page)} className={paginatorStyle}>{props.page}</li>
    )
}

export default PaginatorItem;