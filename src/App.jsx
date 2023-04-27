import ContactUsForm from "./components/ContactUsForm";
import FormHeader from "./components/FormHeader";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  
  return (
    <Container component="main" fixed>
      <Box component="main" className="container" >
        <FormHeader />
        <ContactUsForm />
      </Box>
    </Container>
  );
}

export default App;
