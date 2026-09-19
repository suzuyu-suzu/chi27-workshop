import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Organizers from "@/components/Organizers";
import PositionPapers from "@/components/PositionPapers";
import Schedule from "@/components/Schedule";
import Section from "@/components/Section";
import { about, callForParticipation, topics, when, where } from "@/content/site";
import { colors } from "@/theme/colors";

const Paragraphs = ({ items }: { items: string[] }) => (
  <Stack spacing={2}>
    {items.map((p, i) => (
      <Typography key={i}>{p}</Typography>
    ))}
  </Stack>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Box component="main" sx={{ position: "relative", bgcolor: colors.navy, pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={{ xs: 8, md: 11 }}>
            <Section id="about" title="About">
              <Paragraphs items={about} />
            </Section>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: { xs: 8, sm: 4 } }}>
              <Section id="where" title="Where">
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>{where.label}</Typography>
                <Typography sx={{ color: "text.secondary" }}>{where.detail}</Typography>
              </Section>
              <Section id="when" title="When">
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>{when.label}</Typography>
                <Typography sx={{ color: "text.secondary" }}>{when.detail}</Typography>
              </Section>
            </Box>

            <Section id="topics" title="What are the topics covered?">
              <Box component="ul" sx={{ m: 0, pl: 3, "& li::marker": { color: colors.yellow } }}>
                {topics.map((t) => (
                  <Typography component="li" key={t} sx={{ mb: 1 }}>
                    {t}
                  </Typography>
                ))}
              </Box>
            </Section>

            <Section id="schedule" title="1-Day Workshop Schedule">
              <Schedule />
            </Section>

            <Section id="organizers" title="Organizers">
              <Organizers />
            </Section>

            <Section id="call-for-participation" title="Call for Participation">
              <Paragraphs items={callForParticipation} />
            </Section>

            <Section id="position-papers" title="Position Papers">
              <PositionPapers />
            </Section>

            <Section id="faq" title="FAQ">
              <Faq />
            </Section>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
