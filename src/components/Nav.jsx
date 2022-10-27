import styled from "styled-components";

function Nav() {
    const data = 'red';
    return (
        <StNav>
            <div>개발 blog</div>
        </StNav>
    )
}
export default Nav;

const StNav = styled.div`
 background : black;
  width : 100%;
  display : flex;
  color : white;
  padding : 20px;
 `