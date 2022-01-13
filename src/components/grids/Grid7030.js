import React from 'react';

const Grid7030 = ({ col1, col2, custClassMain, custClassCol1, custClassCol2 }) => {
    return (
        <section className={`grid7030 ${custClassMain ? custClassMain : ''}`}>
            <div className={`grid7030__col1 ${custClassCol1? custClassCol1: ''}`}>
                { col1 }
            </div>
            <div className={`grid7030__col2 ${custClassCol2? custClassCol2 : ''}`}>
                { col2 }
            </div>
        </section>
    )
}

export default Grid7030;