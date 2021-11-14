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
          <Grid item xs={6}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    TESTS
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    OOSE CLASS TEST-1
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    OOSE CLASS TEST-1
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    OOSE CLASS TEST-1
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    SCHEDULED TESTS
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    OOSE CLASS TEST-1
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    OOSE CLASS TEST-1
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    OOSE CLASS TEST-1
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12}>
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
