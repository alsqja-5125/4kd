import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('ID'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box sx={{ flexGrow: 1}}>
          <AppBar position="fixed">
             <Toolbar>
              <Typography variant="h5" component="h1"  sx={{ flexGrow: 1, textAlign: 'center'}}>
                Bring Us
              </Typography>
              
            </Toolbar>
          </AppBar>
        </Box>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

      
            <LockOutlinedIcon sx={{ mt: 7 }} />

          <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="ID"
              label="ID"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="ID 저장"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href="로그인 후 페이지"
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="http://192.168.35.79:3002" variant="body2">
                  ID/PW 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://192.168.35.79:3001" variant="body2">
                  {"회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
