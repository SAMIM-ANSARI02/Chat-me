import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setpic] = useState();
  const [show, setshow] = useState(false);
  const [picLoading, setPicLoading] = useState(false);
  const navigate = useNavigate();

  const handleclick = () => setshow(!show);
  const toast = useToast();

  const postDetails = (pic) => {
    setPicLoading(true);
    if (pic === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    // console.log(pic);
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-me");
      data.append("cloud_name", "dj91dbniy");
      fetch("https://api.cloudinary.com/v1_1/dj91dbniy/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setpic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please select all the field",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: "Password not match!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    try {
      const config = {
        header: {
          "Content-type": "application",
        },
      };

      const data = await axios.post(
        "/api/user",
        { name, email, pic, password },
        config
      );
      toast({
        title: "Registration successful",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("UserInfo", JSON.stringify(data));
      setPicLoading(false);
      navigate("/chat");
    } catch (error) {
      toast({
        title: "error occured",
        description: error.response.data.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };
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
        isLoading={picLoading}
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default SignUp;
