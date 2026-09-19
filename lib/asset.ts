/** public/ 以下のファイルへのパス（basePath を考慮） */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
