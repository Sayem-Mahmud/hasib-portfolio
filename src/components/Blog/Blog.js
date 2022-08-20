import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useData from '../../hooks/useData';
import BlogDetail from '../BlogDetail/BlogDetail';
import './Blog.css';

const Blog = () => {
    const [blogs] = useData();

    return (
        <div id="section-blog">
            <div style={{ backgroundColor: 'black', paddingTop: '40px' }}>
                <h2 style={{
                    position: 'relative', color: 'white', fontFamily: 'inherit',
                    fontWeight: 150, paddingTop: '20px', fontSize: '40px'
                }}>Featured <span style={{ fontWeight: 800 }}>Blog</span></h2>

                <div class="ress">
                    {
                        blogs.length === 0 ?
                            <Spinner animation="border" className="mx-auto mb-2" /> :
                            <div class="row">
                                {
                                    blogs.map(blog => <BlogDetail key={blog.id}
                                        blog={blog}></BlogDetail>)
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;