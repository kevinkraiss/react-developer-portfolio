import Container from './container'
import Home from '../pages/home'
import About from '../pages/about'
import Projects from '../pages/projects'
import Resume from '../pages/resume'

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      default:
        return <Home />;
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
