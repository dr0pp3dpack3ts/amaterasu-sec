import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Amaterasu Security
      </p>
      <h2>This is just the icing on the cake...</h2>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<TwitterOutlined />}
          href="https://twitter.com/jannikbuschke"
          target="_blank"
        >
          Twitter
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/dr0pp3dpack3ts"
          target="_blank"
        >
          Github
        </Button>

        <Button type="primary" size="large">
          <Link to="/docs/write-ups/">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
