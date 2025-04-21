import React from 'react';
import Header from '../components/layouts/Header';
import Hero from '../components/home/Hero';
import Collections from '../components/home/Collection';
import BlogSection from '../components/home/BlogSection';
import Footer from '../components/layouts/Footer';

function Home() {
    return (
        <>
            <Header />
            <main className="pt-16"> {/* pt-16 para compensar el header fijo */}
                <Hero />
                <Collections />
                <BlogSection />
            </main>
            <Footer />
        </>
    );
}

export default Home;
