import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const About = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Fernando Leano" src="https://media.licdn.com/dms/image/C5603AQHqY-uKrifwQg/profile-displayphoto-shrink_800_800/0/1657229426674?e=1679529600&v=beta&t=fCg_4i0Wvv73siLyQgr03X61sO3iE6qxupE2KUbynZo" />
      </Stack>
        <h1>Hi my name is Fernando Leano the Developer of this app</h1>
        <h2>I'm a Fullstack developer and I love coding in this app it's a simple todo app</h2>
    </div>
  )
}

export default About
