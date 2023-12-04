import React from "react";
import "./Dashboard.css";
import { IoMdSettings } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="topSection">
          <div className="top_container">
            <div className="score">
              <h2>Security Score</h2>
              <div className="pentagon">
                <span>A</span>
              </div>
              <span>89</span>
              <span>-1 Last Month</span>
            </div>
            <div className="scenarios">
              <h3>Compare Scenarios</h3>
              <ul>
                <li>AWs is created and had been hacked</li>
                <li>ADS@S FD S problem</li>
                <li>Azure to OgdenH</li>
                <li>Hybrid Risk to Customer Data</li>
                <li>Resonance Blast Radius</li>
              </ul>
              <span>
                <IoMdSettings /> Select scenarios
              </span>
            </div>
            <div className="graph"></div>
          </div>
        </div>
        <div className="bottomSection">
          <div className="dropDown">
            <div>
              <select>
                <option value="">All Scenarios</option>
                <option value="">lokesh</option>
                <option value="">lokesh</option>
                <option value="">lokesh</option>
                <option value="">lokesh</option>
              </select>
            </div>
            <div>
              <select>
                <option value="">Past 30 Days</option>
                <option value="">lokesh</option>
                <option value="">lokesh</option>
                <option value="">lokesh</option>
                <option value="">lokesh</option>
              </select>
            </div>
          </div>
          <div className="boxes">
            <div className="box-1">
              <div>
                <div className="top">
                  <h3>Scenarios at High Risk</h3>
                  <span>view all</span>
                </div>
                <div className="details">
                  <ul>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                    <li>
                      <div className="pentagon1">F</div>{" "}
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                    <li>
                      <div className="pentagon1">F</div>{" "}
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-2">
              <div>
                <div className="top">
                  <h3>Scenarios at High Risk</h3>
                  <span>view all</span>
                </div>
                <div className="details">
                  <ul>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-3">
              <div>
                <div className="top">
                  <h3>Scenarios at High Risk</h3>
                  <span>view all</span>
                </div>
                <div className="details">
                  <ul>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-4">
              <div>
                <div className="top">
                  <h3>Scenarios at High Risk</h3>
                  <span>view all</span>
                </div>
                <div className="details">
                  <ul>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                    <li>
                      <div className="pentagon1">F</div>
                      <span>(22) - On-prem Risk | Workstations DC</span>
                      <div className="miniGraph">graph</div>
                      <button>Take Action</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
