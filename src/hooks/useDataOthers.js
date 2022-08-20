import React, { useEffect, useState } from 'react';

const UseDataOthers = () => {
    const [others, setOthers] = useState([])

    useEffect(() => {
        fetch('https://dry-peak-89227.herokuapp.com/others')
            .then(res => res.json())
            .then(data => {
                setOthers(data)
                console.log('othersss', data)
            })
    }, []);

    return [others, setOthers]

};
export default UseDataOthers;