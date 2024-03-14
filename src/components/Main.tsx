import React from 'react';

const Main = () => {
    const test = true
    if (test) throw new Error("Main fail");
    else {
        return (
            <main className='contetnt'>
                Main
            </main>
        );
    }
    
};

export default Main;