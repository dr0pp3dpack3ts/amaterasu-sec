import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, LinkedinOutlined  } from '@ant-design/icons'
import amaterasu from '../images/amaterasusmall.jpg'



const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'crimson',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Amaterasu Security    
        <div>
          <img src={amaterasu}/>
        </div>
      </p>
      <h2>The great sun of the kami.</h2>
    
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<LinkedinOutlined />}
          href="https://linkedin.com/in/alvinl-li"
          target="_blank"
        >
          LinkedIn
        </Button>
        
        <Button type="primary" size="large">
        onClick={() => window.location = 'mailto:contactme@amaterasu-sec.com'}>Contact Me
     
        </Button>
        
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/dr0pp3dpack3ts/PenTestReports"
          target="_blank"
        >
          PenTest Reports
        </Button>

        <Button type="primary" size="large">
          <Link to="/writeups/">Write-Ups</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
