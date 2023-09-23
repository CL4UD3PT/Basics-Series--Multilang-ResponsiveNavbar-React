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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, facilis necessitatibus sequi odio consectetur doloremque est asperiores, vero optio ad, dolor fugit debitis soluta explicabo laboriosam. In, necessitatibus! Esse, asperiores!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, facilis necessitatibus sequi odio consectetur doloremque est asperiores, vero optio ad, dolor fugit debitis soluta explicabo laboriosam. In, necessitatibus! Esse, asperiores!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, facilis necessitatibus sequi odio consectetur doloremque est asperiores, vero optio ad, dolor fugit debitis soluta explicabo laboriosam. In, necessitatibus! Esse, asperiores!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, facilis necessitatibus sequi odio consectetur doloremque est asperiores, vero optio ad, dolor fugit debitis soluta explicabo laboriosam. In, necessitatibus! Esse, asperiores!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, facilis necessitatibus sequi odio consectetur doloremque est asperiores, vero optio ad, dolor fugit debitis soluta explicabo laboriosam. In, necessitatibus! Esse, asperiores!</p>
        </PageContainer>
    )
}