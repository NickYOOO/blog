/*eslint-disable*/
import { useState } from "react";
import styled from "styled-components";

function List() {
    const [글제목, set글제목] = useState(['버킷 리스트', '맛집 리스트', '노동요 리스트']);
    const [좋아요, set좋아요 ] = useState(0);
    return (
        <>
        <StList>
            <h4>{ 글제목[0] } <span onClick={ ()=>{ set좋아요 (좋아요 + 1)} } style={ {cursor : 'pointer'} }>👍🏻</span> { 좋아요 }</h4>
            <button onClick={ ()=> {
                const copy = [...글제목];
                copy[1] = '카페 리스트';
                set글제목(copy)
            } }> 수정버튼 </button>
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