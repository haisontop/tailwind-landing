import React from 'react';

const SlugCollage = () => {
    return (
        <div className="grid grid-cols-2 gap-24 mt-32 md:px-10">
            <div className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80" width="70%" alt="" />
            </div>
            <div className="text-center">
            <img src="https://jooinn.com/images/men-4.jpg" width="80%" className="my-20"  alt="" />
            </div>
            
        </div>
    );
};

export default SlugCollage;