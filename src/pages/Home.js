import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Home = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">SongDay 🎵</Typography>
      </Toolbar>
    </AppBar>
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>La canción del día</Typography>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/ukWPR88H53Q?si=s922Jk7-c3UHP_HQ"
          title="Video de YouTube"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          allowFullScreen
        />
      </div>
    </Container>
  </>
);

export default Home;
