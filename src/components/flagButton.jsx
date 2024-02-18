import styled from "styled-components";

const Flag = styled.button`
    background: transparent;
    border: none;

    > span {
        &.fi {
            width: 3rem;
            line-height: 2rem;
        }
    }
`;

export const FlagButton = ({key, style, type, onClick, className}) => {
    console.log(key);
    return (
        <>
            <Flag
                key={key}
                style={style}
                type={type}
                onClick={onClick}
            >
                <span className={`fi fi-${className}`}></span>
            </Flag>
        </>
    )
}