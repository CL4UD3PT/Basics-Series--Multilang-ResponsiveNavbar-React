import styled from "styled-components";

const PageTag = styled.div`
    flex: 1 1 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    margin-top: 1rem;
`;

export const PageContainer = ({ children }) => {
    return <PageTag>{children}</PageTag>;
};
