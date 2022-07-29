import React from 'react'

import { About, Blog, Featured, Footer, Header, Jobs, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Jobs />
            <Featured />
            <Testimonial />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;