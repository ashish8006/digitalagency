import "./FrameContainer.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form"
import axios from 'axios';
const FrameContainer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/login', data);
      const accessToken = response.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      fetchProtectedData(accessToken);
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const fetchProtectedData = async (token) => {
    try {
      const response = await axios.get('http://localhost:8080/api/data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Protected Data:', response.data);
    } catch (error) {
      if (error.response.status === 401) {
        console.error('Token expired. Redirecting to login...');
      } else if (error.response.status === 403) {
        console.error('Forbidden. Insufficient permissions.');
      } else {
        console.error('Error fetching protected data:', error);
      }
    }
  };
  
  return (
    <>
      <header className="frame-container">
        <div className="f-r-a-m-e">
          <div className="vector-icon">
            <img
              className="help-menu-text"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <h3 className="help-menu">Digital agency</h3>
          </div>
        </div>
        <div className="frame-projects-showcase">
          <div className="group-frame">
            <div className="about">About</div>
          </div>
          <div className="group-frame1">
            <div className="services">Services</div>
          </div>
          <div className="group-frame2">
            <div className="projects">Projects</div>
          </div>
          <div className="button">
            <div className="button-base">
              <b className="label" onClick={handleShow}>
                   Get in Touch
              </b>
            </div>
          </div>
        </div>
      </header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ashish8006"
                {...register("username", { value: "Ashish8006" })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="123456"
                {...register("password", { value: "123456" })}
              />
            </Form.Group>
          <div className="text-end">
          <Button variant="primary"  type="submit">
            Sign In
          </Button>
          </div>
        
          </Form>
        </Modal.Body>
      
      </Modal>
    </>
  );
};

export default FrameContainer;
