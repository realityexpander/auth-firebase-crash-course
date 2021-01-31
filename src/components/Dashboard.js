import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


export default function Dashboard() {
  const { logout, currentUser } = useAuth()
  const history = useHistory()
  const [error, setError] = useState("")

  async function handleLogout(e) {
    e.preventDefault()
  
    try {
      setError("")
      await logout()
      history.push("/login")
    } catch {
      setError("Error logging out.")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>{currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div> 
      </Card> 
    </>
  )
}
