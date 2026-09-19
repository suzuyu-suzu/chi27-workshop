/**
 * サイトの文章・データはすべてこのファイルで編集できます。
 * 「Lorem ipsum」や「TBD」は仮置きのテキストです。
 */

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const images = {
  // 背景画像（ヒーロー下部に横に繰り返して表示）
  background: "/images/background.png",
  character: "/images/character.png",
};

export const site = {
  conference: "CHI'27",
  title: "The Future of Technology-Mediated Motor Learning",
  dateBadge: "10 MAY 2027",
  designer: "Yuto Suzuki",
  designerUrl: "https://yutosuzuki.vercel.app/",
};

export const about: string[] = [
  "Emerging technologies such as multimodal feedback, wearable sensing, mixed reality, robotics, and artificial intelligence offer new ways to shape how people practice and experience movement. However, improved performance during technology-mediated practice does not necessarily result in lasting motor learning. This raises important questions about how these technologies should be designed, evaluated, and translated beyond controlled laboratory settings. This workshop brings together researchers and practitioners working at the intersection of HCI and motor learning to explore these challenges collaboratively. Through hands-on exploration, short presentations, breakout discussions, body-storming, and collaborative ideation, participants will share experiences, challenge current approaches, and explore how emerging technologies can support meaningful motor learning. We will connect perspectives across technologies and disciplines to identify design opportunities, methodological challenges, and open research questions, culminating in concrete directions for future research and collaboration."
];

export const where = {
  label: "Hybrid Workshop at CHI'27",
  detail: "Pittsburgh, PA, USA & Online",
};

export const when = {
  label: "Monday, 10 May 2027",
  detail: "09:00 – 15:00 (EDT, UTC−4)",
};

export const topics: string[] = [
  "Topic 1 — TBD",
  "Topic 2 — TBD",
  "Topic 3 — TBD",
  "Topic 4 — TBD",
];

/* ---------------- Schedule ---------------- */

/** 開催地（ピッツバーグ）の現地時刻で記入。他都市の時刻は自動計算されます */
export const schedule = {
  date: "2027-05-10",
  hostTimeZone: "America/New_York",
  hostUtcOffset: "-04:00",
  start: "09:00",
  end: "15:00",
  items: [
    {
      start: "09:00",
      end: "09:20",
      title: "Introducing the Workshop",
      description: "On-boarding and Introduction",
    },
    { start: "09:20", end: "10:30", title: "Position Paper Presentations", description: "TBD" },
    { start: "10:30", end: "10:45", title: "Coffee Break", description: "" },
    { start: "10:45", end: "12:00", title: "Session 2", description: "TBD" },
    { start: "12:00", end: "13:00", title: "Lunch Break", description: "" },
    { start: "13:00", end: "14:30", title: "Session 3", description: "TBD" },
    { start: "14:30", end: "15:00", title: "Wrap-up and Closing", description: "TBD" },
  ],
};

export const cities = [
  { name: "Pittsburgh", timeZone: "America/New_York" },
  { name: "San Francisco", timeZone: "America/Los_Angeles" },
  { name: "Berlin", timeZone: "Europe/Berlin" },
  { name: "New Delhi", timeZone: "Asia/Kolkata" },
  { name: "Tokyo", timeZone: "Asia/Tokyo" },
];

/* ---------------- Organizers ---------------- */

export type Organizer = {
  name: string;
  role: string;
  affiliation: string;
  /** 例: "/images/organizers/yuto.jpg"。未指定なら仮アイコン */
  photo?: string;
  url?: string;
};

export const organizers: Organizer[] = [
  { name: "Nihar Sabnis", url: "https://sms.hest.ethz.ch/the-group/team/nihar-sabnis.html", photo: "/images/organizers/nihar-sabnis.jpg", role: "Postdoc", affiliation: "ETH Zürich" },
  { name: "Yuto Suzuki", url: "https://yutosuzuki.vercel.app/", photo: "/images/organizers/yuto-suzuki.jpg", role: "Ph.D. Student", affiliation: "Hokkaido University" },
  {
    name: "Ana Tajadura-Jiménez", url: "https://www.dei.inf.uc3m.es/portal/index.php?page=people-personal&id=1234", photo: "/images/organizers/ana-tajadura-jimenez.jpg",
    role: "Associate Professor",
    affiliation: "Universidad Carlos III de Madrid / University College London",
  },
  { name: "Jun Nishida", url: "https://junis.sakura.ne.jp/wp/", photo: "/images/organizers/jun-nishida.jpg", role: "Assistant Professor", affiliation: "University of Maryland" },
  { name: "Donald Degraen", url: "https://donalddegraen.com/", photo: "/images/organizers/donald-degraen.jpg", role: "Lecturer / Assistant Professor", affiliation: "University of Canterbury" },
  { name: "Laia Turmo Vidal", url: "https://laiatv.github.io/", photo: "/images/organizers/laia-turmo-vidal.jpg", role: "Assistant Professor", affiliation: "KTH Royal Institute of Technology" },
  { name: "Don Samitha Elvitigala", url: "https://samithaelvitigala.com/", photo: "/images/organizers/don-samitha-elvitigala.jpg", role: "Lecturer / Assistant Professor", affiliation: "Monash University" },
  { name: "Robert Riener", url: "https://sms.hest.ethz.ch/the-group/team/robert-riener.html", photo: "/images/organizers/robert-riener.jpg", role: "Professor", affiliation: "ETH Zürich" },
  { name: "José Manuel Vega-Cebrián", url: "https://imbodylab.com/2022/07/26/jose-manuel-vega-cebrian/", photo: "/images/organizers/jose-manuel-vega-cebrian.jpg", role: "Postdoc", affiliation: "Universidad Carlos III de Madrid" },
  { name: "Peter Wolf", url: "https://sms.hest.ethz.ch/the-group/team/peter-wolf.html", photo: "/images/organizers/peter-wolf.jpg", role: "Senior Scientist", affiliation: "ETH Zürich" },
];

/* ---------------- Call for Participation ---------------- */

export const callForParticipation: string[] = [LOREM, LOREM];

/* ---------------- Position Papers ---------------- */

export type PositionPaper = {
  title: string;
  authors: string[];
  /** public/ 以下の PDF パス */
  pdf: string;
};

export const positionPapers: PositionPaper[] = [
  { title: "Position Paper Title 1", authors: ["Name 1", "Name 2"], pdf: "/papers/sample.pdf" },
  { title: "Position Paper Title 2", authors: ["Name 1", "Name 2", "Name 3"], pdf: "/papers/sample.pdf" },
  { title: "Position Paper Title 3", authors: ["Name 1"], pdf: "/papers/sample.pdf" },
];

/* ---------------- FAQ ---------------- */

export const faq: { question: string; answer: string }[] = [
  { question: "How do I attend the workshop?", answer: LOREM },
  { question: "Can I participate remotely?", answer: LOREM },
  { question: "Do I need to register for CHI'27?", answer: LOREM },
  { question: "How do I submit a position paper?", answer: LOREM },
];
