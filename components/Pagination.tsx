import {
    Box,
    HStack,
    Link,
    Text
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from '../type/siteSettings'

type Props = {
    totalCount: number;
    currentPage?: number;
};

export const Pagination = ({ totalCount, currentPage = 1 }: Props) => {
    const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
    const pageCount = Math.ceil(totalCount / BLOG_PER_PAGE)
    const getPaginationItem = (p: number) => {
        if (p === currentPage) return <Text color="gray.700" fontSize="3xl">{p}</Text>
        return <Link href={`/page/${p}`} color="gray.400" fontSize="3xl">{p}</Link>
    }
    return (
        <HStack spacing='10' justifyContent="center">
            {range(1, pageCount).map((number, index) => (
                <Box key={index}>
                     {getPaginationItem(number)}
                </Box>
            ))}
        </HStack >
    );
};