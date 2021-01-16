import { i18n } from "../../i18n";
import { useContext } from "react";
import { I18nContext } from "next-i18next";

function LanguageSwitcher() {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <div>
      <button onClick={() => i18n.changeLanguage("de")}>DE</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
    </div>
  );
}

export default LanguageSwitcher;
