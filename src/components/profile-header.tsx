import { FC } from "react"
import Card from 'react-bootstrap/Card';


export const ProfileHeader: FC = (): React.ReactNode  => {

  return (
    <div>TODO header 
       <div className="page-header">
        <h1>Example page header <small>Subtext for header</small></h1>
      </div>
      <Card>test</Card>
      <div className="hero-unit">
  <h1>Heading</h1>
  <p>Tagline</p>
  <p>
    <a className="btn btn-primary btn-large">
      Learn more
    </a>
  </p>
</div>
    </div>
   
  )
}
