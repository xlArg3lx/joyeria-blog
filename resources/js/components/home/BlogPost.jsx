import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ post }) {
    const { image, category, date, title, excerpt, slug } = post;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-52 object-cover"
            />
            <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{date} | {category}</div>
                <h3 className="text-xl font-normal text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <Link
                    to={`/blog/${slug}`}
                    className="text-gold-600 hover:text-gold-700 transition duration-300 text-sm"
                >
                    Leer más
                </Link>
            </div>
        </div>
    );
}

export default BlogPost;
