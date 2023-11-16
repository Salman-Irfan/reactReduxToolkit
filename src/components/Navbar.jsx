import React from 'react';
import { Box, Flex, Spacer, Heading, IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex p={4} bg="teal.500" color="white">
            <Box>
                <Heading size="md">React Redux Toolkit</Heading>
            </Box>
            <Spacer />
            <Box>
                <IconButton
                    ml={2}
                    onClick={toggleColorMode}
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    aria-label="Toggle dark mode"
                />
            </Box>
        </Flex>
    );
};

export default Navbar;
