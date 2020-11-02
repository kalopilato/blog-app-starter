import Layout from "../components/Layout";

function About() {
  return (
    <Layout pageTitle="About | My Blog">
      <article className="prose max-w-none">
        <h1>About</h1>
        <p>Hello, I'm a blogger and I blog about interesting things.</p>
      </article>
    </Layout>
  );
}

export default About;
