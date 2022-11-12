import {
    Box,
    Flex,
    Container,
    Heading,
} from '@chakra-ui/react';
import NextLink from "next/link";
import { FC } from 'react';

export const Header: FC = () => {    
    return (
        <Box px={4} bgColor="gray.100">
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <NextLink href="/" passHref>
                        <Heading as='h1' fontSize="2xl" cursor="pointer">
                            Rayleight411 Tech Blog
                        </Heading>
                    </NextLink>
                </Flex>
            </Container>
        </Box>
    );
}