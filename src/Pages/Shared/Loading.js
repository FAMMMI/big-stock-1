import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <progress class="progress w-56"></progress>
        </div>
    );
};

export default Loading;