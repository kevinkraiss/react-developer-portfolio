import Container from './container'
import Contact from '../pages/contact'
import About from '../pages/about'
import Projects from '../pages/projects'
import Resume from '../pages/resume'

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      {/* <h2>{currentPage.name}</h2> */}
      <Container>{renderPage()}</Container>
    </section>
  );
}
export default Page;
