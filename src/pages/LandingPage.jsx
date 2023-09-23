import styled from "styled-components";
import { PageContainer } from "../components/pageContainer";
import { useTranslation } from "react-i18next";

const LeftPanel = styled.div``;
const RightPanel = styled.div``;

const LoginContainer = styled(PageContainer)`
    flex-direction: row;
    border: 1px solid black;
`;

export default function LandingPage() {
    const { t } = useTranslation();

    return (
        <LoginContainer>
            <LeftPanel>
                <h1> {t("pages.landing_page.title")} </h1>
                <h2> {t("pages.landing_page.secondary_call")} </h2>
            </LeftPanel>
            <RightPanel>
                <h1> {t("pages.landing_page.form.main_title")} </h1>
                <h2> {t("pages.landing_page.form.email_label")} </h2>
                <h2> {t("pages.landing_page.form.password_label")} </h2>
            </RightPanel>
        </LoginContainer>
    );
}
