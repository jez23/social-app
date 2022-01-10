import React from 'react';

const Grid4060 = ({col1, col2, custClassMain, custClassCol1, custClassCol2}) => {
    return (
        <div className={`grid4060 ${custClassMain ? custClassMain : ''}`}>
            <div className={`grid4060__col1 ${custClassCol1? custClassCol1 : ''}`}> 
                { col1 }
            </div>
            <div className={`grid4060__col2 ${custClassCol2? custClassCol2: ''}`}>
                { col2 } 
            </div>
        </div>
    )
}

export default Grid4060;