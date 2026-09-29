import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { images, site, submission } from "@/content/site";
import { asset } from "@/lib/asset";
import { colors } from "@/theme/colors";

export default function Hero() {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        zIndex: 1, // 人物の足元が下の紺色セクションに重なるように
        // 1枚目: 橋（横に繰り返し） / 2枚目: 空のグラデーション
        backgroundImage: `url("${asset(images.background)}"), linear-gradient(180deg, ${colors.skyTop} 0%, ${colors.skyBottom} 100%)`,
        backgroundRepeat: "repeat-x, no-repeat",
        backgroundSize: { xs: "auto 96px, 100% 100%", sm: "auto 140px, 100% 100%", md: "auto 190px, 100% 100%" },
        backgroundPosition: {
          xs: "center bottom 28px, 0 0",
          sm: "center bottom 40px, 0 0",
          md: "center bottom 64px, 0 0",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
          justifyContent: "space-between",
          gap: { xs: 3, md: 4 },
          minHeight: { md: "min(100vh, 860px)" },
          pt: { xs: 6, md: 0 },
        }}
      >
        {/* タイトル・日付 */}
        <Box
          sx={{
            flex: 1,
            alignSelf: { xs: "stretch", md: "flex-start" },
            pt: { md: 14 },
            textAlign: { xs: "center", md: "left" },
            color: colors.navy,
          }}
        >
          <Typography
            sx={{ fontWeight: 700, letterSpacing: "0.2em", fontSize: { xs: "0.95rem", md: "1.1rem" }, mb: 2 }}
          >
            {site.conference} WORKSHOP
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.4rem", lg: "3.9rem" }, maxWidth: 640, mx: { xs: "auto", md: 0 } }}
          >
            {site.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: { xs: 2, md: 4 },
              mt: { xs: 3, md: 4 },
            }}
          >
          <Box
            sx={{
              display: "inline-block",
              px: 2.5,
              py: 1,
              border: `3px solid ${colors.navy}`,
              fontWeight: 700,
              fontSize: { xs: "1.1rem", md: "1.35rem" },
              letterSpacing: "0.12em",
              bgcolor: "rgba(255,255,255,0.6)",
            }}
          >
            {site.dateBadge}
          </Box>

          {/* 応募フォームへのボタン（タブのアイコンと同じピンクの星） */}
          <Box
            component="a"
            href={submission.url}
            target="_blank"
            rel="noopener"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              flexShrink: 0,
              position: { xs: "static", md: "absolute" },
              left: { md: 16, lg: 40 },
              bottom: { md: -40 },
              zIndex: 4,
              width: { xs: 168, md: 240, lg: 280 },
              height: { xs: 168, md: 240, lg: 280 },
              // タブのアイコン（app/icon.svg）と同じ4点星
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='${colors.pink}' d='M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z'/></svg>`,
              )}")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              color: colors.white,
              fontWeight: 700,
              lineHeight: 1.25,
              fontSize: { xs: "0.75rem", md: "1.1rem" },
              textDecoration: "none",
              transform: "rotate(-6deg)",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "rotate(0deg) scale(1.05)" },
            }}
          >
            <Box component="span" sx={{ width: "46%" }}>
              {submission.label}
            </Box>
          </Box>
          </Box>
        </Box>

        {/* 人物絵：足元が波線の下に来る */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            flexShrink: 0,
            width: { xs: "86%", sm: "62%", md: "46%" },
            maxWidth: 600,
            transform: { xs: "translateY(12%)", md: "translateY(10%)" },
            mt: { md: 4 },
          }}
        >
          <Box
            component="img"
            src={asset(images.character)}
            alt="Illustration of a person wearing a VR headset and wearable devices for motor learning"
            sx={{ display: "block", width: "100%", height: "auto" }}
          />
        </Box>
      </Container>


      {/* イラストの出典へのリンク（ページ末尾の Image credits へ移動） */}
      <Typography
        component="a"
        href="#image-credits"
        sx={{
          position: "absolute",
          zIndex: 3,
          right: { xs: 16, md: 32 },
          // 背景と重ならないよう、波線の下（紺色の側）に置く
          bottom: { xs: -34, md: -44 },
          fontSize: { xs: "0.65rem", md: "0.75rem" },
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: colors.white,
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        Image credits
        {/* 矢印は文字ではなくアイコン（スマホで絵文字になるのを防ぐ） */}
        <ArrowOutwardIcon sx={{ fontSize: "1.1em" }} />
      </Typography>
      {/* 波線（ヒーローと本文の境界） */}
      <Box
        component="svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
        sx={{
          position: "absolute",
          left: 0,
          bottom: -1,
          width: "100%",
          height: { xs: 56, md: 110 },
          zIndex: 1,
          display: "block",
        }}
      >
        <path d="M0,70 C300,-10 640,0 980,70 C1180,112 1340,108 1440,88 L1440,120 L0,120 Z" fill={colors.navy} />
      </Box>
    </Box>
  );
}
