import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { cities, schedule } from "@/content/site";
import { formatDate, formatRange, hostTime, minutesBetween, utcLabel } from "@/lib/time";
import { colors } from "@/theme/colors";

export default function Schedule() {
  const start = hostTime(schedule.start);
  const end = hostTime(schedule.end);

  return (
    <Box>
      {/* 各都市の開催時刻 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)" },
          gap: { xs: 1.5, md: 2 },
          mb: { xs: 4, md: 5 },
        }}
      >
        {cities.map((c, i) => (
          <Box
            key={c.name}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid rgba(255,255,255,0.25)",
              bgcolor: i === 0 ? "rgba(244,179,43,0.14)" : "rgba(255,255,255,0.05)",
              borderColor: i === 0 ? colors.yellow : "rgba(255,255,255,0.25)",
            }}
          >
            {/* 5列表示では都市名が折り返すことがあるので、全カードで2行分の高さを確保して UTC の位置を揃える */}
            <Typography
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontSize: "0.9rem",
                lineHeight: 1.4,
                minHeight: { md: "2.8em" },
              }}
            >
              {c.name}
            </Typography>
            <Typography sx={{ color: colors.yellow, fontWeight: 700, fontSize: "0.8rem", mb: 1 }}>
              {utcLabel(start, c.timeZone)}
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", color: "text.secondary" }}>
              {formatDate(start, c.timeZone)}
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", md: "1rem" } }}>
              {formatRange(start, end, c.timeZone)}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* プログラム */}
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
      <Typography sx={{ mt: 1.5, fontSize: "0.85rem", color: "text.secondary" }}>
        Program times are shown in Pittsburgh local time ({utcLabel(start, schedule.hostTimeZone)}).
      </Typography>
    </Box>
  );
}
