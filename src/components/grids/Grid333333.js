import React from 'react';

const Grid333333 = ({ col1, col2, col3, custClassMain, custClassCol1, custClassCol2, custClassCol3}) => {
   
    return (
        <div className={`grid333333 ${custClassMain ? custClassMain : ''}`}>
            <div className={`grid333333__col1 ${custClassCol1? custClassCol1 : ''}`}> 
                  { col1 }
            </div>
            <div className={`grid333333__col2 ${custClassCol2? custClassCol2 : ''}`}> 
                  { col2 }
            </div>
            <div className={`grid333333__col3 ${custClassCol3? custClassCol3: ''}`}> 
                  { col3 }
            </div>
        </div>
    )
}

export default Grid333333;