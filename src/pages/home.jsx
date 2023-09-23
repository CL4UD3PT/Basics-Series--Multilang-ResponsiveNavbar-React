import { PageContainer } from "../components/pageContainer"
import { useTranslation } from "react-i18next"

export default function Home() {
    const {t} = useTranslation();

    return (
        <PageContainer>
            <h1>
                {t('pages.home.title')}
            </h1>
            <p>
                {t('pages.home.first_paragraph')}
            </p>
        </PageContainer>
    )
}