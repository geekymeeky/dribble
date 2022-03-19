import React from 'react'
import { useState, useEffect } from 'react'

interface Team {
  id: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
}

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([])
  useEffect(() => {
    requestTeams()
  }, [teams])
  const requestTeams = async () => {
    const response = await fetch('https://www.balldontlie.io/api/v1/teams')
    const data = await response.json()
    setTeams(data.data)
  }
  return (
    <section>
      <h2>Teams</h2>
      <div>
        {teams &&
          teams.map(
            ({ name, abbreviation, city, conference, division, id }) => (
              <div key={id}>
                <h3>
                  {name}({abbreviation})
                </h3>
                <h4>{city}</h4>
                <h4>
                  {conference} {division}
                </h4>
              </div>
            )
          )}
      </div>
    </section>
  )
}

export default Teams
