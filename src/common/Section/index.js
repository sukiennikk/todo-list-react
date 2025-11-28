import { Wrapper, HeaderRow, Header, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
   <Wrapper>
        <HeaderRow>
            <Header>
                {title}
            </Header>
            {extraHeaderContent}
        </HeaderRow>
        <Body>
        {body}
        </Body>
    </Wrapper>
);

export default Section;