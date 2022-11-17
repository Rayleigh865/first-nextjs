import {
    Box,
    Flex,
    Container,
    Heading,
    useColorMode,
    IconButton,
} from '@chakra-ui/react';
import { FC } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header: FC = () => {  
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box px={4} bgColor="gray.100">
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <Heading as='h1' fontSize="2xl">
                        Rayleight411 nextjs sample
                    </Heading>
                    <IconButton
                    mb={1}
                    aria-label="DarkMode Switch"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} 
                    onClick={toggleColorMode}
                    />
                </Flex>
            </Container>
        </Box>
    );
}