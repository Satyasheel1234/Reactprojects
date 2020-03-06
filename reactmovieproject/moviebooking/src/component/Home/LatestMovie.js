import React from 'react';

const ListView = (props) => {
    const renderView = ({list}) => {
        if(list){
            return list.map((data,index) => {
                return(
                    <div key={index}>
                    <h1>{data.name}</h1>
                    <h1>{data.type}</h1>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            {renderView(props)}
        </div>
    )
}

export default ListView