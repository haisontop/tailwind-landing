import React from 'react';
import SlugBottom from '../../components/BlogDetails/SlugBottom';
import SlugCollage from '../../components/BlogDetails/SlugCollage';
import SlugHeader from '../../components/BlogDetails/SlugHeader';
import SlugMid from '../../components/BlogDetails/SlugMid';
import SlugTop from '../../components/BlogDetails/SlugTop';


const slug = () => {
    return (
        <div className="bg-black md:px-16 text-white">
            <SlugHeader></SlugHeader>
            <SlugTop></SlugTop>
            <SlugMid></SlugMid>
            <SlugCollage></SlugCollage>
            <SlugBottom></SlugBottom>
        </div>
    );
};

export default slug;