import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const HealthCareDashboard = () => {
  const patientData = {
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    profile_picture: "https://fedskillstest.ct.digital/4.png",
    date_of_birth: "1996-08-23",
    phone_number: "(415) 555-1234",
    emergency_contact: "(415) 555-5678",
    insurance_type: "Sunrise Health Assurance",
  };

  const chartData = {
    labels: [
      "Oct 2023",
      "Nov 2023",
      "Dec 2023",
      "Jan 2024",
      "Feb 2024",
      "Mar 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: [140, 150, 145, 155, 160, 160],
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Diastolic",
        data: [80, 85, 82, 87, 78, 78],
        borderColor: "#36a2eb",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f6f7f8",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "20%",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Patients
        </Typography>
        <div>
          {[
            "Emily Williams",
            "Ryan Johnson",
            "Brandon Mitchell",
            "Jessica Taylor",
            "Samantha Johnson",
            "Ashley Martinez",
            "Olivia Brown",
            "Tyler Davis",
            "Kevin Anderson",
          ].map((name, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <Avatar
                alt={name}
                src={`https://randomuser.me/api/portraits/thumb/${
                  index % 2 === 0 ? "women" : "men"
                }/${index}.jpg`}
              />
              <Typography variant="body1" style={{ marginLeft: "10px" }}>
                {name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "80%", padding: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card style={{ marginBottom: "20px" }}>
              <CardContent>
                <Typography variant="h5">Diagnosis History</Typography>
                <Line data={chartData} options={chartOptions} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Avatar
                  alt={patientData.name}
                  src={patientData.profile_picture}
                  style={{ width: "150px", height: "150px", margin: "auto" }}
                />
                <Typography
                  variant="h5"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  {patientData.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Date of Birth:</strong>{" "}
                  {new Date(patientData.date_of_birth).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  <strong>Gender:</strong> {patientData.gender}
                </Typography>
                <Typography variant="body1">
                  <strong>Contact Info:</strong> {patientData.phone_number}
                </Typography>
                <Typography variant="body1">
                  <strong>Emergency Contacts:</strong>{" "}
                  {patientData.emergency_contact}
                </Typography>
                <Typography variant="body1">
                  <strong>Insurance Provider:</strong>{" "}
                  {patientData.insurance_type}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Show All Information
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HealthCareDashboard;
