import { ReactComponent as Hero } from '../assets/Hero.svg'
import { ReactComponent as Athelete } from '../assets/Athelete.svg'
import { ReactComponent as OnTheGo } from '../assets/OnTheGo.svg'
import { Container, Grid, Typography } from '@mui/material'

const Banner = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h1">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'chocolate',
                fontSize: '3.5rem',
                lineHeight: '1.5',
                letterSpacing: '-0.05em',
                mb: '0.5rem',
                display: 'inline-block',
              }}
            >
              Drib..Dribb...Dribble!
            </Typography>
            Everything about <br />
            Basketball in <br />
            One place
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Hero style={{ width: '100%', height: '100vh' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Athelete style={{ width: '100%', height: '100vh' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h2">
            <span style={{ color: 'chocolate' }}>Know more</span>
            <br />
            about your favourite players just on Dribble!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h2">
            <span style={{ color: 'chocolate' }}>Browse</span>
            <br />
            Anywhere Anytime
            <br />
            On the go
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <OnTheGo style={{ width: '100%', height: '100vh' }} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Banner
