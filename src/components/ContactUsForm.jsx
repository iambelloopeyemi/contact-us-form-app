
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

export default function ContactUsForm(props) {
 
  console.log(props);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async () => {
      try {
        const response = await axios.post(
          "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries"
        ); // Send the form data to the API endpoint
        console.log(response.data); // Log the API response
      } catch (error) {
        console.error(error);
        // Log any errors that occur
      }
    },
  });
  return (
    <>
      <Box
        component="form"
        className="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          required
          size="small"
          className="name input"
          id="name"
          name="name"
          label="Full name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          required
          size="small"
          className="email input"
          id="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Typography component="p" variant="h6">
          Subject
        </Typography>
        <TextField
          className="subject input"
          size="small"
          id="subject"
          name="subject"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />
        <Typography component="p" variant="h6">
          Message
        </Typography>
        <TextField
          required
          multiline
          rows={5}
          className="message input"
          id="message"
          name="message"
          placeholder="Enter your message here"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button
          className="button"
          color="primary"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
