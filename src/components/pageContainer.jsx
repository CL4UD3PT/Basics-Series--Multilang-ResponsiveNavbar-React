import styled from "styled-components";

export const PageContainer = ({ children }) => {
    const PageTag = styled.div`
        flex: 1 1 auto;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `
    return <PageTag>{children}</PageTag>;
};
