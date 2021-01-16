import PropTypes from "prop-types";
import Head from "next/head";

const Header = ({ title }) => (
  <>
    <Head>
      <title>Next Boilerplate</title>
    </Head>
    <h2>next js app</h2>
    <h2>next-i18next</h2>
    <h2>styled-components</h2>
    <h2>font-awesome</h2>
    <h2>framer motion</h2>
    <hr />
    <h1>{title}</h1>
    <a className="github" href="//github.com/isaachinman/next-i18next">
      <i className="typcn typcn-social-github-circular" />
    </a>
  </>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
