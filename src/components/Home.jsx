import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PostBox from "./PostBox"
import Image from "react-bootstrap/Image";
import Note from "./Note";
import Greeting from "./Greeting"

let Home = props => {
    return (<div>
        <Greeting content={props.greetingContent} id="homeHeader" />
        <Container fluid="md">
        <Row>
            <Col id="aside" md="0" lg="4">
                <Image src={props.imgSrc} id="myImg"/>
                <div>
                    <p><span style={{textDecoration: "underline"}}>A</span> Graduate Student @Northeastern University ╰(●'◡'●)╮</p>
                </div>
                <div id="note-container">
                {/* Note从数据库中提取数据 */}
                    <Note />
                </div>
            </Col>
            <Col id="section" md="12" lg="8">
            {/* PostBox从数据库中提取数据 */}
                <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
            </Col>
        </Row>
        </Container>
    </div>)
};

export default Home;