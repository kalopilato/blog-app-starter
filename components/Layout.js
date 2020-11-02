import Head from "next/head";
import ActiveLink from "./ActiveLink";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import twitterIcon from "@iconify/icons-simple-icons/twitter";

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="w-full h-16 border-b border-purple-500 flex items-center justify-center">
          <div className="w-11/12 md:w-full max-w-3xl flex flex-row justify-between">
            <div className="text-2xl text-purple-500">
              <ActiveLink href="/">
                <a>My Blog</a>
              </ActiveLink>
            </div>
            <AppNav />
          </div>
        </header>
        <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow">
          {children}
        </main>
        <footer className="flex flex-col items-center justify-center w-full h-24 text-gray-600 border-t border-purple-500">
          <nav className="flex flex-row">
            <a className="mr-6" href="https://github.com/">
              <Icon className="w-6 h-6" icon={githubIcon} />
            </a>
            <a className="mr-6" href="https://www.linkedin.com/">
              <Icon className="w-6 h-6" icon={linkedinIcon} />
            </a>
            <a href="https://www.twitter.com/">
              <Icon className="w-6 h-6" icon={twitterIcon} />
            </a>
          </nav>
          <div className="mt-2">All content © Me</div>
        </footer>
      </div>
    </>
  );
}

function AppNav() {
  return (
    <nav className="text-2xl text-gray-600">
      <ActiveLink href="/" activeClassName="text-purple-500">
        <a className="mr-8 hover:text-purple-500">Blog</a>
      </ActiveLink>
      <ActiveLink href="/about" activeClassName="text-purple-500">
        <a className="hover:text-purple-500">About</a>
      </ActiveLink>
    </nav>
  );
}

export default Layout;
