import React from "react";
import './App.css';
import styled from "styled-components";
import Detail from "./Detail";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { matchPath } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  const history = useHistory();
  const week = ["일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일"
                ,"일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
  const week2 = ['일', '월', '화', '수', '목', '금', '토',
                  '일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = new Date().getDay();
  const star = React.useRef([]);
  const circle_count = Array.from({ length: 5 }, (v, i) => i)
  const clickEvent = (i) => {

    for (let i = 0; i < Math.floor((Math.random() * 5 + 1)); i++) {
      star.current[i].style.background = "yellow";
    }
    for (let i = 5; i < Math.floor((Math.random() * 5 + 1)) + 5; i++) {
      star.current[i].style.background = "yellow";
    }
    for (let i = 10; i < Math.floor((Math.random() * 5 + 1)) + 10; i++) {
      star.current[i].style.background = "yellow";
    }
    for (let i = 15; i < Math.floor((Math.random() * 5 + 1)) + 15; i++) {
      star.current[i].style.background = "yellow";
    }
    for (let i = 20; i < Math.floor((Math.random() * 5 + 1)) + 20; i++) {
      star.current[i].style.background = "yellow";
    }
    for (let i = 25; i < Math.floor((Math.random() * 5 + 1)) + 25; i++) {
      star.current[i].style.background = "yellow";
    }
    for (let i = 30; i < Math.floor((Math.random() * 5 + 1)) + 30; i++) {
      star.current[i].style.background = "yellow";
    }

  }

  React.useEffect(() => {
    clickEvent();
  }, []);
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={App} >
            <Title>내 일주일은?</Title>
            <Week1>
              <Word>{week2[dayOfWeek]}</Word>
              {circle_count.map((num, idx) => {
                return (
                  <Circle key={idx} ref={(elem) => (star.current.push(elem))}></Circle>
                );
              })}
              <Triangle onClick={() => {
                history.push({
                  pathname: "/detail",
                  state: week[dayOfWeek]
                })
              }} ></Triangle>
            </Week1 >
            <Week1>
              <Word>{week2[dayOfWeek+1]}</Word>
              {circle_count.map((num, idx) => {
                return (
                  <Circle key={idx} ref={(elem) => (star.current.push(elem))}></Circle>
                );
              })}
              <Triangle onClick={() => {
                history.push({
                  pathname: "/detail",
                  state: week[dayOfWeek+1]
                })
              }}></Triangle>
            </Week1>
            <Week1>
              <Word>{week2[dayOfWeek+2]}</Word>
              {circle_count.map((num, idx) => {
                return (
                  <Circle key={idx} ref={(elem) => (star.current.push(elem))}></Circle>
                );
              })}
              <Triangle onClick={() => {
                history.push({
                  pathname: "/detail",
                  state: week[dayOfWeek+2]
                })
              }}></Triangle>
            </Week1>
            <Week1>
              <Word>{week2[dayOfWeek+3]}</Word>
              {circle_count.map((num, idx) => {
                return (
                  <Circle key={idx} ref={(elem) => (star.current.push(elem))}></Circle>
                );
              })}
              <Triangle onClick={() => {
                history.push({
                  pathname: "/detail",
                  state: week[dayOfWeek+3]
                })
              }}></Triangle>
            </Week1>
            <Week1>
              <Word>{week2[dayOfWeek+4]}</Word>
              {circle_count.map((num, idx) => {
                return (
                  <Circle key={idx} ref={(elem) => (star.current.push(elem))}></Circle>
                );
              })}
              <Triangle onClick={() => {
                history.push({
                  pathname: "/detail",
                  state: week[dayOfWeek+4]
                })
              }}></Triangle>
            </Week1>
            <Week1>
              <Word>{week2[dayOfWeek+5]}</Word>
              {circle_count.map((num, idx) => {
                return (
                  <Circle key={idx} ref={(elem) => (star.current.push(elem))}></Circle>
                );
              })}
              <Triangle onClick={() => {
                history.push({
                  pathname: "/detail",
                  state: week[dayOfWeek+5]
                })
              }}></Triangle>
            </Week1>
            <Week1>
              <Word>{week2[dayOfWeek+6]}</Word>
              {circle_count.map((num, idx) => {
                return (
                  <Circle key={idx} ref={(elem) => (star.current.push(elem))}></Circle>
                );
              })}
              <Triangle onClick={() => {
                history.push({
                  pathname: "/detail",
                  state: week[dayOfWeek+6]
                })
              }}></Triangle>
            </Week1>
          </Route>
          <Route path="/detail" component={Detail}>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
width: 400px;
height: 75vh;
border: 3px solid lightgray;
margin: 40px auto;
padding: 20px;
`
const Title = styled.h2`
font-size: 30px;
`
const Week1 = styled.div`
display: flex;
justify-content:center;
align-text:center;
width: 100%;
height: 40px;
margin: 10px auto;
`
const Word = styled.p`
width: 30px;
font-weight: bold;
text-align:center;
line-height:10px;
`
const Circle = styled.div`
width: 35px;
height: 35px;
border-radius: 30px;
background: lightgray;
margin: 7px;
`

const Triangle = styled.div`
width: 0px;
height: 0px;
border-bottom: 17.5px solid transparent;
border-top: 17.5px solid transparent;
border-left: 17.5px solid skyblue;
border-right: 17.5px solid transparent;
margin: 7px;
`

export default App;
