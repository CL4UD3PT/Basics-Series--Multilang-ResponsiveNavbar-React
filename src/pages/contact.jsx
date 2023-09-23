import { PageContainer } from "../components/pageContainer"
import { useTranslation } from "react-i18next"

export default function Contact() {
    const {t} = useTranslation();
    
    return (
        <PageContainer>
            <h1>
                {t('pages.contact.title')}
            </h1>
            <p>
                {t('pages.contact.first_paragraph')}
            </p>
        </PageContainer>
    )
}