import {GoMarkGithub} from 'react-icons/go'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'

const footer = props => {
    return (
        <footer>
            <p className="icons">
                <a href='https://github.com/kevinkraiss'>
                <GoMarkGithub/>
                </a>
                <a href='https://www.linkedin.com/'>
                <BsLinkedin/>
                </a>
                <a href='https://twitter.com/kevbotbeats'>
                <BsTwitter/>
                </a>
            </p>

        </footer>
    )
}

export default footer