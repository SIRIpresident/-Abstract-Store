import React from "react";
import styled from "styled-components";
import Banner from "./Banner";

const Wrapper = styled.div`
    text-align: center;
    height: 600px;
    #good {
        height: 70px;
    }
    & > img {
        width: 30%;
        margin-top: 10px;
    }
    .infoContainer {
        display: inline-block;
        background-color: white;
        margin-left: 10px;
        margin-top: 10px;
        height: 40px;
        width: 200px;
        line-height: 40px;
        border-radius: 10px;
    }
    #holy {
        display: inline-block;
        margin-top: 10px;
        background-color: white;
        padding: 10px;
        border-radius: 10px;
    }
    #purchase {
        display: inline-block;
        background-color: green;
        padding: 15px;
        text-align: center;
        margin-top: 10px;
        color: white;
        border-radius: 10px;
    }
`;

const Hweone = (props) => {
    return (
        <Wrapper>
            <Banner/>
            <div id={"good"}></div>
            *이 사이트의 모든 물건은 실제로 판매되지 않습니다. 그저 재미로만 봐주세요.
            <br/>
            <img src="https://imgur.com/CGR6xpn.png"/>
            <br/>
            <div class={"infoContainer"}>이름: SIRI 명예 회원증</div>
            <div class={"infoContainer"}>가격: <del>10000원</del> 5000원</div>
            <br/>
            <div id={"holy"}>
                제품정보 : 이 제품을 가지고 계시다면<br/>
                몰래 SIRI에 잠입해서 수준높은 SIRI의 <br/>
                수업을 들으실 수 있습니다.<br/>
                현제 50% 할인된 가격에 만나보실 수 있습니다.
            </div>
            <br/>
            <div id="purchase">구매하기</div>
        </Wrapper>
    )
}

export default Hweone;