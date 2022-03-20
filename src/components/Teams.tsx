import React from 'react'
import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

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
  }, [])
  const requestTeams = async () => {
    const response = await fetch('https://www.balldontlie.io/api/v1/teams')
    const data = await response.json()
    setTeams(data.data)
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: '5rem',
        marginBottom: '5rem',
      }}
    >
      <Typography variant="h2" component="h2">
        Teams
      </Typography>
      <Divider
        variant="fullWidth"
        sx={{
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      />
      <Grid container spacing={2}>
        {teams &&
          teams.map(
            ({ name, abbreviation, city, conference, division, id }) => (
              <Grid item key={id} xs={12} md={6} lg={4} xl={3}>
                <Paper>
                  <Typography variant="h4" component="h4">
                    {name}({abbreviation})
                  </Typography>
                  <Typography variant="h5" component="h5">
                    {city}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {conference} {division}
                  </Typography>
                </Paper>
              </Grid>
            )
          )}
      </Grid>
    </Container>
  )
}

export default Teams
