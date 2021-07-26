// DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import MainButton from './MainButton'

// IMAGES
import logo from "../images/logo.svg"

// button: get started --> If user logged in, e.g. acces token im local storage, dann direkt auf das dashboard routen.
// wenn user nicht logged in, dann auf login routen

export default function Home() {
  return (
    <div className="main-container">
      <img src={logo} className="home-logo" alt="The Scores Saver Logo: A die showing the number five ontop of two crossed measures with the text 'Scores Saver' beneath" />
      <h3 className="subheader">Keep track of your tabletop scores. <br></br>Anytime, anywhere!</h3>
      <Link to="/login">
        <MainButton btnText="get started" />
      </Link>
    </div>
  )
}
