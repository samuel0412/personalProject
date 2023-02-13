import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Collapse,
  Container,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import routes from "../Route/Routes";
import "./Dashboard.css";
import { Broker } from "./Pages/Broker/Broker";
import { Client } from "./Pages/Client/Client";
import { Contract } from "./Pages/Contract/Contract";
import Contractor from "./Pages/Contractor/Contractor";
import Document from "./Pages/Documents/Document";
import { Timesheet } from "./Pages/Timesheets/Timesheet";
export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  let activeStyle = {
    background: "#9f9dc4",
    padding: "10px 30px",
    borderRadius: "5px",
    color: "#3E3E3E",
  };

  const routeLocation = useLocation();

  return (
    <div className="mainDiv">
      <section className="totalDashboardSec">
        <Container fluid style={{ height: "100vh" }}>
          <Row>
            <Col xs={2} className="p-0">
              <div style={{ minHeight: "250px" }}>
                <Collapse in={open} dimension="width">
                  <div id="example-collapse-text">
                    <div className="sideBarMain">
                      <Container fluid className="pt-2">
                        <div className="sideBarMainMenu">
                          <ul>
                            <li>
                              <NavLink
                                to="timesheet"
                                style={({ isActive }) =>
                                  isActive ? activeStyle : undefined
                                }
                              >
                                <span className="mRight">
                                  <i class="fa-solid fa-sheet-plastic"></i>
                                </span>
                                <span>Total Timesheets</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="contract"
                                style={({ isActive }) =>
                                  isActive ? activeStyle : undefined
                                }
                              >
                                <span className="mRight">
                                  <i class="fa-solid fa-file-signature"></i>
                                </span>{" "}
                                <span> All Contracts</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="client"
                                style={({ isActive }) =>
                                  isActive ? activeStyle : undefined
                                }
                              >
                                <span className="mRight">
                                  <i class="fa-solid fa-user"></i>
                                </span>
                                <span>Clients Profile</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="contractor"
                                style={({ isActive }) =>
                                  isActive ? activeStyle : undefined
                                }
                              >
                                <span className="mRight">
                                  <i class="fa-solid fa-id-badge"></i>
                                </span>{" "}
                                <span>Contractor Profile</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="broker"
                                style={({ isActive }) =>
                                  isActive ? activeStyle : undefined
                                }
                              >
                                <span className="mRight">
                                  <i class="fa-regular fa-id-badge"></i>
                                </span>{" "}
                                <span>Broker Profile</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="document"
                                style={({ isActive }) =>
                                  isActive ? activeStyle : undefined
                                }
                              >
                                <span className="mRight">
                                  <i class="fa-solid fa-file"></i>
                                </span>{" "}
                                <span>Documents</span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </Container>
                    </div>
                  </div>
                </Collapse>
              </div>
            </Col>
            <Col xs={10}>
              <div className="sideBarMainContent">
                <Card>
                  <Card.Body>
                    <div className="toggleSideBarBtn">
                      <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        style={{ marginLeft: "auto", background: "#5c5991" }}
                      >
                        <i class="fa-solid fa-bars-staggered"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                {routeLocation.pathname === "/dashboard" ? (
                  <section className="topBarDetailsSecDashboard">
                    <Container fluid>
                      <Row>
                        <Col>
                          <div className="totalContract squareDiv">
                            <span className="mRight">
                              <i class="fa-solid fa-file-contract"></i>
                            </span>
                            <span> Total Contracts : 854</span>
                          </div>
                        </Col>
                        <Col>
                          <div className="approvedInvoices squareDiv">
                            <span className="mRight">
                              <i class="fa-solid fa-file-invoice-dollar"></i>
                            </span>
                            <span> Approved Invoice : 745</span>
                          </div>
                        </Col>
                        <Col>
                          <div className="pendingInvoices squareDiv">
                            <span className="mRight">
                              <i class="fa-solid fa-file-invoice"></i>
                            </span>
                            <span> Pending Invoice : 854</span>
                          </div>
                        </Col>
                        <Col>
                          <div className="archivedInvoices squareDiv">
                            <span className="mRight">
                              <i class="fa-regular fa-file-lines"></i>
                            </span>
                            <span> Archived Invoice : 769</span>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col>
                          <Table
                            striped
                            bordered
                            hover
                            className="dashboardTable"
                          >
                            <thead>
                              <tr>
                                <th>
                                  <span className="mRight">id</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">Contract Code</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">Month</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">Contractor</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">Client</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">Broker</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">Company</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">Hours</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">State</span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">
                                    {" "}
                                    Client Invoice
                                  </span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">
                                    {" "}
                                    Accounting Info
                                  </span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                                <th>
                                  <span className="mRight">
                                    {" "}
                                    Contractor Invoice
                                  </span>
                                  <span>
                                    <i class="fa-solid fa-sort"></i>
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Array.from(Array(10).keys()).map(
                                (item, index) => (
                                  <tr>
                                    <td>{Math.floor(Math.random() * 85968)}</td>
                                    <td>Holaaa</td>
                                    <td>January</td>
                                    <td>Jhon Contractor</td>
                                    <td>Flora Contractor</td>
                                    <td>Tom Broker </td>
                                    <td>The Fintech</td>
                                    <td>{Math.floor(Math.random() * 7)}</td>
                                    <td>In Progress</td>
                                    <td>
                                      <span className="mRight">39$</span>

                                      <span>
                                        <Badge bg="primary">Primary</Badge>
                                      </span>
                                    </td>
                                    <td>
                                      {" "}
                                      <span>
                                        <Badge bg="primary">Primary</Badge>
                                      </span>
                                    </td>
                                    <td>
                                      <span className="mRight">39$</span>

                                      <span>
                                        <Badge bg="primary">Primary</Badge>
                                      </span>
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                ) : (
                  ""
                )}

                <div className="DashBoardRoutes">
                  <Routes>
                    <Route path="/broker" element={<Broker />}></Route>
                  </Routes>
                  <Routes>
                    <Route path="/client" element={<Client />}></Route>
                  </Routes>
                  <Routes>
                    <Route path="/contractor" element={<Contractor />}></Route>
                  </Routes>
                  <Routes>
                    <Route path="/contract" element={<Contract />}></Route>
                  </Routes>
                  <Routes>
                    <Route path="/document" element={<Document />}></Route>
                  </Routes>
                  <Routes>
                    <Route path="/timesheet" element={<Timesheet />}></Route>
                  </Routes>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
