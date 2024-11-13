import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Doctor() {

  const {speciality} =useParams()
  const {doctors} =useContext(AppContext)

  return (
    <div>
<p>Browse through the Doctors Specialist.</p>
  <div>
    <div>
      <p>General physician</p>
      <p>Gynecologist</p>
      <p>Dermatologist</p>
      <p>Pediatricians</p>
      <p>Neurologist</p>
      <p>Gastroenterologist</p>
    </div>

<div></div>

  </div>

    </div>
  )
}

export default Doctor