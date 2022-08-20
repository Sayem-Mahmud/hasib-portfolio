import React, { useEffect, useState } from 'react';

const UseDataOthers = () => {
    const [others, setOthers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/others')
            .then(res => res.json())
            .then(data => {
                setOthers(data)
                console.log('othersss', data)
            })
    }, []);

    return [others, setOthers]

};
export default UseDataOthers;