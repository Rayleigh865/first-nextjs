import { client } from '../../libs/client';
import { Heading, Container, Divider, Box } from '@chakra-ui/react'
import { Header } from "../../components/Headet";
import { Footer } from "../../components/Footer"
import { MarkdownTemplate } from "../../components/MakdownTemplate"

export default function BlogId({ blog }) {
  return (
    <Box>
    <Header/>
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

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};