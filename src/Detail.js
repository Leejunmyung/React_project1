import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Detail = (props) => {
    const history = useHistory({});
    const loca = useLocation();
    const item = loca.state
    const star = React.useRef([]);

    const clickEvent = (i) => {
        if (i.target === star.current[0]) {

            star.current[0].style.background = "yellow";
            star.current[1].style.background = "lightgray";
            star.current[2].style.background = "lightgray";
            star.current[3].style.background = "lightgray";
            star.current[4].style.background = "lightgray";
        } else if (i.target === star.current[1]) {

            star.current[0].style.background = "yellow";
            star.current[1].style.background = "yellow";
            star.current[2].style.background = "lightgray";
            star.current[3].style.background = "lightgray";
            star.current[4].style.background = "lightgray";
        } else if (i.target === star.current[2]) {

            star.current[0].style.background = "yellow";
            star.current[1].style.background = "yellow";
            star.current[2].style.background = "yellow";
            star.current[3].style.background = "lightgray";
            star.current[4].style.background = "lightgray";
        } else if (i.target === star.current[3]) {

            star.current[0].style.background = "yellow";
            star.current[1].style.background = "yellow";
            star.current[2].style.background = "yellow";
            star.current[3].style.background = "yellow";
            star.current[4].style.background = "lightgray";
        } else if (i.target === star.current[4]) {

            star.current[0].style.background = "yellow";
            star.current[1].style.background = "yellow";
            star.current[2].style.background = "yellow";
            star.current[3].style.background = "yellow";
            star.current[4].style.background = "yellow";
        }
        
    }

    React.useEffect(() => {
        star.current[0].addEventListener("mousedown", clickEvent);
        star.current[1].addEventListener("mousedown", clickEvent);
        star.current[2].addEventListener("mousedown", clickEvent);
        star.current[3].addEventListener("mousedown", clickEvent);
        star.current[4].addEventListener("mousedown", clickEvent);
    }, []);

    return (
        <DetailBox>
            <Title>
                <Day>{item}</Day> 평점 남기기
            </Title>
            <Star>
                <Circle ref={i => (star.current[0] = i)}></Circle>
                <Circle ref={i => (star.current[1] = i)}></Circle>
                <Circle ref={i => (star.current[2] = i)}></Circle>
                <Circle ref={i => (star.current[3] = i)}></Circle>
                <Circle ref={i => (star.current[4] = i)}></Circle>
            </Star>
            <Review onClick={() => {
                history.push({
                    pathname: "/"
                });
                window.location.reload();
            }}>평점 남기기</Review>
        </DetailBox>
    );
};

const DetailBox = styled.div`
max-width: 350px;
height: 50vh;
margin: 30px auto;
`
const Title = styled.h3`

`
const Day = styled.span`
background: lightpink;
color: white;
font-size:25px;
`
const Star = styled.div`
display: flex;
justify-content:center;
align-text:center;
width: 100%;
height: 40px;
margin: 10px auto;
`
const Circle = styled.div`
width: 35px;
height: 35px;
border-radius: 30px;
background: lightgray;
margin: 7px;
`
const Review = styled.button`
margin:30px auto;
width: 300px;
height: 50px;
background:skyblue;
border: none;
border-radius:5px;
color: white;
`
export default Detail