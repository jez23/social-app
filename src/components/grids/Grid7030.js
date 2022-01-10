import React from 'react';

const Grid3070 = ({ col1, col2, custClassMain, custClassCol1, custClassCol2 }) => {
    return (
        <section className={`grid3070 ${custClassMain ? custClassMain : ''}`}>
            <div className={`grid3070__col1 ${custClassCol1? custClassCol1: ''}`}>
                { col1 }
            </div>
            <div className={`grid3070__col2 ${custClassCol2? custClassCol2 : ''}`}>
                { col2 }
            </div>
        </section>
    )
}

export default Grid3070;