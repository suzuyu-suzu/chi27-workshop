import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid rgba(255,255,255,0.25)", py: { xs: 4, md: 5 } }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography sx={{ fontWeight: 700 }}>
          {site.conference} — {site.title}
        </Typography>
        <Typography sx={{ fontSize: "0.9rem", color: "text.secondary", mt: 0.5 }}>
          Designed by{" "}
          <Link href={site.designerUrl} target="_blank" rel="noopener" color="inherit" underline="always">
            {site.designer}
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
