import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarDivider from "./StarDivider";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <Box component="section" id={id} sx={{ scrollMarginTop: 24 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, mb: 1.5 }}>
        {title}
      </Typography>
      <StarDivider />
      <Box sx={{ mt: { xs: 3, md: 4 } }}>{children}</Box>
    </Box>
  );
}
