import resPlc from '../images/resume-placeholder.jpeg'

const Resume = () => {
    return(
        <>
            <h2>Resume</h2>
            <section>
            <p>This placeholder resume will be updated shortly.</p>
            
            <a 
            href={resPlc} download="placeholderResume" target='_blank'
            rel="noreferrer"
            className='ghLink'
            >
                <button className="dlBtn">
                Download Resume
                </button>
            </a>

            <img alt='resume placeholder' src={resPlc}/>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit. Quam fuga optio ratione dignissimos similique commodi, accusantium minus. Architecto ullam vel cum eligendi quae corrupti a optio veritatis minima!</p>
            </section>
        </>
    ) 
}

export default Resume