

const SmallProject = props => {
    const {
        projectArray = []
    } = props

    console.log(projectArray.map((projects) => projects.name))

    return (
        <div className="content-card">
            <div className="container2">
                {projectArray.map(
                    (Project) => (
                        <div className="box">
                                <a 
                                href={Project.href}
                                key={Project.name}
                                >
                                    <img alt='alt' src={Project.src}/>
                                </a>
                                <h4>{Project.name}</h4>
                        </div>
                    )
                )}
                    
            </div>
        </div>
    )
}

export default SmallProject