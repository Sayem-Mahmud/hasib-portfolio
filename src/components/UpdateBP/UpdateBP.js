import React, { useEffect, useRef, useState } from 'react';
import UseDataP from '../../hooks/UseDataP';
import useData from '../../hooks/useData';
import Hasib from '../Hasib/Hasib';
import { Link } from 'react-router-dom';

const UpdateBP = () => {
    const [portfolios, setPortfolios] = UseDataP();
    const [blogs, setBlogs] = useData();

    useEffect(() => {
        fetch('http://localhost:5000/portfolios')
            .then(res => res.json())
            .then(data => {
                setPortfolios(data)
                console.log('portfolio', data)
            })
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                console.log('portfolio', data)
            })
    }, []);

    const handleDeleteBlog = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        console.log(id);
        if (proceed) {
            const url = `http://localhost:5000/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json()
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('Blog deleted successfully')
                        }
                        const remainingUsers = blogs.filter(blog => blog._id !== id)
                        setBlogs(remainingUsers);
                    }))
        }

    }

    const handleDeletePortfolio = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        console.log(id);
        if (proceed) {
            const url = `http://localhost:5000/portfolios/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json()
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('Portfolio deleted successfully')
                        }
                        const remainingUsers = portfolios.filter(portfolio => portfolio._id !== id)
                        setPortfolios(remainingUsers);
                    }))
        }

    }


    return (
        <div>
            <Hasib></Hasib>
            <h1 style={{ color: 'black', fontSize: '30px', paddingTop: '90px', marginBottom: '20px' }}>Update/Delete Portfolios</h1>
            {
                portfolios.map((showP, index) =>
                    <div style={{ marginBottom: '3px', backgroundColor: '#396768' }} >
                        <h3 style={{ color: 'white', fontWeight: 400 }}>{showP.title}</h3>
                        <div>
                            <Link to={`/updateP/${showP._id}`} style={{ textDecoration: 'none' }}>
                                <button type="button" class="btn btn-primary">Update</button>
                            </Link>
                            <button type="button" class="btn btn-secondary m-2" onClick={() => handleDeletePortfolio(showP._id)}>
                                Delete</button>
                        </div>

                    </div>

                )
            }

            <h1 style={{ color: 'black', fontSize: '30px', paddingTop: '90px', marginBottom: '20px' }}>Update/Delete Blogs</h1>
            {
                blogs.map((showB, index) =>
                    <div className='bg-dark' style={{ marginBottom: '3px' }} >
                        <h3 style={{ color: 'white', fontWeight: 400 }}>{showB.title}</h3>
                        <div>
                            <Link to={`/updateB/${showB._id}`} style={{ textDecoration: 'none' }}>
                                <button type="button" class="btn btn-primary">Update</button>
                            </Link>
                            <button type="button" class="btn btn-secondary m-2" onClick={() => handleDeleteBlog(showB._id)}>Delete</button>

                        </div>

                    </div>

                )
            }
        </div >

    );
};


export default UpdateBP;