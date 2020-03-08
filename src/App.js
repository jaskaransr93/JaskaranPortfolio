import React, { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import Intro from './containers/Intro/Intro';
import About from './components/About/About';
import Sidebar from './components/UI/Sidebar/Sidebar';

import './App.scss';
import Experience from './components/Experience/Experience';

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlePageChange = number => {
    setCurrentPage(number);
  }

  const getPagesNumber = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }

    return [...pageNumbers];
  }

  const pagesNumbers = getPagesNumber();

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);


  return (
    <div className="App">
      <Header openSidebar={openSidebar} />
      {/* <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}> */}
          <Intro setCurrentPage={setCurrentPage} />
          <About />
          <Experience />
      {/* </ReactPageScroller> */}
      <Sidebar closeSidebar={closeSidebar} show={isSidebarOpen}  />
    </div>
  );
}

export default App;
