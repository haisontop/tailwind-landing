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
        <div className='xl:mb-10 mr-4 xl:mx-0'>
            <img src={img} alt="" width="30%" className='xl:hidden' />
            <h3 className="xl:text-3xl text-2xl mb-5 mt-5">{title}</h3>
            <p className='xl:w-96'>{body}</p>
        </div>
    );
};

export default ServiceCard;