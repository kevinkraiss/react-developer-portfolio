import { useEffect } from 'react'

const Navigation = props => {

    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props
    // const [currentPage, setCurrentPage] = useState('home')
    useEffect(() => {
        document.title = currentPage.name
    }, [currentPage])
    return (
        <nav>
            {/* <button onClick={() => setCurrentPage('home')}>Home</button>
            <button onClick={() => setCurrentPage('project')}>Projects</button>
            <button onClick={() => setCurrentPage('about')}>About</button>
            <button onClick={() => setCurrentPage('resume')}>Resume</button> */}

            <ul className='flex-row'>
                {pages.map((Page) => (
                    <li
                    className={`${currentPage.name === Page.name && 'navActive'}`}
                    key={Page.name}
                    >
                        <button
                            onClick={() => setCurrentPage(Page)}
                        >
                            {Page.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation