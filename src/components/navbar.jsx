import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const lngs = {
    en: {
        nativeName: "English",
        flag: "gb",
    },
    "pt-PT": {
        nativeName: "Português",
        flag: "pt",
    },
};

const NavbarTag = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e2e8f0;
`;
const LeftNavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;
const RightNavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 1rem;
`
const HamburgerButton = styled.button`
    display: none;
    background: rgba(0, 0, 0, 0);
    border: none;

    @media only screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
    }
`;
const BarTag = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;

    @media only screen and (max-width: 768px) {
        .active &:nth-child(2) {
            opacity: 0;
        }

        .active &:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .active &:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

const Logo = styled(Link)`
    font-size: 2.1rem;
    font-weight: 500;
    color: #ffffff;
    background: #101010;
    padding: 0.5rem 1rem;
    border-radius: 5px;
`;

const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > li {
        margin-left: 5rem;

        > a {
            font-size: 1.6rem;
            font-weight: 400;
            color: #475569;
        }

        > a:hover {
            color: #482ff7;
        }
    }

    @media only screen and (max-width: 768px) {
        position: fixed;
        left: -100%;
        top: 5rem;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

        &.active {
            left: 0;
        }

        > li {
            margin: 2.5rem 0;
        }
    }
`;

const FlagButton = styled.button`
    background: transparent;
    border: none;

    > span {
        &.fi {
            width: 3rem;
            line-height: 2rem;
        }
    }
`;

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [hamburgerActive, setHamburgerActive] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerActive(!hamburgerActive);
    };

    return (
        <NavbarTag>
            <LeftNavbarContainer>
                <HamburgerButton
                    className={hamburgerActive ? "active" : ""}
                    onClick={handleHamburgerClick}
                >
                    <BarTag></BarTag>
                    <BarTag></BarTag>
                    <BarTag></BarTag>
                </HamburgerButton>
                <Logo>Simple.desk</Logo>
            </LeftNavbarContainer>
            <RightNavbarContainer>
                <NavMenu className={hamburgerActive ? "active" : ""}>
                    <li>
                        <Link to="/" onClick={handleHamburgerClick}>
                            {t("navbar_pages.home")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={handleHamburgerClick}>
                            {t("navbar_pages.about")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={handleHamburgerClick}>
                            {t("navbar_pages.contact")}
                        </Link>
                    </li>
                </NavMenu>
                <div>
                    {Object.keys(lngs).map((lng) => (
                        <FlagButton
                            key={lng}
                            style={{
                                fontWeight:
                                    i18n.language === lng ? "bold" : "normal",
                            }}
                            type="submit"
                            onClick={() => {
                                i18n.changeLanguage(lng);
                            }}
                        >
                            <span className={`fi fi-${lngs[lng].flag}`}></span>
                            {/* {lngs[lng].nativeName} */}
                        </FlagButton>
                    ))}
                </div>
            </RightNavbarContainer>
        </NavbarTag>
    );
};
