import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: '#fafafa',
        paddingY: '1rem',
        textAlign: 'center',
        width: '100%',
        zIndex: '1',
      }}
    >
      <Typography variant="h6" component="p">
        <span>Dribble</span> &copy; All rights reserved
      </Typography>
    </Paper>
  )
}

export default Footer
