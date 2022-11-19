import { client } from "../libs/client";
import { Header } from "../components/Headet";
import { Footer } from "../components/Footer"
import { BlogList } from "../components/BlogList";
import type { NextPage } from 'next'
import {
  Container,
  Heading,
  Box,
} from "@chakra-ui/react";
import { Pagination } from '../components/Pagination';
import { BLOG_PER_PAGE } from '../type/siteSettings'
import type { Blog } from "../type/blog"

export const getStaticProps = async () => {
  const data = await client.getList({ endpoint: "blog", queries: { limit: BLOG_PER_PAGE } });
  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount
    },
  };
};

type Props = {
  blogs: Blog[]
  totalCount: number
}

const Home:NextPage<Props> = ({ blogs, totalCount }) => {
  return (
    <Box>
    <title>Rayleight411 Tech Blog</title>
    <Header/>
    <Container as="main" maxW="container.lg" marginTop="4" marginBottom="20">
        <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="8">
          Home
        </Heading>
        <BlogList blogs={blogs} />
        <Pagination totalCount={totalCount}></Pagination>
    </Container>
    <Footer/>
    </Box>
  );
}

export default Home