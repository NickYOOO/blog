import styled from "styled-components";

function List() {
    
    return (
        <StList>
            <h4>글제목</h4>
            <p>2월 17일 발행</p>
        </StList>
    )
}
export default List;

const StList = styled.div`
div {
    box-sizing: border-box;
}
text-align: left;
padding-left: 20px;
border-bottom: 1px solid grey;
 `