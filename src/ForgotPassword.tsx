import {
  TextInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
  Flex,
  rem,
} from "@mantine/core";

import { IconAt, IconLock } from "@tabler/icons-react";

const ForgotPassword = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <Container size={420} my={40}>
      <Flex
        mih={50}
        direction="column"
        justify="center"
        align="center"
        flex={1}
      >
        <IconLock stroke={2} style={{ width: rem(56), height: rem(56) }} />
      </Flex>

      <Title ta="center">Forgot Password ?</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="xyz@xyz.com"
          rightSection={icon}
          required
          // onChange={(event) => setUserName(event.target.value)}
        />

        <Group justify="space-between" mt="lg">
          {/* <Checkbox label="Remember me" /> */}
        </Group>
        <Button fullWidth mt="lg" bg="teal">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
