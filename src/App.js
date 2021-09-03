import React, {useState} from 'react'
import { Grid, Container, Paper, Avatar,Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'


const useStyles = makeStyles(theme=>({
  root: {
    backgroundColor: '#E5E5E5',
    height: '100vh'
  },
  container: {
    opacity: '0.8',
    height: '60%',
    marginTop: theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2))]: {
        marginTop: 0,
        width: '100%',
        height: '100%'
      }
    
  },
  div: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#2D4838'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const App = () => {
  const [body, setBody] = useState({ correo: '', password: ''})
  const classes = useStyles()

  const handleChange = e => {
    console.log(e.target.value)
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    console.log(body)
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
        <div className={classes.div}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />

          </Avatar>
          <Typography component='h1' variant='h5'>INICIAR SESIÓN
          </Typography>
          <form className=''>
            <TextField 
              fullWidth
              autoFocus
              color='primary'
              margin='normal'
              variant='outlined'
              name='Correo Electronico'
              label={body.correo}
              onChange={handleChange}
            />
            <TextField 
              fullWidth
              type='password'
              color='primary'
              margin='normal'
              variant='outlined'
              name='password'
              label={body.password}
              onChange={handleChange}
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.button}
              onchange={() => onSubmit() }
            >
              Iniciar Sesión
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  )
}

export default App

