import { client } from "../libs/client";
import { Header } from "../components/Headet";
import { BlogList } from "../components/BlogList";
import {
  Container,
  Heading,
  IconButton,
  useColorMode
} from "@chakra-ui/react";


export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default function Home({ blogs }: {blogs: any}) {
  return (
    <>
    <Header/>
    <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
        <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="8">
          Home
        </Heading>
        <BlogList blogs={blogs} />
    </Container>
    </>
  );
}