import Link from "@mui/material/Link";
import { colors } from "@/theme/colors";

/** 文章中の [表示テキスト](URL) をリンクに変換して表示します */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)\s]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
        if (!match) return part;
        return (
          <Link
            key={i}
            href={match[2]}
            target="_blank"
            rel="noopener"
            sx={{ color: colors.yellow, textDecorationColor: "currentcolor" }}
          >
            {match[1]}
          </Link>
        );
      })}
    </>
  );
}
