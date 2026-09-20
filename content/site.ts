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
  title: "The Future of Technology Mediated Motor Learning",
  dateBadge: "10 MAY 2027",
  designer: "Yuto Suzuki",
  designerUrl: "https://yutosuzuki.vercel.app/",
};

export const about: string[] = [
  "Emerging technologies such as multimodal feedback, wearable sensing, mixed reality, robotics, and artificial intelligence offer new ways to shape how people practice and experience movement. However, improved performance during technology-mediated practice does not necessarily result in lasting motor learning. This raises important questions about how these technologies should be designed, evaluated, and translated beyond controlled laboratory settings. This workshop brings together researchers and practitioners working at the intersection of HCI and motor learning to explore these challenges collaboratively. Through hands-on exploration, short presentations, breakout discussions, body-storming, and collaborative ideation, participants will share experiences, challenge current approaches, and explore how emerging technologies can support meaningful motor learning. We will connect perspectives across technologies and disciplines to identify design opportunities, methodological challenges, and open research questions, culminating in concrete directions for future research and collaboration."
];

export const where = {
  label: "Workshop at CHI'27",
  detail: "Pittsburgh, PA, USA",
};

export const when = {
  label: "Monday, 10 May 2027",
  detail: "09:00 – 15:00",
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


/* ---------------- Organizers ---------------- */

export type Organizer = {
  name: string;
  role: string;
  affiliation: string;
  /** 例: "/images/organizers/yuto.jpg"。未指定なら仮アイコン */
  photo?: string;
  url?: string;
  /** ORGANIZERS のカードを開くと表示される回答。未記入の人は「Coming soon.」 */
  motivation?: {
    /** motivationQuestions.excites への回答（1行＝1項目） */
    excites: string[];
    /** motivationQuestions.personal への回答（1行＝1項目） */
    personal: string[];
  };
};

/** ORGANIZERS のカードを開いたときに表示される質問文 */
export const motivationQuestions = {
  excites: "What question about technology-mediated motor learning excites you?",
  personal: "At a personal level, what would you like to get out of this workshop?",
};

export const organizers: Organizer[] = [
  { name: "Nihar Sabnis", url: "https://sms.hest.ethz.ch/the-group/team/nihar-sabnis.html", photo: "/images/organizers/nihar-sabnis.jpg", role: "Postdoc", affiliation: "ETH Zürich" },
  {
    name: "Yuto Suzuki",
    url: "https://yutosuzuki.vercel.app/",
    photo: "/images/organizers/yuto-suzuki.jpg",
    role: "Ph.D. Candidate",
    affiliation: "Hokkaido University",
    motivation: {
      excites: [
        "How can specific HCI artefacts developed with emerging technologies be transferred to other movement domains? For example, how could a technology that visualizes the difference between a golfer's posture and the correct swing posture be applied beyond golf?",
        "How can we encourage more research that attends to experiences, emotions, and lived experiences during motor learning, in a field dominated by positivist values? In other words, how might we bring about a qualitative turn in SportsHCI?",
        "How can we encourage more long-term studies in motor learning, where research is often conducted through laboratory experiments?",
      ],
      personal: [
        "Are there approaches that can be applied across multiple movement domains?",
        "What values and philosophical perspectives—such as constructivism, positivism, and interpretivism—underpin the work of HCI researchers who support motor learning?",
      ],
    },
  },
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
  { name: "José Manuel Vega-Cebrián", url: "https://imbodylab.com/2022/07/26/jose-manuel-vega-cebrian/", photo: "/images/organizers/jose-manuel-vega-cebrian.jpg", role: "Ph.D. Candidate", affiliation: "Universidad Carlos III de Madrid" },
  { name: "Peter Wolf", url: "https://sms.hest.ethz.ch/the-group/team/peter-wolf.html", photo: "/images/organizers/peter-wolf.jpg", role: "Senior Scientist", affiliation: "ETH Zürich" },
  {
    name: "Xiao Xiao",
    photo: "/images/organizers/xiao-xiao.jpg",
    url: "https://scholar.google.com/citations?user=tbqqAOYAAAAJ&hl=en",
    role: "Professor",
    affiliation: "De Vinci Higher Education", // 要確認
  },
  {
    name: "Joanna Bergström",
    photo: "/images/organizers/joanna-bergstrom.jpg",
    url: "https://scholar.google.com/citations?user=NL1Q89sAAAAJ&hl=en",
    role: "Associate Professor",
    affiliation: "University of Copenhagen",
  },
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

/* ---------------- Image credits ---------------- */

export type ImageCredit = {
  /** イラスト内のどの部分かの説明 */
  position: string;
  /** 出典の説明（著者・年など）。論文がある場合は title / url を使う */
  source: string;
  title?: string;
  /** 論文の DOI リンクなど。title に付きます */
  url?: string;
  venue?: string;
};

export const imageCredits: ImageCredit[] = [
  {
    position: "First-person XR view",
    source: "Suzuki et al. (2026)",
    title: "Toward Lived Metaphor: Exploring AR-Based Visual Metaphors for Instructing and Learning Embodied Knowledge in Aikido Practice",
    url: "https://dl.acm.org/doi/full/10.1145/3800645.3812858",
    venue: "DIS '26",
  },
  {
    position: "Robotic device on the right hand",
    source: "Lee et al. (2025)",
    title: "Hapticus: Exploring the Effects of Haptic Feedback and its Customization on Motor Skill Learning",
    url: "https://dl.acm.org/doi/full/10.1145/3706598.3713821",
    venue: "CHI '25",
  },
  {
    position: "Smartwatch on the left wrist",
    source: "Screenshot by Yuto Suzuki",
    url: "https://yutosuzuki.vercel.app/",
  },
  {
    position: "Light on the chest",
    source: "Turmo Vidal et al. (2020)",
    title: "BodyLights: Open-Ended Augmented Feedback to Support Training Towards a Correct Exercise Execution",
    url: "https://dl.acm.org/doi/abs/10.1145/3313831.3376268",
    venue: "CHI '20",
  },
  {
    position: "Augmented shoes",
    source: "Wittchen et al. (2023)",
    title: "Designing Interactive Shoes for Tactile Augmented Reality",
    url: "https://dl.acm.org/doi/abs/10.1145/3582700.3582728",
    venue: "AHs '23",
  },
  {
    position: "Illustration",
    source: "Yuto Suzuki",
    url: "https://yutosuzuki.vercel.app/",
  },
];

/* ---------------- FAQ ---------------- */

export const faq: { question: string; answer: string }[] = [
  { question: "How do I attend the workshop?", answer: LOREM },
  { question: "Can I participate remotely?", answer: LOREM },
  { question: "Do I need to register for CHI'27?", answer: LOREM },
  { question: "How do I submit a position paper?", answer: LOREM },
];
