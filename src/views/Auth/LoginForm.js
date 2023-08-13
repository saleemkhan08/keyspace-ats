import React, { useState } from "react";
import * as yup from "yup";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

// Chakra imports
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
} from "@chakra-ui/react";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

export const LoginForm = ({ titleColor, textColor }) => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState();
  const auth = getAuth();
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // validate when input loses focus
    reValidateMode: "onChange", // re-validate when input value changes
  });
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      setLoginError(error.message);
      console.log("LoginError : ", error);
    } finally {
      setLoading(false);
    }
  };
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
    } catch (error) {
      setLoginError(error.message);
      console.log("LoginError : ", error);
    } finally {
      setLoading(false);
    }
  };
  let errorMsg = "";
  if (loginError?.includes("user-not-found")) {
    errorMsg = "User not found, Please try again with a different email!";
  } else if (loginError?.includes("wrong-password")) {
    errorMsg = "Invalid Password, Please try again!";
  } else {
    errorMsg = "An Error occured, Please try again later!";
  }
  const handleFocus = () => {
    setLoginError("");
  };
  return (
    <Flex
      direction="column"
      w="100%"
      background="transparent"
      p="48px"
      mt={{ md: "150px", lg: "80px" }}
    >
      <Heading color={titleColor} fontSize="32px" mb="10px">
        Sign In
      </Heading>
      <Text
        mb="36px"
        ms="4px"
        color={textColor}
        fontWeight="bold"
        fontSize="14px"
      >
        Enter your email and password to sign in
      </Text>
      <FormControl>
        <FormProvider {...methods}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Email
          </FormLabel>
          <Input
            borderRadius="15px"
            mb="24px"
            fontSize="sm"
            type="text"
            placeholder="Your email adress"
            size="lg"
            onFocus={handleFocus}
          />
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Password
          </FormLabel>
          <Input
            borderRadius="15px"
            mb="36px"
            fontSize="sm"
            type="password"
            placeholder="Your password"
            size="lg"
            onFocus={handleFocus}
          />
          <FormControl display="flex" alignItems="center">
            <Switch id="remember-login" colorScheme="teal" me="10px" />
            <FormLabel
              htmlFor="remember-login"
              mb="0"
              ms="1"
              fontWeight="normal"
            >
              Remember me
            </FormLabel>
          </FormControl>
          <Button
            fontSize="10px"
            type="submit"
            bg="teal.300"
            w="100%"
            h="45"
            mb="20px"
            color="white"
            mt="20px"
            _hover={{
              bg: "teal.200",
            }}
            _active={{
              bg: "teal.400",
            }}
          >
            SIGN IN
          </Button>
        </FormProvider>
      </FormControl>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxW="100%"
        mt="0px"
      >
        <Text color={textColor} fontWeight="medium">
          Forgot your password?
          <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
            Reset Here
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};
