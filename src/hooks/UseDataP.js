import React, { useEffect, useState } from 'react';

const UseDataP = () => {
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch('https://dry-peak-89227.herokuapp.com/portfolios')
            .then(res => res.json())
            .then(data => {
                setPortfolios(data)
                console.log('portfolio', data)
            })
    }, []);

    return [portfolios, setPortfolios]

};
export default UseDataP;