import styled from "styled-components";

function Modal() {

    return (
        <StModal>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </StModal>
    )
}
export default Modal;

const StModal = styled.div`
  margin-top : 20px;
  padding : 20px;
  background : #eee;
  text-align : left;
 `