import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="titleGroup">
    <h1 className="title">Why Doubt Your-Self?</h1>
    <Link to="/login" className="subtitle">LOG IN </Link> to search your word!
</div>
  )
}

export default Welcome