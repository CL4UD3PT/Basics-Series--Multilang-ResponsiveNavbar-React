import { PageContainer } from "../components/pageContainer"
import { useTranslation } from "react-i18next"

export default function About() {
    const {t} = useTranslation();

    return (
        <PageContainer>
            <h1>
                {t('pages.about.title')}
            </h1>
            <p>
                {t('pages.about.first_paragraph')}
            </p>
        </PageContainer>
    )
}