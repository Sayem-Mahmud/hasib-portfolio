import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import BlogReadFull from '../BlogReadFull/BlogReadFull';
import './BloagRead.css';


const BloagRead = () => {
    const { blogId } = useParams();
    const [blogs, setBlogs] = useData();
    // console.log(blogId);
    console.log(blogs)
    const readingBlog = blogs.filter(blog => blog._id == blogId)
    console.log(readingBlog);
    return (
        <div>

            {
                readingBlog.map(showblog => <BlogReadFull key={showblog._id}
                    showblog={showblog}></BlogReadFull>)
            }
        </div>
    );
};

export default BloagRead;