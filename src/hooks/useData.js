import React, { useEffect, useState } from 'react';

const useData = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }, []);



    return [blogs, setBlogs]

};

export default useData;