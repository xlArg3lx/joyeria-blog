import React from 'react';
import BlogPost from './BlogPost';

function BlogSection() {

    const posts = [
        {
            id: 1,
            title: 'Tendencias en joyería para esta temporada',
            excerpt: 'Descubre las tendencias más destacadas en joyería para esta temporada y cómo incorporarlas a tu estilo...',
            image: '/images/blog/mezidi-zineb--hO96v1o5TY-unsplash.jpg',
            date: '15 Abril, 2025',
            category: 'Tendencias',
            slug: 'tendencias-joyeria-temporada'
        },
        {
            id: 2,
            title: 'Cómo cuidar tus joyas para que luzcan siempre perfectas',
            excerpt: 'Guía completa con consejos prácticos para mantener tus joyas en perfecto estado y prolongar su vida útil...',
            image: '/images/blog/king-kong-HoBl6A2aZPA-unsplash.jpg',
            date: '10 Abril, 2025',
            category: 'Cuidados',
            slug: 'como-cuidar-joyas'
        },
        {
            id: 3,
            title: 'La fascinante historia de los diamantes',
            excerpt: 'Un recorrido por la historia de estas piedras preciosas que han cautivado a la humanidad durante siglos...',
            image: '/images/blog/sabrianna-XEyyCJKg4yI-unsplash.jpg',
            date: '5 Abril, 2025',
            category: 'Historia',
            slug: 'historia-diamantes'
        }
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center mx-auto">Nuestro Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {posts.map(post => (
                        <BlogPost key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;
