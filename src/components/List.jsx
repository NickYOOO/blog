/*eslint-disable*/
import { useState } from "react";
import styled from "styled-components";

function List() {
    const [글제목, b] = useState(['버킷 리스트', '맛집 리스트', '노동요 리스트']);

    return (
        <>
        <StList>
            <h4>{ 글제목[0] }</h4>
            <p>2월 17일 발행</p>
        </StList>
             <StList>
             <h4>{ 글제목[1] }</h4>
             <p>2월 17일 발행</p>
         </StList>
              <StList>
              <h4>{ 글제목[2] }</h4>
              <p>2월 17일 발행</p>
          </StList>
        </>
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