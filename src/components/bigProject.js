import tbn from '../images/bn.png'


const BigProject = props => {
    return (
        <div className="content-card">
            <div className="container1">
                <div className="box">
                    <a href="https://book-nook.herokuapp.com/login"> 
                        <img alt="book nook website thumb" src={tbn}/>
                    </a>
                    <h3>Book || Nook</h3>
                    <a className='ghLink' href="https://github.com/Krenbot/book-nook">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}

export default BigProject