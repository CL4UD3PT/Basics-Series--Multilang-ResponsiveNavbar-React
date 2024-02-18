import styled from "styled-components";

const Hamburger = styled.button`
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

export const HamburgerButton = ({className, onClick}) => {
    return (
        <>
            <Hamburger
                className={className}
                onClick={onClick}>
                <BarTag/>
                <BarTag/>
                <BarTag/>
            </Hamburger>
        </>
    )
}

