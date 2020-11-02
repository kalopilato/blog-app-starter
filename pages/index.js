import { posts } from "../posts";

import Layout from "../components/Layout";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <Layout pageTitle="My Blog">
      <div className="prose max-w-none">
        <h1>Blog Posts</h1>
      </div>
      <PostsList posts={posts} />
    </Layout>
  );
};

const PostsList = ({ posts }) => {
  if (!posts || !posts.length) return <p>No posts found</p>;

  return (
    <div className="w-full">
      <ul className="mt-4">
        {posts.map((post) => {
          const { frontmatter, slug } = post;
          const { description, date, title } = frontmatter;

          return (
            <li
              key={slug}
              className="px-8 py-2 m-0 mt-4 border-b border-card-border hover:bg-gray-100"
            >
              <Link href={`/blog/${slug}`}>
                <a>
                  <div className="text-xl font-medium">{title}</div>
                  <p className="mt-2 mb-4 font-light">{description}</p>
                  <p className="text-sm font-hairline">{date}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const postsData = posts();

  return {
    props: {
      posts: postsData,
    },
  };
}

export default Index;
