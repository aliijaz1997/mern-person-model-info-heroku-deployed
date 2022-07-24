import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import PersonIcon from "@mui/icons-material/Person"
import { Link } from "@mui/material"

export function Layout({ children }: { children: React.ReactNode }) {
  const pages = ["Persons List", "Submission Form"]
  return (
    <Box>
      <AppBar position="relative" sx={{ bgcolor: "#800080" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PersonIcon sx={{ display: "flex", mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: "flex",
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none"
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                component={Link}
                href="/"
                sx={{
                  my: 2,
                  mx: 2,
                  display: "block",
                  bgcolor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#3c52b2"
                  }
                }}
              >
                Persons List
              </Button>
              <Button
                variant="contained"
                component={Link}
                href="/create"
                sx={{
                  my: 2,
                  mx: 2,
                  display: "block",
                  bgcolor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#3c52b2"
                  }
                }}
              >
                Submission Form
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </Box>
  )
}
