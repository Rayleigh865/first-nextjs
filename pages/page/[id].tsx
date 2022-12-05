import { Pagination } from '../../components/Pagination';
import { client } from '../../libs/client';
import { GetStaticPaths, GetStaticProps, } from "next";
import type { Blog } from "../../type/blog";
import { Header } from '../../components/Headet'
import { Footer } from '../../components/Footer';
import { BlogList } from '../../components/BlogList';
import {
    Box,
    Container,
    Heading,
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from '../../type/siteSettings';

type Props = {
    blogs: Blog[]
    totalCount: number
    currentPage: number
};

export default function BlogPageId({ blogs, totalCount, currentPage }: Props) {
    return (
        <Box>
            <Header />
            <Container as="main" maxW="container.lg" marginTop="4" marginBottom="20">
                <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="8">
                    Home
                </Heading>
                <BlogList blogs={blogs} />
                <Pagination totalCount={totalCount} currentPage={currentPage} />
            </Container>
            <Footer />
        </Box>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const repos = await client.get({ endpoint: "blog" });
    const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, Math.ceil(repos.totalCount / BLOG_PER_PAGE)).map((repo) => `/page/${repo}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
    if (!params) throw new Error("Error Page Number Not Found");
    const pageId = Number(params.id);
    const data = await client.getList({
        endpoint: "blog",
        queries: {
            offset: (Number(pageId) - 1) * BLOG_PER_PAGE,
            limit: BLOG_PER_PAGE
        }
    });
    return {
        props: {
            blogs: data.contents,
            totalCount: data.totalCount,
            currentPage: pageId
        },
    };
};