import React from 'react';
import {Card, Button} from 'react-bootstrap';

const News = (props) => {
    console.log("props",props.articles)
 
    const {title, description, author} = props.articles;
    
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {description}
            </Card.Text>
            <Button variant="primary">{author}</Button>
            </Card.Body>
        </Card>
    );
};

export default News;