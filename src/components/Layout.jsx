import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Box from "./Box"
import Image from "react-bootstrap/Image";
import Note from "./Note";

let Layout = props => {
    return (<Container fluid="md">
        <Row>
            <Col id="aside" md="0" lg="4">
                <Image src={props.imgSrc} id="myImg"/>
                <div>
                    <p><span style={{textDecoration: "underline"}}>A</span> Graduate Student @Northeastern University ╰(●'◡'●)╮</p>
                </div>
                <div id="note-container">
                {/* Note从数据库中提取数据 */}
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <p className="readMore"><a href="./note.html">and more...</a> </p>
                </div>
           
            </Col>
            <Col id="section" md="12" lg="8">
            {/* Box从数据库中提取数据 */}
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </Col>
        </Row>
    </Container>)
};

export default Layout;