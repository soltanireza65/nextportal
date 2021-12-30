import LanguageSwitcher from "components/shared/LanguageSwitcher/LanguageSwitcher";
import Layout from "components/template-4/Shared/Layout";
import useTranslation from "next-translate/useTranslation";
import React from "react";

interface Props {}

const index = (props: Props) => {
  const { t, lang } = useTranslation("common");

  return (
    <Layout>
      <LanguageSwitcher />
      <p>
        RTL
        {t("title")}
      </p>
    </Layout>
  );
};

export default index;
