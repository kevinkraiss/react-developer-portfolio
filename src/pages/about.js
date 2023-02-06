import profilePic from '../images/profile-pic.jpg'
import splash from '../images/splash.svg'


const About = () => {
    return (
        <>
            <h2>About</h2>
        <img className={'splash'} alt='my portfolio' src={splash}/>
            <section id="about">

            <div className="content-card">
                <div id="profile-container"><img id="profile-pic" alt="profile" src={profilePic} width="300"/>
                </div>
                <div id="description">
                <p>
                I am currently enrolled in a coding boot camp and I am excited to learn as much as I can during my course. 
                </p>
                <p>
                This page has links to projects that I am working on in class. Their associated repositories are available on GitHub. 
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit. Quam fuga optio ratione dignissimos similique commodi, accusantium minus. Architecto ullam vel cum eligendi quae corrupti a optio veritatis minima!
                </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default About