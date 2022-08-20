import React from 'react';
import './BlogReadFull.css';
import Header from '../Header/Header';
const BlogReadFull = (props) => {
    const { _id, id, title,img1,img2,img3,img4,img5,img6,img7,img8, date, article1, article1bold, article2, article2bold, article3, article3bold, article4, article4bold, article5, article5bold, article6, article6bold, article7, article7bold, article8, article8bold } = props.showblog
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: '#EAEBEE' }}>
                {/* <h1>{id}</h1> */}
                <h2 style={{ color: 'black', fontWeight: 500, fontSize: '60px' }}>{title}</h2>
                <img src={img1} style={ img1 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
                <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{article1}</p>
                <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{article1bold}</p>
                <img src={img2} style={ img2 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
                <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{article2}</p>
                <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{article2bold}</p>
                <img src={img3} style={ img3 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
                <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{article3}</p>
                <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{article3bold}</p>
                <img src={img4} style={ img4 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
                <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{article4}</p>
                <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{article4bold}</p>
                <img src={img5} style={ img5 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
                <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{article5}</p>
                <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{article5bold}</p>
                <img src={img6} style={ img6 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
                <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{article6}</p>
                <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{article6bold}</p>
                <img src={img7} style={ img7 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
                <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{article7}</p>
                <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{article7bold}</p>
                <img src={img8} style={ img8 ?  { width: '50%', height: '50%' }:{ display:'hidden'} } />
                <p style={{ width: '90%', textAlign: 'left', fontWeight: 400, color: 'black', margin: '20px auto' }}>{article8}</p>
                <p style={{ width: '85%', margin: 'auto', fontWeight: 'bolder', color: 'black', textAlign: 'left' }}>{article8bold}</p>
              
            </div>
        </div>
    );
};

export default BlogReadFull;