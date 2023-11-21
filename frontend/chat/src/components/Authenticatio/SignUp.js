import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setpic] = useState();
  const [show, setshow] = useState(false);

  const handleclick = () => setshow(!show);

  const postDetails = (pics) => {};

  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setname(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setemail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleclick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleclick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement> */}
        </InputGroup>
      </FormControl>
      <FormControl id="pic" isRequired>
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          accept="image/*"
          p={1.5}
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        color={"white"}
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default SignUp;
