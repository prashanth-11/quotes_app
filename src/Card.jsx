import React from 'react'

const Card = (props) => {

    const { data } = props;

    return (
        <div>
            <div className=' mt-2 p-5 bg-info text-warning w-5 h-30' >
                <h4>Quote : {data.Quote}</h4>
                <p>Meaning: {data.name}</p>
                {/* <p>Plot no: {data.plotNo} </p>
                <p>Address: {data.address}</p>
                <p>State : {data.state}</p>
                <p>Contact : {data.contact}</p> */}
            </div>
        </div>
    )
}

export default Card;