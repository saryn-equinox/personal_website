import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";
import PostBox from "./PostBox"
import {Link} from "react-router-dom";
import {blogYears, tag} from "../constants";
import NavItem from "./NavItem";

let Blog = props => {

    return (<div>
        <NavigationBar navBarItems={props.blogGenre} type="blog-genre" position=""/>
        <Container className="blog-container" fluid="md">
            <Row >
                <Col className="aside " md="0" lg="3">
                    <ul className="nav flex-column blog-nav">
                        {Object.entries(blogYears).map((val, idx) => {
                            const year = val[0];
                            const path = val[1];
                            return (<NavItem key={idx} name={year} path={path} />)
                        })}
                    </ul>
                    <ul className="nav flex-column blog-nav">
                        {Object.entries(tag).map((val, idx) => {
                            const tag = val[0];
                            const path = val[1];
                            return (<NavItem key={idx} name={tag} path={path} />)   
                        })}
                    </ul>
                </Col>
                <Col className="section" md="12" lg="9">
                    <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                    <PostBox genre="11" title="日记1" abstract="没有什么归纳"/>
                    <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                    <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                    <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                    <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                    <PostBox genre="日记" title="日记1" abstract="没有什么归纳"/>
                </Col>
            </Row>
        </Container>
    </div>)
}

export default Blog;