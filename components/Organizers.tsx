import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { organizers } from "@/content/site";
import { asset } from "@/lib/asset";

export default function Organizers() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)" },
        columnGap: 2,
        rowGap: { xs: 4, md: 5 },
      }}
    >
      {organizers.map((o, i) => (
        <Box key={`${o.name}-${i}`} sx={{ textAlign: "center" }}>
          <Avatar
            src={o.photo ? asset(o.photo) : undefined}
            alt={o.name}
            sx={{
              width: { xs: 96, md: 120 },
              height: { xs: 96, md: 120 },
              mx: "auto",
              mb: 1.5,
              bgcolor: "rgba(255,255,255,0.12)",
            }}
          >
            <PersonIcon sx={{ fontSize: { xs: 56, md: 72 }, color: "rgba(255,255,255,0.6)" }} />
          </Avatar>
          <Typography sx={{ fontWeight: 700, lineHeight: 1.3 }}>
            {o.url ? (
              <Link href={o.url} target="_blank" rel="noopener" color="inherit" underline="hover">
                {o.name}
              </Link>
            ) : (
              o.name
            )}
          </Typography>
          <Typography sx={{ fontSize: "0.9rem", color: "text.secondary", lineHeight: 1.4 }}>{o.role}</Typography>
          <Typography sx={{ fontSize: "0.9rem", color: "text.secondary", lineHeight: 1.4 }}>{o.affiliation}</Typography>
        </Box>
      ))}
    </Box>
  );
}
