import * as React from "react";
import { Container } from "../components/Container";
import Layout from "../components/Layout";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/SocialIcons";

export const Head = () => (
  <>
    <title>Sam Frederick | sfred@</title>
    <meta
      name="description"
      content="I'm Sam Fredreick. Solutions architect and software architect based out of Boston, MA."
    />
  </>
);

const IndexPage = () => {
  return (
    <Layout>
      <Container className="mt-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi 👋, I'm sfred@
          </h1>
          <div className="mt-6 flex gap-6"></div>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Solutions architect, software designer, and founder based in Boston,
            currently working for AWS. Always on the lookout for new cocktail
            bars, music venues, and places to explore in the great outdoors.
            Feel free to reach out below.
          </p>
        </div>
        <div className="mt-6 flex gap-6">
          <GitHubIcon href="https://github.com/sfred" />
          <LinkedInIcon href="https://linkedin.com/in/sfredd" />
          <MailIcon href="mailto:sam@sfr.io" />
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
