import { client } from '../../libs/client';
import { Heading, Container, Divider, Box } from '@chakra-ui/react'
import { Header } from "../../components/Headet";
import { Footer } from "../../components/Footer"
import { MarkdownTemplate } from "../../components/MakdownTemplate"
import { NextSeo } from "next-seo";

export default function BlogId({ blog }) {
  return (
    <Box>
    <Header/>
    <NextSeo
            description={blog.title}
            />
    <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
        <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="8">
        {blog.title}
        </Heading>
      <Divider marginY="8" />
      <MarkdownTemplate source={blog.content} />
    </Container>
    <Footer/>
    </Box>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};