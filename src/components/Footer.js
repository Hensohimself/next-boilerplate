import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const Footer = ({ t }) => <footer></footer>;

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("footer")(Footer);
