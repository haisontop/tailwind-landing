import React from 'react';
import BlogBody from '../components/Blog/BlogBody.jsx';
import BlogHeader from '../components/Blog/BlogHeader.jsx';
import Footer from "./../components/Footer.tsx"
const Blog = () => {
    return (
        <>
        <div className="bg-black text-white md:px-60">
            <BlogHeader></BlogHeader>
            <BlogBody></BlogBody>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Blog;