import { postSlugs, postForSlug } from "../../posts";

import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import ReactMarkdown from "react-markdown";

function Post({ frontmatter, body }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={frontmatter.title}>
      <div className="w-full">
        <article className="prose max-w-none">
          <h1>{frontmatter.title}</h1>
          <p className="italic">{frontmatter.date}</p>
          <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
