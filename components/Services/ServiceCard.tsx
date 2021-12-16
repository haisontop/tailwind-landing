import React from 'react';

// interface serviceCardProp {
//     key: any;
//     title: string;
//     img: string;
//     body: any;
// }

const ServiceCard = (props) => {
    const { title, img, body } = props.service
    return (
        <div className='md:mb-10 mr-4 md:mx-0'>
            <img src={img} alt="" width="30%" className='md:hidden' />
            <h3 className="md:text-3xl text-2xl mb-5 mt-5">{title}</h3>
            <p className='md:w-96'>{body}</p>
        </div>
    );
};

export default ServiceCard;