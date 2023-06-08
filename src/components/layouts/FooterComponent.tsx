import { Text, Link as ChakraLink, Flex } from "@chakra-ui/react";

const FooterComponent = () => (
  <Flex as="footer" py="4rem">
    <Text>
      <ChakraLink isExternal href="https://lrmn.is-a.dev">
        <b>{new Date().getFullYear()} | L RMN</b>
      </ChakraLink>
    </Text>
  </Flex>
);

export default FooterComponent;
