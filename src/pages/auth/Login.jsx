import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../config/authConfig";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/auth/slice";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Login = () => {
  const { instance } = useMsal();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailValue = data.get("email");

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    handleMicrosoftLogin(emailValue);
    console.log({
      email: emailValue,
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (emailError) {
      setEmailError("");
    }
  };

  const handleMicrosoftLogin = (email) => {
    instance.loginPopup({
      ...loginRequest,
      loginHint: email,
    })
    .then(response => {
      console.log(response);
      const accessToken = response.accessToken;
      const user = {email: response.account.username, username: response.account.name};
      console.log(user);
      const authData = {token: accessToken, user: user};
      dispatch(setAuth(authData));
      navigate("/");
      
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          height: "100vh",
          backgroundColor: "#263046",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/images/login/login.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "85%",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              background: "white",
              height: "100%",
              width: "100%",
              opacity: "0.5",
              zIndex: 0,
              borderRadius: "20px",
            }}
          ></Box>
          <Box padding="30px" zIndex="9999" position="fixed">
            <img src="/images/logo.png" alt="logo" width="" height="50px" />
          </Box>
          <Container
            component="main"
            maxWidth="xs"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: "50%",
              top: "19%",
              transform: "translate(-50%, 6%)",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                padding: 4,
                borderRadius: 2,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ mb: 2, color: "#263046", fontWeight: "700" }}
                >
                  User Login
                </Typography>
                <Avatar sx={{ m: 1, bgcolor: "#263046" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="BeiGene Work Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={handleEmailChange}
                    error={!!emailError}
                    helperText={emailError}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Login;
