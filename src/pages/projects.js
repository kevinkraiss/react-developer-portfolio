import { useState } from 'react'

import BigProject from '../components/bigProject';
import SmallProject from '../components/smallProject';
import Container from '../components/container';

// import plc from '../images/placeholder.png'
import devq from '../images/devq.png'
import pwsg from '../images/pwsg.png'
import mff from '../images/mff.png'
import wdb from '../images/wdb.png'
import wds from '../images/wds.png'
import tpg from '../images/tpg.png'

const Projects = () => {

  const [projectArray] = useState(
    [
        {
            name: 'Developer Quiz',
            href: 'https://kevinkraiss.github.io/developer-quiz/',
            src: devq,
            gh: 'https://github.com/kevinkraiss/developer-quiz'
        },
        {
            name: 'Mood for Food',
            href: 'https://kevinkraiss.github.io/mood-for-food/',
            src: mff,
            gh: 'https://github.com/kevinkraiss/mood-for-food'
        },
        {
          name: 'Weather Dashboard',
          href: 'https://kevinkraiss.github.io/forecast-dashboard/',
          src: wdb,
          gh: 'https://github.com/kevinkraiss/forecast-dashboard'
        },
        {
          name: 'Pre-Work Study Guide',
          href: 'https://kevinkraiss.github.io/prework-study-guide/',
          src: pwsg,
          gh: 'https://github.com/kevinkraiss/prework-study-guide'
        },
        {
          name: 'Workday Scheduler',
          href: 'https://kevinkraiss.github.io/work-day-scheduler/',
          src: wds,
          gh: 'https://github.com/kevinkraiss/work-day-scheduler'
        },
        {
          name: 'Team Profile Generator CLI',
          href: 'https://github.com/kevinkraiss/team-profile-generator-cli',
          src: tpg,
          gh: 'https://github.com/kevinkraiss/team-profile-generator-cli'
        },
    ])

    const [currentProj, setCurrentProj] = useState(projectArray[0])

    return(
      <>
        <h2>Projects</h2>
        <p>Below are a selection of recent projects I have created in class. Click on a photo to open the application. Links to the GitHub repositories are included as well.</p>
        <Container>
        <BigProject/>
        <SmallProject
        projectArray={projectArray}
        setCurrentProj={setCurrentProj}
        currentProj={currentProj}
        >
        </SmallProject>
        </Container>
      </>  
    ) 
}

export default Projects