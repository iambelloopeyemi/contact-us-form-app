import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { validationSchema } from "./Validation";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Form() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values, actions) => {
      try {
        setLoading(!loading);
        const response = await axios.post(
          "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries"
        );
        setData(JSON.stringify(values, null, 2));
        console.log(JSON.stringify(values, null, 2));
        alert(JSON.stringify(values, null, 2));
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(loading);
      }
      actions.resetForm();
    },
  });
  return (
    <>
      <Box
        component="form"
        className="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        onSubmit={formik.handleSubmit}
      >
        {data && (
          <Typography component="p" variant="body2">
            Your message was submitted successfully
          </Typography>
        )}
        {error && (
          <Typography component="p" variant="body2">
            Your message submission was not successful
          </Typography>
        )}
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
          color="primary"
          variant="contained"
          type="sunmit"
          sx={{ mt: 2 }}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </Box>
    </>
  );
}
