import type { Blog } from "../type/blog"
import { DateTime } from "../components/DateTime"
import {
    Box,
    Stack,
    Link,
    Text,
    Button,
} from "@chakra-ui/react";

type Props = {
    blogs: Blog[]
}

export const BlogList = ({ blogs }: Props) => {
    return (
        <>
            {blogs.map(blog => (
                <Box key={blog.id}>
                    <Text>{blog.title}</Text>
                    {/* @ts-ignore */}
                    <DateTime datetime={blog.publishedAt} /> 
                    <Link href={`/blog/${blog.id}`}>
                        <Button colorScheme='teal' variant='outline' size="sm" mt="8">
                            続きを読む
                        </Button>
                    </Link>
                    <Stack mt="10" mb="10" borderBottom="1px" borderColor="gray.300" />
                </Box>
            ))}
        </>
    )
}