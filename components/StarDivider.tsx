import Box from "@mui/material/Box";
import { colors } from "@/theme/colors";

// 4点星（辺が内側に反った形）
const star = (x: number, fill: string) =>
  `<path transform='translate(${x} 0)' fill='${fill}' d='M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z'/>`;

const tile = `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='24' viewBox='0 0 48 24'>${star(0, colors.yellow)}${star(24, colors.pink)}</svg>`;
const tileUrl = `url("data:image/svg+xml,${encodeURIComponent(tile)}")`;

/** 黄・ピンク・黄・ピンク…と星が並ぶ下線 */
export default function StarDivider({ height = 18 }: { height?: number }) {
  return (
    <Box
      aria-hidden
      sx={{
        height,
        width: "min(100%, 520px)",
        backgroundImage: tileUrl,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
      }}
    />
  );
}
