import {
  Box,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={[2, null, 6]} {...props}>
    <Box minW="130px">
      <Stack>
        <Link>How it works</Link>
        <Link>Pricing</Link>
        <Link>Use Cases</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link>How it works</Link>
        <Link>Pricing</Link>
        <Link>Use Cases</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link>How it works</Link>
        <Link>Pricing</Link>
        <Link>Use Cases</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
