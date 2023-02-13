import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../CSS/login.css";
import loginImg from "../Images/login.png";
import { userLogin } from "../Service/API/EndPoints";
import swal from "sweetalert";
import apiClient from "../Service/API/Request";
import { useDispatch, useSelector } from "react-redux";
import { usersLogin } from "../Redux/userLoginSlice";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../Loader/loading.json";
import { AuthLogin } from "../PureRedux/Reducers/AuthReducer";
import { fetchTodoById } from "../PureRedux/Reducers/ProductReducers";

export const UserLogin = () => {
  const [userDetails, setUserDetails] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [userType, setUserType] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.AuthMain?.data?.token);
  const xsrfToken = useSelector((state) => state?.AuthMain?.data?.xsrfToken);
  console.log("tokennnnnnnnnnnnnnnn", token, xsrfToken);
  const requestStaus = useSelector((state) => state?.AuthMain?.status);
  console.log("requestStaus", requestStaus);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const loginObj = {
    email: userDetails.userEmail,
    password: userDetails.userPassword,
    type: userType,
  };
  const userSignIn = () => {
    dispatch(AuthLogin(loginObj));
  };
  useEffect(() => {
    if (token && xsrfToken) {
      navigate("/dashboard");
    }
  }, [token, xsrfToken]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div
        className="loginMainSec"
        style={{
          backgroundImage: requestStaus === "loading" ? "none" : "",
        }}
      >
        {requestStaus === "loading" ? (
          <div className="loaderSection">
            {" "}
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        ) : (
          <div className="" style={{ paddingTop: "12%" }}>
            <Container>
              <Row>
                <Col sm={12} md={12} lg={6}>
                  <div className="loginLft ">
                    <div className="loginLftTextHead">
                      <h1>Sign in to TimeHit</h1>
                    </div>
                    <div className="loginLftPlanText d-flex justify-content-between align-items-start">
                      <p className="pt-3 ">
                        Manage invoices, timesheets and payments in one place.
                        Automated & easy.
                      </p>
                      <div className="loginLftImg">
                        <img src={loginImg} alt="" srcSet="" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6}>
                  {" "}
                  <div className="loginRight">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          value={userDetails.userEmail}
                          placeholder="Enter email"
                          name="userEmail"
                          onChange={handleChange}
                        />
                        {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={userDetails.userPassword}
                          placeholder="Password"
                          name="userPassword"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Select
                        aria-label="Default select example"
                        className="mb-3"
                        onChange={(e) => setUserType(e.target.value)}
                      >
                        <option>Please select your user type</option>
                        <option value="ADMIN" name="userType">
                          Admin
                        </option>
                        <option value="CLIENT" name="userType">
                          Client
                        </option>
                        <option value="BROKER" name="userType">
                          Broker
                        </option>
                        <option value="CONTRACTOR" name="userType">
                          Contractor
                        </option>
                      </Form.Select>
                      <Button
                        variant=""
                        type="button"
                        className="w-100 signInBtn"
                        onClick={userSignIn}
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    </>
  );
};
