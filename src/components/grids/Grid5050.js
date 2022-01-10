import React from 'react';

const Grid5050 = ({ col1, col2, custClassMain, custClassCol1, custClassCol2 }) => {
    return (
        <section className={`grid5050 ${custClassMain ? custClassMain : ''}`}>
            <div className={`grid5050__col1 ${custClassCol1? custClassCol1 : ''}`}>
                { col1 }
            </div>
            <div className={`grid5050__col2 ${custClassCol2? custClassCol2 : ''}`}>
                { col2 }
            </div>
        </section>
    )
}

export default Grid5050;