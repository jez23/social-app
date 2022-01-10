import React from 'react';

const Grid108010 = ({ col1, col2, col3 , custClassMain, custClassCol1, custClassCol2, custClassCol3  }) => {
    return (
        <section className={`grid108010 ${custClassMain ? custClassMain : ''}`}>
            <div className={`grid108010__col1 ${custClassCol1? custClassCol1 : ''}`}>
               { col1 }
            </div>
            <div className={`grid108010__col2 ${custClassCol2? custClassCol2 : ''}`}>
                {col2}
            </div>
            <div className={`grid108010__col3 ${custClassCol3? custClassCol3 : ''}`}>
                {col3}
            </div>
        </section>
    )
}

export default Grid108010;