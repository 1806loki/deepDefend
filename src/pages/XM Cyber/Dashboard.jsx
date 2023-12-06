import React from "react";
import "./Dashboard.css";
import { IoMdSettings } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard">
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
            <div className="box-2">
              <div>
                <div className="top">
                  <h3>Critical Assets at High Risk</h3>
                  <span>view all</span>
                </div>
                <div className="details">
                  <div>
                    <p>
                      Critical assets compromised by attack vectors with the
                      lowest average complexity
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Critical Asset Name</th>
                          <th>Avg complexity</th>
                          <th>Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Raymond Butcher</td>
                          <td>11</td>
                          <td>---</td>
                        </tr>
                        <tr>
                          <td>Raymond Butcher</td>
                          <td>11</td>
                          <td>---</td>
                        </tr>
                        <tr>
                          <td>Raymond Butcher</td>
                          <td>11</td>
                          <td>---</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pieGraph"></div>
                </div>
              </div>
            </div>
            <div className="box-3">
              <div>
                <div className="top">
                  <h3>Top Choke Points</h3>
                  <span>view all</span>
                </div>
                <div className="details">
                  <div>
                    <p>
                      Top 3 Entities which are part of the most attack vectors
                      to critical assets that affect 43.1% of the critical
                      assets (267/619)
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Entity Name</th>
                          <th>Critical Assets</th>
                          <th>Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>hezi nagar</td>
                          <td>233</td>
                        </tr>
                        <tr>
                          <td>Complete Engine service Account</td>
                          <td>141</td>
                        </tr>
                        <tr>
                          <td>gcppocsa</td>
                          <td>64</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="hexagon-container">
                    <div className="c1">
                      <div className="hexagon" id="hexagon-1"></div>
                      <div className="hexagon" id="hexagon-2"></div>
                      <div className="hexagon" id="hexagon-3"></div>
                      <div className="hexagon" id="hexagon-4"></div>
                      <div className="hexagon" id="hexagon-5"></div>
                    </div>
                    <div className="c2">
                      <div className="hexagon" id="hexagon-6"></div>
                      <div className="hexagon" id="hexagon-7"></div>
                      <div className="hexagon" id="hexagon-8"></div>
                      <div className="hexagon" id="hexagon-9"></div>
                      <div className="hexagon" id="hexagon-10"></div>
                      <div className="hexagon" id="hexagon-11"></div>
                    </div>
                    <div className="c3">
                      <div className="hexagon" id="hexagon-12"></div>
                      <div className="hexagon" id="hexagon-13"></div>
                      <div className="hexagon" id="hexagon-14"></div>
                      <div className="hexagon" id="hexagon-15"></div>
                      <div className="hexagon" id="hexagon-16"></div>
                      <div className="hexagon" id="hexagon-17"></div>
                      <div className="hexagon" id="hexagon-18"></div>
                    </div>
                    <div className="c4">
                      <div className="hexagon" id="hexagon-19"></div>
                      <div className="hexagon" id="hexagon-20"></div>
                      <div className="hexagon" id="hexagon-21"></div>
                      <div className="hexagon" id="hexagon-22"></div>
                      <div className="hexagon" id="hexagon-23"></div>
                      <div className="hexagon" id="hexagon-24"></div>
                      <div className="hexagon" id="hexagon-25"></div>
                      <div className="hexagon" id="hexagon-26"></div>
                    </div>
                    <div className="c5">
                      <div className="hexagon" id="hexagon-27"></div>
                      <div className="hexagon" id="hexagon-28"></div>
                      <div className="hexagon" id="hexagon-29"></div>
                      <div className="percentage">
                        <p>51.8%</p>
                      </div>
                      <div className="hexagon" id="hexagon-33"></div>
                      <div className="hexagon" id="hexagon-34"></div>
                      <div className="hexagon" id="hexagon-35"></div>
                    </div>
                    <div className="c6">
                      <div className="hexagon" id="hexagon-36"></div>
                      <div className="hexagon" id="hexagon-37"></div>
                      <div className="hexagon" id="hexagon-38"></div>
                      <div className="hexagon" id="hexagon-39"></div>
                      <div className="hexagon" id="hexagon-40"></div>
                      <div className="hexagon" id="hexagon-41"></div>
                      <div className="hexagon" id="hexagon-42"></div>
                      <div className="hexagon" id="hexagon-43"></div>
                    </div>
                    <div className="c7">
                      <div className="hexagon" id="hexagon-44"></div>
                      <div className="hexagon" id="hexagon-45"></div>
                      <div className="hexagon" id="hexagon-46"></div>
                      <div className="hexagon" id="hexagon-47"></div>
                      <div className="hexagon" id="hexagon-48"></div>
                      <div className="hexagon" id="hexagon-49"></div>
                      <div className="hexagon" id="hexagon-50"></div>
                    </div>
                    <div className="c8">
                      <div className="hexagon" id="hexagon-51"></div>
                      <div className="hexagon" id="hexagon-52"></div>
                      <div className="hexagon" id="hexagon-53"></div>
                      <div className="hexagon" id="hexagon-54"></div>
                      <div className="hexagon" id="hexagon-55"></div>
                      <div className="hexagon" id="hexagon-56"></div>
                    </div>
                    <div className="c9">
                      <div className="hexagon" id="hexagon-57"></div>
                      <div className="hexagon" id="hexagon-58"></div>
                      <div className="hexagon" id="hexagon-59"></div>
                      <div className="hexagon" id="hexagon-60"></div>
                      <div className="hexagon" id="hexagon-61"></div>
                    </div>
                  </div>
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
                  <div className="container-1">
                    <div className="row-1">
                      <h>Local Credentials</h>
                      <p>
                        Complexity :<span>low</span>
                      </p>
                      <p>
                        Severity :<span>Medium</span>
                      </p>
                    </div>
                    <div className="row-2">
                      <div>
                        <span>10</span>
                        <p>Affected entities</p>
                      </div>
                      <div>
                        <span>45%</span>
                        <p>Critical Assets at risk</p>
                      </div>
                    </div>
                    <div className="row-3">
                      <button>View Remediation</button>
                    </div>
                  </div>
                  <div className="container-1">
                    <div className="row-1">
                      <h>Local Credentials</h>
                      <p>
                        Complexity :<span>low</span>
                      </p>
                      <p>
                        Severity :<span>Medium</span>
                      </p>
                    </div>
                    <div className="row-2">
                      <div>
                        <span>10</span>
                        <p>Affected entities</p>
                      </div>
                      <div>
                        <span>45%</span>
                        <p>Critical Assets at risk</p>
                      </div>
                    </div>
                    <div className="row-3">
                      <button>View Remediation</button>
                    </div>
                  </div>
                  <div className="container-1">
                    <div className="row-1">
                      <h>Local Credentials</h>
                      <p>
                        Complexity :<span>low</span>
                      </p>
                      <p>
                        Severity :<span>Medium</span>
                      </p>
                    </div>
                    <div className="row-2">
                      <div>
                        <span>10</span>
                        <p>Affected entities</p>
                      </div>
                      <div>
                        <span>45%</span>
                        <p>Critical Assets at risk</p>
                      </div>
                    </div>
                    <div className="row-3">
                      <button>View Remediation</button>
                    </div>
                  </div>
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
