import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUnauthenticated } from "../redux/AuthSlices";
import Login from "./Login";
import Logout from "./Logout";
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

const AuthModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleSignUp = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    dispatch(setUnauthenticated());
    localStorage.removeItem("token");
    setIsSuccess(false);
    setShowLogin(true);
  };

  const handleLoginSuccess = (token) => {
    dispatch(setAuthenticated(token));
    localStorage.setItem("token", token);
    setIsSuccess(true);
    setShowLogin(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            {showLogin ? "Sign In" : "Sign Up"}
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          {showLogin ? (
            <Login onSuccess={handleLoginSuccess} />
          ) : (
            <SignUp onSuccess={handleLoginSuccess} />
          )}
        </CardBody>
        <CardFooter className="pt-0">
          {showLogin ? (
            <>
              <Button onClick={handleLogin} variant="gradient" fullWidth>
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
                  onClick={handleSignUp}
                >
                  Sign up
                </Typography>
              </Typography>
            </>
          ) : (
            <Button onClick={handleLogout} variant="gradient" fullWidth>
              Sign Out
            </Button>
          )}
          {isSuccess && (
            <Typography variant="small" className="mt-6 flex justify-center">
              Login successful!
            </Typography>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthModal;
    
