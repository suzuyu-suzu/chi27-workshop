import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { schedule } from "@/content/site";
import { minutesBetween } from "@/lib/time";

export default function Schedule() {
  return (
    <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {schedule.items.map((item) => (
        <Box
          component="li"
          key={item.start}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
            gap: { xs: 0.5, sm: 3 },
            py: 2.5,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              {item.start} – {item.end}
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", color: "text.secondary" }}>
              {minutesBetween(item.start, item.end)} minutes
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>{item.title}</Typography>
            {item.description && (
              <Typography sx={{ color: "text.secondary" }}>{item.description}</Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
