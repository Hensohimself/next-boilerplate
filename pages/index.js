import PropTypes from "prop-types";
import { Link, withTranslation } from "../i18n";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import styled from "styled-components";
import LanguageSwitcher from "../src/lang/LanguageSwitcher";

const Button = styled.button`
  padding: 1em 2em;
  margin: 1em;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
`;

const Homepage = ({ t }) => (
  <>
    <main>
      <Header title={t("Happy Coding")} />
      <div>
        <LanguageSwitcher />
        <Link href="/about">
          <Button type="button">{t("About")}</Button>
        </Link>
      </div>
    </main>
    <Footer />
  </>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common", "footer"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
