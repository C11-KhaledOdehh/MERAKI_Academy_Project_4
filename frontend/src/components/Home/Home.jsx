import React, { useState, useEffect }from "react";
 import axios from "axios";
 import {useNavigate} from "react-router-dom";
 import { Form, Card } from 'react-bootstrap';
 import './home.css'
const Home = () => {
  const [job, setJob] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

    const Job = () => {
      axios
        .get("http://localhost:5000/job")
        .then((result) => {
       setJob(result.data.jobs)
        })
        .catch((err) => {
          console.log("err", err);
        });
 };
 useEffect(() => {
  Job();
}, []);
const filteredJobs = job.filter((job) =>
  job.jobTitle.toLowerCase().includes(search.toLowerCase())
);
return (
  <div>
    <div className="search">
  <Form.Group>
    <Form.Control
      type="text"
      placeholder="Search job titles..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </Form.Group>
</div>
  {filteredJobs.map((job, i) => {
    const date = new Date(job.date);
    const today = new Date();
    const timeDiff = today - date;
    const daysSincePosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return (
      <Card className="jobHome"  key={i} style={{ backgroundColor: 'rgb(243, 243, 243)' }} onClick={() => navigate(`/jobDetail/${job._id}`)}>
          <div className="row no-gutters">
            <div className="col-auto pr-3">
              <Card.Img src={job.employer.companyLogo} alt="Company Logo" style={{height: "100px", width: "100px",margin: "10px " }} />
            </div>
            <div className="col">
              <Card.Body>
                <Card.Title>{job.jobTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.employer.companyName || "Unknown Company"}</Card.Subtitle>
                <Card.Text>{job.description}</Card.Text>
                {daysSincePosted > 0 ? (
    <Card.Text>Posted {daysSincePosted} days ago</Card.Text>
  ) : (
    <Card.Text>Posted Today</Card.Text>)}
                
              </Card.Body>
            </div>
          </div>
        </Card>
    );
  })}

</div>
);
};

export default Home;