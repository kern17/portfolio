import { FC } from "react"
import Card from 'react-bootstrap/Card';


export const ProfileHeader: FC = (): React.ReactNode  => {

  return (
    <div className="container my-5">TODO header 
      <div className="row">
        <div className="col-lg-8">
          <h1>Example page header <small>Subtext for header</small></h1>
        </div>
        <div className="col-lg-4">
          <img id="profileImg" className="rounded-circle" src="assets/patrick.kern.jpg" alt="profilefoto.jpg"/>
        </div>

      </div>
        
      <div>
        {/* <img src="assets/patrick.kern.jpg"/> */}
      </div>
      <Card>test</Card>
      <div className="hero-unit">
    </div>
  </div>
   
  )
}
