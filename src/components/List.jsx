/*eslint-disable*/
import { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

function List() {
    const [title, setTitle] = useState(['버킷 리스트', '맛집 리스트', '노동요 리스트']);
    const [date, setDate] = useState(['02월 17일', '05월 17일', '01월 05일']);
    const [likes, setLikes] = useState([0, 0, 0]);
    const [modal, setModal] = useState(false);

    return (
        <>
            {/* <StList>
                <h4>{title[0]} <span onClick={() => { setLikes(likes + 1) }} style={{ cursor: 'pointer' }}>👍🏻</span> {likes}</h4>
                <button onClick={() => {
                    const copy = [...title];
                    copy[1] = '카페 리스트';
                    setTitle(copy)
                }}> 수정버튼 </button>
                <p>2월 17일 발행</p>
                </StList>
                <StList>
                <h4 onClick={() => { setModal(true) }}
                style={{ cursor: 'pointer' }} >
                {title[1]}</h4>
                {
                    modal === true ? <Modal /> : null
                }
            </StList> */}
            {
                title.map(function (a, i) {
                    return (
                        <StList>
                            <h4 style={{ cursor: 'pointer' }} onClick = {()=>{ setModal(true); setTitle(i); }}>{title[i]}</h4>
                            <span style={{ cursor: 'pointer' }} onClick={() => {
                                let copy = [...likes];
                                copy[i] = copy[i] + 1;
                                setLikes(copy)
                            }}>👍🏻</span> {likes[i]}
                        </StList>

                    )
                })
            }
        </>
    );
};
export default List;

const StList = styled.div`
div {
    box-sizing: border-box;
}
display: flex;
align-items: center;

text-align: left;
padding-left: 20px;
border-bottom: 1px solid grey;
 `