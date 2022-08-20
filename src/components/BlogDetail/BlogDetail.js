import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BlogDetail.css'

const BlogDetail = (props) => {
    const { blog } = props;
    const { _id, id, img1, article1, title, date } = blog;

    return (
        <div class="col-sm-6 col-md-6 col-lg-4 my-5 text-white bg-black pb-2 pt-2 pb-sm-0 pt-sm-0  hov " >
            <div className="text-white hovNot box " style={{ borderRadius: '10px 10px 10px 10px', margin: 'auto' }} >

                < img src={img1} class="image " style={{
                    borderRadius: '10px 10px 0px 0px'
                }} alt="..." />

                <div className="hovN" style={{ backgroundColor: '#3A3939', borderRadius: '0 0 10px 10px' }} >
                    <h4 style={{
                        fontWeight: 200, fontSize: '20px'
                    }}>{title}</h4>
                    <p class="card-text" style={{
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        width: '100%', fontSize: '12px',
                        textTransform: 'uppercase', padding: '0 5px',
                        color: '#ccc'
                    }}>{article1}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                        <h4 className="hovN" style={{ fontSize: '15px', fontWeight: 200, marginTop: '5px', height: '20px' }}><i class="fa fa-calendar" aria-hidden="true"></i> {date}</h4>
                        <Link to={`/blog/${_id}`} ><a href="#" class="btn btn-secondary mb-3">READ BLOG</a></Link>
                    </div>
                </div>
            </div>
        </div >


    );
};

export default BlogDetail;