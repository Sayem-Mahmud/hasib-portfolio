import React from 'react';
import { Spinner } from 'react-bootstrap';
import UseDataP from '../../hooks/UseDataP';
import PortfolioDetail from '../PortfolioDetail/PortfolioDetail';
import './Portfolio.css'

const Portfolio = () => {
    const [portfolios, setPortfolios] = UseDataP();
    console.log(portfolios)
    return (
        <div id="section-portfolio" className="bg-black py-5">
            <h2 className="pb-5">Featured <strong>Portfolio</strong></h2>
            <div>
                {
                    portfolios.length === 0 ?
                        <Spinner animation="border" className="mx-auto mb-2" /> :
                        <div className="paddi">
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {
                                    portfolios.map(portfolio => <PortfolioDetail key={portfolio.id}
                                        portfolio={portfolio}></PortfolioDetail>)
                                }
                            </div>
                        </div>
                }
            </div>
        </div >
    );
};

export default Portfolio;

