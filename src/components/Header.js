import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Custom API
          </Link>
        </nav>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Dark Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
}
