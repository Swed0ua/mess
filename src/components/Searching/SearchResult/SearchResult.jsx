import React from 'react';
import AccountPreview from './AccountPreview/AccountPreview';

function SearchResult (props) {
    return (
        <div className="searching__result">
            <AccountPreview name = "User Name" />        
            <AccountPreview name = "Anatoliy" />        
        </div>
    )
}

export default SearchResult;