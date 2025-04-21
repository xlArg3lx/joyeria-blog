import React from 'react';
import Header from '../components/layouts/Header.jsx';
import Footer from '../components/layouts/Footer.jsx';
import ContactHero from '../components/contact/ContactHero.jsx'
import ContactInfo from '../components/contact/ContactInfo.jsx'
import ContactForm from '../components/contact/ContacForm.jsx'

function Contact() {
    return (
        <>
            <Header />
            <main className="pt-16"> {/* pt-16 para compensar el header fijo */}
                <ContactHero />
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-10">
                            <ContactInfo />
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Contact;
