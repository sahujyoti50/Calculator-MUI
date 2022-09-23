import { Title } from "@mui/icons-material";
import { Button, Container, InputLabel, Stack } from "@mui/material";
import React from "react";
function App() {
  return (
    <Container maxWidth="sm">
      <form>
        <InputLabel>My Calculator</InputLabel>
        <InputLabel>10*10</InputLabel>
       <InputLabel>100</InputLabel>
      </form>
      <Stack spacing={1} marginTop={2}>
        <Stack direction="row">
          <Button variant="outlined" color="warning">
            1
          </Button>
          
          <Button variant="outlined" color="warning">
            2
          </Button>
          <Button variant="outlined" color="warning">
            3
          </Button>
          <Button variant="outlined" color="warning">
            4
          </Button>
        </Stack>
        <Stack direction="row">
          <Button variant="outlined" color="success">
            5
          </Button>
          <Button variant="outlined" color="success">
            6
          </Button>
          <Button variant="outlined" color="success">
            7
          </Button>
          <Button variant="outlined" color="success">
            8
          </Button>
        </Stack>
        <Stack direction="row">
          <Button variant="outlined">
            9
          </Button>
          <Button variant="outlined">
            0
          </Button>
          <Button variant="outlined">
            +
          </Button>
          <Button variant="outlined">
            -
          </Button>
        </Stack>
        <Stack direction="row">
          <Button variant="outlined" color="secondary">
            *
          </Button>
          <Button variant="outlined" color="secondary">
            /
          </Button>
          <Button variant="outlined" color="secondary">
            %
          </Button>
          <Button variant="outlined" color="secondary">
            ^
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
