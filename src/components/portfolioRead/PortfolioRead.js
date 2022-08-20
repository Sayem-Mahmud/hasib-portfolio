import React from 'react';
import { useParams } from 'react-router-dom';
import UseDataP from '../../hooks/UseDataP';
import PortfolioReadFull from '../PortfolioReadFull/PortfolioReadFull';
import './portfolioRead.css'

const PortfolioRead = () => {
    const { portfolioId } = useParams();
    const [portfolios, setPortfolios] = UseDataP();


    const readingPortfolio = portfolios.filter(portfolio => portfolio._id == portfolioId)
    console.log(readingPortfolio);
    return (
        <div>

            {
                readingPortfolio.map(showportfolio => <PortfolioReadFull key={showportfolio._id}
                    showportfolio={showportfolio}></PortfolioReadFull>)
            }
        </div>
    );
};

export default PortfolioRead;