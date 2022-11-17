import {
    Box,
    Flex,
    Container,
    Heading,
    useColorMode,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from "next/link";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header: FC = () => {  
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <NextLink href="/" passHref>
                        <Heading as='h1' fontSize="2xl">
                            Rayleight411 nextjs sample
                        </Heading>
                    </NextLink>
                    <IconButton mb={1} aria-label="DarkMode Switch" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}/>
                </Flex>
            </Container>
        </Box>
    );
}