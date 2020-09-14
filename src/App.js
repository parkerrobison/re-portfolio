import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer';

// AS AN employer looking for candidates with experience building single-page applications
// I WANT to view a potential employee's deployed React portfolio of work samples
// SO THAT I can assess whether they're a good candidate for an open position

// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

function App() {
  const [currentPage, setCurrentPage]= useState('')
  const handleSubmit = (page) => {
       console.log(page)
       setCurrentPage(page)
  }
  return (
    <div>
      
      <Header 
        handleSubmit={handleSubmit}></Header>
      <main>
        {currentPage === 'Contact' ?   <ContactForm />:
        currentPage === 'Portfolio' ? <Portfolio />:
        currentPage === 'Resume' ? <Resume />:
        <About />}        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
