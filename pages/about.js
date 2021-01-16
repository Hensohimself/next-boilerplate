import PropTypes from "prop-types";
import { withTranslation, Link } from "../i18n";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const About = ({ t }) => (
  <>
    <main>
      <Header title={t("Go Go")} />
      <Link href="/">
        <button type="button">{t("back-to-home")}</button>
      </Link>
    </main>
    <Footer />
  </>
);

About.getInitialProps = async () => ({
  namespacesRequired: ["about", "footer"],
});

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("about")(About);
