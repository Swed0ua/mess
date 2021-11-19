import React, { useEffect, useState } from 'react';
import './paginator.css'
import arrow from '../../../img/ico/icoForMess__arrow.png'
import PaginatorItem from './PaginatorItem/PaginatorItem';

function Paginator (props) {
    let [paginatorGuise, setPaginatorGuise] = useState([]);
    let currentPage = props.numberOfPages;
    let maxItems = props.maxItems;
    let openPage = props.resultPage;

    
    let onArrow = (i) => {
        let res = openPage + i;

        if (res != 0 && res <= currentPage){
            props.onChangeResultPage(openPage + i)
        }
    }
    
    const paginatorArrayInit = (int) => {
        let halfMaxItems = Math.ceil(maxItems/2)
        let res = openPage - int;
        let processedPage = openPage+(int-halfMaxItems)
        
        
        if (int == 1 && openPage != 1) return 1;
        if (int == maxItems && openPage != currentPage) return currentPage;
        if ((int<halfMaxItems && (res <= 0)) || (int > halfMaxItems && (processedPage >= currentPage ))) {
            return null
        }
        if (((int == 2 && processedPage != 3) || (int == maxItems-1 && processedPage != currentPage-2)) && (currentPage>maxItems) ) return 0;
        return processedPage
     
    }

    const paginatorCreateHtml = () => {
        let paginatorHtml = [];
        paginatorGuise.map(e=>{
            console.log(paginatorGuise, e);
            switch (e) {
                case 0:
                    paginatorHtml.push(<li class="paginator__plug">...</li>)
                    break;
    
                case null:
                    break
            
                default:
                    paginatorHtml.push(<PaginatorItem activePage={openPage} changePage={props.onChangeResultPage} page={e} />);
                    break;
            }
        })
        return paginatorHtml;
    
    }
    
    useEffect(()=>{
    let paginatorGuiseCopy = []
    
    for (let i = 1; i<=maxItems; i++) {
        paginatorGuiseCopy.push(paginatorArrayInit(i));
    }

    setPaginatorGuise([...paginatorGuiseCopy])

    }, [openPage, currentPage])

    return (
        <div className="paginator__container">
            <div className="paginator__wrapper">
                <div onClick={()=>onArrow(-1)} className="paginator__arrow paginator__arrow-left"><img src={arrow} alt="arrow-left"></img></div>
                <ul className = "paginator" id = "paginator">
                    {
                         paginatorCreateHtml()
                    }
                </ul>
                <div onClick={()=>onArrow(1)} className="paginator__arrow paginator__arrow-right"><img src={arrow} alt="arrow-right"></img></div>
            </div>
        </div>
    )
}

export default Paginator;