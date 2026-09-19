import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { positionPapers } from "@/content/site";
import { asset } from "@/lib/asset";
import { colors } from "@/theme/colors";

export default function PositionPapers() {
  return (
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {positionPapers.map((p, i) => (
        <Box
          component="li"
          key={`${p.title}-${i}`}
          sx={{
            display: "flex",
            gap: { xs: 2, md: 3 },
            alignItems: "flex-start",
            py: 2.5,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Link
            href={asset(p.pdf)}
            target="_blank"
            rel="noopener"
            underline="none"
            aria-label={`PDF: ${p.title}`}
            sx={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: colors.pink,
              fontSize: "0.75rem",
              fontWeight: 700,
              "&:hover": { color: colors.yellow },
            }}
          >
            <PictureAsPdfIcon sx={{ fontSize: 40 }} />
            PDF
          </Link>
          <Box>
            <Link
              href={asset(p.pdf)}
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 700, fontSize: "1.1rem" }}
            >
              {p.title}
            </Link>
            <Typography sx={{ color: "text.secondary" }}>{p.authors.join(", ")}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
