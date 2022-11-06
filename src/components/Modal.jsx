import styled from "styled-components";

function Modal(props) {

    return (
        <StModal>
            <h4>{ props.title[0] }</h4>
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
  background-color: 'skyblue';
 `