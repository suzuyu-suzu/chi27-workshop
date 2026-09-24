import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { motivationQuestions, organizers, type Organizer } from "@/content/site";
import { asset } from "@/lib/asset";
import { colors } from "@/theme/colors";

const Photo = ({ o, size }: { o: Organizer; size: { xs: number; md: number } }) => (
  <Avatar
    src={o.photo ? asset(o.photo) : undefined}
    alt={o.name}
    sx={{ width: size, height: size, flexShrink: 0, bgcolor: "rgba(255,255,255,0.12)" }}
  >
    <PersonIcon sx={{ fontSize: { xs: size.xs * 0.58, md: size.md * 0.58 }, color: "rgba(255,255,255,0.6)" }} />
  </Avatar>
);

const Name = ({ o }: { o: Organizer }) =>
  o.url ? (
    <Link href={o.url} target="_blank" rel="noopener" color="inherit" underline="hover">
      {o.name}
    </Link>
  ) : (
    <>{o.name}</>
  );

const Answers = ({ question, items }: { question: string; items: string[] }) => (
  <Box sx={{ mb: 3 }}>
    <Typography sx={{ fontWeight: 700, color: colors.yellow, mb: 1 }}>{question}</Typography>
    <Box component="ul" sx={{ m: 0, pl: 3, "& li::marker": { color: colors.pink } }}>
      {items.map((a, i) => (
        <Typography component="li" key={i} sx={{ mb: 1, color: "text.secondary" }}>
          {a}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default function Organizers() {
  return (
    <Box>
      {/* 顔写真のグリッド */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)" },
          columnGap: 2,
          rowGap: { xs: 4, md: 5 },
          mb: { xs: 6, md: 8 },
        }}
      >
        {organizers.map((o) => (
          <Box key={o.name} sx={{ textAlign: "center" }}>
            <Box sx={{ mb: 1.5, display: "flex", justifyContent: "center" }}>
              <Photo o={o} size={{ xs: 96, md: 120 }} />
            </Box>
            <Typography sx={{ fontWeight: 700, lineHeight: 1.3 }}>
              <Name o={o} />
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "text.secondary", lineHeight: 1.4 }}>{o.role}</Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "text.secondary", lineHeight: 1.4 }}>
              {o.affiliation}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* モチベーション：名前をクリックすると回答が開く */}
      <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", mb: 0.5 }}>Why we are organizing this workshop</Typography>
      <Typography sx={{ color: "text.secondary", mb: 3 }}>
        Click a name to read what each organizer is hoping for.
      </Typography>

      {organizers.map((o) => (
        <Accordion
          key={o.name}
          disableGutters
          elevation={0}
          square
          sx={{
            bgcolor: "transparent",
            borderBottom: "1px solid rgba(255,255,255,0.25)",
            "&::before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: colors.yellow }} />}
            aria-controls={`motivation-${o.name}-content`}
            id={`motivation-${o.name}-header`}
            sx={{
              px: 0,
              py: 1,
              "& .MuiAccordionSummary-content": { alignItems: "center", gap: 2, my: 1 },
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "rotate(45deg)" },
            }}
          >
            <Photo o={o} size={{ xs: 48, md: 56 }} />
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.3 }}>{o.name}</Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "text.secondary" }}>
                {o.role}, {o.affiliation}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0, pt: 0, pb: 2, pl: { xs: 0, sm: 9 } }}>
            {o.motivation ? (
              <>
                {o.motivation.excites.length > 0 && (
                  <Answers question={motivationQuestions.excites} items={o.motivation.excites} />
                )}
                {o.motivation.personal.length > 0 && (
                  <Answers question={motivationQuestions.personal} items={o.motivation.personal} />
                )}
              </>
            ) : (
              <Typography sx={{ color: "text.secondary" }}>Coming soon.</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
