import React from 'react';


const Rank = ( {name, entries} ) =>{
    return (
        <div>
            <div className = 'white f3'>
                {`${name} Your current entry count is...`}
                <div className = 'white f2'>
                    {entries}
                </div>
            </div>
        </div>
    );
};

export default Rank;