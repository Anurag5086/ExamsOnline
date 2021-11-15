import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AlignItemsList from "../../page-components/Teacher/List";

function StuDashboard() {
  return (
    <div>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={6} style={{padding: '2rem'}}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" color="text.secondary" gutterBottom style={{textAlign: 'center'}}>
                    TESTS
                  </Typography>
                  <ol>
                  <li>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                      <p>OOSE CLASS TEST-1</p>
                      <p>17/08/2021</p>
                    </div>
                  </Typography>
                  </li>
                  <li>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                      <p>MDA CLASS TEST-1</p>
                      <p>20/10/2021</p>
                    </div>
                  </Typography>
                  </li>
                  <li>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                      <p>ADA CLASS TEST-1</p>
                      <p>7/09/2021</p>
                    </div>
                  </Typography>
                  </li>
                  </ol>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6} style={{padding: '2rem'}}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" color="text.secondary" gutterBottom style={{textAlign: "center"}}>
                    SCHEDULED TESTS
                  </Typography>
                  <ol>
                  <li>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                      <p>OOSE CLASS TEST-2</p>
                      <p>17/11/2021</p>
                    </div>
                  </Typography>
                  </li>
                  <li>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                      <p>OOSE CLASS TEST-2</p>
                      <p>17/11/2021</p>
                    </div>
                  </Typography>
                  </li>
                  <li>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                      <p>OOSE CLASS TEST-2</p>
                      <p>17/11/2021</p>
                    </div>
                  </Typography>
                  </li>
                  </ol>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} style={{padding: '2rem'}}>
            <Card variant="outlined">
              <Typography
                variant="h5"
                color="GrayText.secondary"
                style={{ textAlign: "center", padding: "1rem" }}
              >
                IMPORTANT NOTICES
              </Typography>
              <AlignItemsList />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default StuDashboard;
