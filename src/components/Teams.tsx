import React from 'react'
import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useRecoilState } from 'recoil'
import { allTeams } from '../recoil/atoms/teams'

const Teams = () => {
  const [teams, setTeams] = useRecoilState(allTeams)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const requestTeams = async () => {
      const response = await fetch('https://www.balldontlie.io/api/v1/teams')
      const data = await response.json()
      setTeams(data.data)
      setLoading(false)
    }
    requestTeams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        {!loading &&
          teams &&
          teams.map(
            ({ name, abbreviation, city, conference, division, id }) => (
              <Grid item key={id} xs={12} md={6} lg={4} xl={3}>
                <Paper
                  sx={{
                    backgroundColor: '#fafafa',
                    borderRadius: '1rem',
                  }}
                >
                  <img
                    src="https://picsum.photos/id/237/200/300"
                    alt="Hello"
                    style={{
                      padding: '0rem 0rem 2rem 0rem',
                      width: '100%',
                      height: '15rem',
                      borderRadius: '1rem',
                    }}
                  />
                  <Container sx={{ p: '0rem 0rem 2rem 0rem' }}>
                    <Typography variant="h4" component="h4">
                      {name}({abbreviation})
                    </Typography>
                    <Typography variant="h5" component="h5">
                      {city}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {conference} {division}
                    </Typography>
                  </Container>
                </Paper>
              </Grid>
            )
          )}
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={() => setLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  )
}

export default Teams
