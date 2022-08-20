import React from 'react';
import './PortfolioReadFull.css';

const PortfolioReadFull = (props) => {
    const { _id, id, title, img1,img2,img3,img4,img5,img6,img7,img8, description1, description2, description3, description4, description5, description6, description7, description8,
        description1bold, description2bold, description3bold, description4bold, description5bold, description6bold, description7bold, description8bold
    } = props.showportfolio
    return (
        <div style={{ backgroundColor: '#EAF8FA' }}>
            <h2 style={{ color: 'black', fontWeight: 500, fontSize: '60px' }}>{title}</h2>
            <img src={img1} style={ img1 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
            <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{description1}</p>
            <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{description1bold}</p>
            <img src={img2} style={ img2 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
            <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{description2}</p>
            <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{description2bold}</p>
            <img src={img3} style={ img3 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
            <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{description3}</p>
            <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{description3bold}</p>
            <img src={img4} style={ img4 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
            <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{description4}</p>
            <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{description4bold}</p>
            <img src={img5} style={ img5 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
            <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{description5}</p>
            <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{description5bold}</p>
            <img src={img6} style={ img6 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
            <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{description6}</p>
            <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{description6bold}</p>
            <img src={img7} style={ img7 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
            <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{description7}</p>
            <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{description7bold}</p>
            <img src={img8} style={ img8 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
            <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{description8}</p>
            <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{description8bold}</p>
            {/* <img src={img} style={{ width: '50%', height: '50%' }} /> */}
        </div>
    );
};

export default PortfolioReadFull;