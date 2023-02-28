import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import Footer2 from '../../components/footer2/Footer2';
import Topbar from '../../components/topbar/Topbar';
import Titulo from './../../components/Titulo/Titulo';
import { Link } from 'react-router-dom';
import "./style.css"



function Blogpage() {

    const posts = [
        { title: "Post 1", date: "2022-01-01", author: "John Doe", content: "Lorem ipsum dolor sit amet..." },
        { title: "Post 2", date: "2022-01-02", author: "Jane Smith", content: "Lorem ipsum dolor sit amet..." },
        { title: "Post 3", date: "2022-01-03", author: "Bob Johnson", content: "Lorem ipsum dolor sit amet..." },
        { title: "Post 4", date: "2022-01-06", author: "Ana Carolina", content: "Lorem ipsum dolor sit amet..." },
        { title: "Post 5", date: "2022-01-07", author: "Herique", content: "Lorem ipsum dolor sit amet..." },
        { title: "Post 6", date: "2022-01-10", author: "Mariana", content: "Lorem ipsum dolor sit amet..." },
      ];
  return (<>
    <Topbar/>
    <Titulo titulo="Curiosidades"/>
    <Container>
      <Container>
        

       <Container> 
        <Container className="row">
            {posts.map ((post) => (
            
            
                <Card href="/blog" className="m-3"style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                            <div className="row">
                                <Card.Subtitle className="col-6">by: {post.author}</Card.Subtitle>
                                <Card.Subtitle className="col-6">{post.date}</Card.Subtitle>
                            </div>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            
            
            ))}
        </Container>
    </Container>

    </Container>
    </Container>
    <Breadcrumb crumb2="" crumb="Curiosidades" />
    <Footer2/>
  </>);
}

export default Blogpage
