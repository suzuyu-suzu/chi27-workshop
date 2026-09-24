import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { faq } from "@/content/site";
import { colors } from "@/theme/colors";

export default function Faq() {
  return (
    <div>
      {faq.map((item, i) => (
        <Accordion
          key={i}
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
            aria-controls={`faq-${i}-content`}
            id={`faq-${i}-header`}
            sx={{
              px: 0,
              py: 1,
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "rotate(45deg)" },
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0, pt: 0, pb: 3 }}>
            <Stack spacing={1.5}>
              {item.answer.map((paragraph, j) => (
                <Typography key={j} sx={{ color: "text.secondary" }}>
                  {paragraph}
                </Typography>
              ))}
              {item.links?.map((l) => (
                <Link
                  key={l.url + l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener"
                  sx={{ color: colors.yellow, fontWeight: 700, width: "fit-content" }}
                >
                  {l.label}
                </Link>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
