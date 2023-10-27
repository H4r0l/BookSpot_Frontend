import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response.data.token; // Assuming the token is returned in the response
      localStorage.setItem("token", token); // Save the token to localStorage
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Card className="w-96 pt-12">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          name="username"
          label="Username"
          size="lg"
          onChange={handleChange}
          value={formData.username}
        />
        <Input
          name="password"
          label="Password"
          size="lg"
          onChange={handleChange}
          value={formData.password}
        />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>

      <CardFooter className="pt-0">
        <Button onClick={handleSubmit} variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default Login;
