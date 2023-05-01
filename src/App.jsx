import Form from "./components/Form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Box component="main" className="container">
      <Box component="header" className="header">
        <Typography component="h1" variant="h4">
          Contact Us
        </Typography>
      </Box>
      <Form />
    </Box>
  );
}

export default App;
