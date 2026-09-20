import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { imageCredits } from "@/content/site";
import { colors } from "@/theme/colors";

export default function ImageCredits() {
  return (
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {imageCredits.map((c) => (
        <Box
          component="li"
          key={c.position}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "240px 1fr" },
            gap: { xs: 0.5, sm: 3 },
            py: 2,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Typography sx={{ fontWeight: 700, color: colors.yellow, fontSize: "0.95rem" }}>{c.position}</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
            {c.title ? (
              <>
                {c.source}.{" "}
                <Link href={c.url} target="_blank" rel="noopener" color="inherit" underline="always">
                  {c.title}
                </Link>
                {c.venue ? `. ${c.venue}.` : "."}
              </>
            ) : c.url ? (
              <Link href={c.url} target="_blank" rel="noopener" color="inherit" underline="always">
                {c.source}
              </Link>
            ) : (
              c.source
            )}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
