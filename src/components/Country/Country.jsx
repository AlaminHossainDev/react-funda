import React from 'react';

const Country = ({country}) => {
    const {name} = country;
    console.log(country)
    return (
        <div>
            <h1>Name : {name.common} </h1>

        </div>
    );
};

export default Country;