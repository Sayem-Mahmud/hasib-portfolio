import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioDetail.css';
const PortfolioDetail = (props) => {
    const { portfolio } = props;
    const { _id, id, img1, title, role } = portfolio;
    return (
        <div>
            <div class="col">
                <div class="card w-100 mx-auto bg-black text-white">
                    <img src={img1} style={{
                        height: '350px'
                    }} alt="..." />
                    <Link to={`/portfolio/${_id}`} style={{ textDecoration: 'none' }}>
                        <div className="h4 ">{title} <i class="fa fa-arrow-circle-right " aria-hidden="true"></i></div>
                    </Link>

                    <div className="catN hovNew">{role}</div>
                </div>
            </div>
        </div >
    );
};

export default PortfolioDetail;