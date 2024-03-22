import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Image,
  Flex,
} from "@mantine/core";
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  console.log("login");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleSignin = () => {
    console.log("singin clicked");
    console.log(userName);
    console.log(password);
    setIsLoading(true);
    if (
      (userName === "Rferm" || userName === "Lmas" || userName === "both") &&
      password === "admin@123"
    ) {
      alert("Login Succesful");
      onLogin(userName);
    } else {
      alert("Check credintials");
    }
  };

  return (
    <div className="App" style={{ width: "100%" }}>
      <Container size={420} my={40}>
        <Flex
          mih={50}
          direction="column"
          justify="center"
          align="center"
          flex={1}
        >
          <Image w={60} src="../src/assets/ManavLogo2021.png" />
        </Flex>

        <Title ta="center">Welcome to R-FERM</Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Name"
            placeholder="user Name"
            required
            onChange={(event) => setUserName(event.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            onChange={(event) => setPassword(event.target.value)}
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" bg="teal" onClick={handleSignin}>
            Sign in
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
