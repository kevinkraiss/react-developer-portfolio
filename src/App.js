import { useState } from 'react'
import './App.css';
import Header from './components/header'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Page from './components/page'


function App() {

  const [pages] = useState([
    {name: 'Home'},
    {name: 'About'},
    {name: 'Projects'},
    {name: 'Resume'}
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <>
    <Header>
      <Navigation
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Navigation>
    </Header>
    <main>
      <Page currentPage={currentPage}></Page>
    </main>
      <Footer />



    </>
  );
}

export default App;
