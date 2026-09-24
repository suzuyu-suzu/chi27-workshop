import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { schedule } from "@/content/site";
import { displayTime, minutesBetween } from "@/lib/time";
import { colors } from "@/theme/colors";

export default function Schedule() {
  return (
    <Box>
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
                {displayTime(item.start)} – {displayTime(item.end)}
              </Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "text.secondary" }}>
                {minutesBetween(item.start, item.end)} minutes
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>{item.title}</Typography>

              {item.themes?.map((t) => (
                <Typography key={t.name} sx={{ color: "text.secondary", mt: 1 }}>
                  <Box component="span" sx={{ color: colors.yellow, fontWeight: 700 }}>
                    {t.name}:
                  </Box>{" "}
                  {t.question}
                </Typography>
              ))}

              {item.description?.map((d, i) => (
                <Typography key={i} sx={{ color: "text.secondary", mt: item.themes ? 1 : 0.5 }}>
                  {d}
                </Typography>
              ))}

              {item.note && (
                <Typography sx={{ color: "text.secondary", fontStyle: "italic", mt: 1 }}>{item.note}</Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {!schedule.startTime && (
        <Typography sx={{ mt: 1.5, fontSize: "0.85rem", color: "text.secondary" }}>
          Times are shown relative to the start of the workshop. The exact start time will be announced later.
        </Typography>
      )}
    </Box>
  );
}
