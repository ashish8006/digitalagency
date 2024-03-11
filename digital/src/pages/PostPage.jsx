import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import usePostData from '../CustomHook/usePostData';

function PostPage() {
    const { data, isLoading, error, isStale, isFetching } = usePostData();

    if (isLoading || isFetching) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }

  return (
    <>
      <div className="container">
        <h1 className="text-center">Posts</h1>
        <hr />

        <Row xs={1} md={3} className="g-4">
        {data.map((post) => (
            <Col key={post.id}>
              <Card>
                <Card.Img variant="top" src={post?.thumbnail} />
                <Card.Body>
                  <Card.Title>{post?.title.substr(0, 50)}</Card.Title>
                  <Card.Text>{post?.content.substr(0, 150)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default PostPage;
