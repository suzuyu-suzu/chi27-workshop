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
  title: "From Interaction to Learning: Technology-Mediated Motor Learning in HCI",
  dateBadge: "10 MAY 2027",
  designer: "Yuto Suzuki",
  designerUrl: "https://yutosuzuki.vercel.app/",
};

export const about: string[] = [
  "Emerging technologies such as multimodal feedback, wearable sensing, mixed reality, robotics, and artificial intelligence offer new ways to shape how people practice and experience movement. Yet, improved performance during technology-mediated practice does not necessarily result in lasting motor learning. This raises questions about how technology should support, evaluate, and translate motor learning across different people, skills, and contexts.",
  "Research addressing these questions is distributed across technologies and movement domains, with researchers and labs often pursuing related questions independently. This workshop provides a platform to bring these perspectives together and explore what can be learned across domains.",
  "Through short presentations, hands-on exploration, breakout discussions and collaborative ideation, participants will examine four interconnected questions around embodied learning, feedback and assistance, transfer, and evaluation and translation. We will synthesize these discussions into shared challenges, design opportunities, open research questions, and outline concrete directions for future research and collaboration.",
];

export const where = {
  label: "Workshop at CHI'27",
  detail: "Pittsburgh, PA, USA",
};

export const when = {
  label: "Monday, 10 May 2027",
  detail: "Half-day workshop (4 hours)",
};

export const topics = {
  intro: [
    "Technology-Mediated Motor Learning workshop is an interactive workshop aimed at bringing together researchers, practitioners, and designers interested in how emerging technologies can support people in learning, refining, and transferring motor skills. We invite contributions from researchers working with multimodal feedback, wearables, mixed reality, robotics, AI, embodied interaction, and related technologies across movement domains such as sports, rehabilitation, music, dance, and everyday activities.",
    "The workshop will focus on four interconnected questions:",
  ],
  questions: [
    {
      name: "Embodied and experiential learning",
      question: "How do perception, emotion, motivation, and lived experience shape motor learning?",
    },
    {
      name: "Feedback and technological assistance",
      question:
        "What and how much information and assistance should technology provide, and how should these change as learners develop?",
    },
    {
      name: "Transfer across skills and contexts",
      question: "What can transfer across movements, activities, and domains?",
    },
    {
      name: "Evaluation and translation",
      question:
        "How can lasting motor learning be evaluated and supported beyond controlled laboratory studies?",
    },
  ],
};

/* ---------------- Schedule ---------------- */

export type ScheduleItem = {
  /** ワークショップ開始からの経過時間 "HH:MM" */
  start: string;
  end: string;
  title: string;
  /** 補足の文章（1行＝1段落） */
  description?: string[];
  /** ブレイクアウトのテーマ */
  themes?: { name: string; question: string }[];
  /** 斜体で表示される補足 */
  note?: string;
};

export const schedule = {
  /**
   * 開始時刻が決まったら "09:00" のように設定してください。
   * null のままだと、開始からの経過時間（00:00 起点）で表示されます。
   */
  startTime: null as string | null,
  items: [
    {
      start: "00:00",
      end: "00:10",
      title: "Opening: Introducing the Workshop",
      description: ["5 minutes onboarding; 5 minutes introduction to workshop."],
    },
    {
      start: "00:10",
      end: "00:30",
      title: "Explore: Research Demonstrations",
      description: [
        "Hands-on exploration of participant prototypes and technologies for movement and motor learning.",
      ],
    },
    {
      start: "00:30",
      end: "00:45",
      title: "Lightning Talks and Q&A",
      description: [
        "Short presentations introducing half the participants' position papers, work, experiences, and questions.",
      ],
    },
    {
      start: "00:45",
      end: "00:50",
      title: "Frame the Questions and Form Groups",
      description: ["Introduction to the four workshop questions and formation of breakout groups."],
    },
    {
      start: "00:50",
      end: "01:30",
      title: "Breakout Session #1: Learning in the Interaction",
      themes: [
        {
          name: "Theme 1 — Embodied and experiential learning",
          question: "How do perception, emotion, motivation, and lived experience shape motor learning?",
        },
        {
          name: "Theme 2 — Feedback and technological assistance",
          question: "What information should technology provide, and how should assistance evolve with learning?",
        },
      ],
      description: ["30 minutes group discussion; 5 minutes sharing key insights; 5 minutes plenary discussion."],
      note: "Groups will identify 2–3 key challenges or tensions and develop one concrete research question or design opportunity.",
    },
    { start: "01:30", end: "02:30", title: "Break and Networking" },
    {
      start: "02:30",
      end: "02:45",
      title: "Lightning Talks and Q&A",
      description: [
        "Short presentations from the remaining participants about additional perspectives, movement domains, and technologies.",
      ],
    },
    {
      start: "02:45",
      end: "03:25",
      title: "Breakout Session #2: Learning Beyond the Interaction",
      themes: [
        {
          name: "Theme 3 — Transfer across skills and contexts",
          question: "What can transfer across movements, domains, and contexts?",
        },
        {
          name: "Theme 4 — Evaluation and translation",
          question:
            "How can lasting learning be evaluated and translated beyond controlled laboratory settings?",
        },
      ],
      description: ["30 minutes group discussion; 5 minutes sharing key insights; 5 minutes plenary discussion."],
      note: "Groups will identify 2–3 cross-domain opportunities or methodological challenges and develop one concrete direction for future research.",
    },
    {
      start: "03:25",
      end: "04:00",
      title: "Synthesize and Conclude",
      description: [
        "20 minutes connecting insights across groups and identifying recurring challenges and opportunities.",
        "15 minutes defining open research questions, future collaborations, and next steps.",
      ],
    },
  ] as ScheduleItem[],
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
  {
    name: "Nihar Sabnis",
    role: "Postdoc",
    affiliation: "ETH Zürich",
    photo: "/images/organizers/nihar-sabnis.jpg",
    url: "https://sms.hest.ethz.ch/the-group/team/nihar-sabnis.html",
    motivation: {
      excites: [
        "On a more everyday research level, I am struggling with mapping the technology design space with the movements to be taught, because of the sheer number of possibilities for both aspects.",
        "On a broader level, I am interested in designing technology which feels like a part of the human body and not apart from it, and to use such technology to create lasting impacts beyond the interaction level in the lives of people.",
        "I am also curious to design technologies for motor learning while taking into consideration the perceptual mechanisms underlying our sensorimotor system. For example, when we walk on different surfaces, our gait pattern changes based on the surface we are walking on. Can we then create artificial surfaces to improve someone's gait pattern?",
      ],
      personal: [
        "Bringing together researchers and labs working in technology-mediated motor learning fields in isolation.",
        "Beyond the initial interaction through the medium of a workshop, I also want to provide a space for long-term discussions, collaborations and creating a platform.",
        "Also it is important for me to share the challenges and co-explore novel technologies and their impact on motor learning itself.",
      ],
    },
  },
  {
    name: "Yuto Suzuki",
    role: "Ph.D. Candidate",
    affiliation: "Hokkaido University",
    photo: "/images/organizers/yuto-suzuki.jpg",
    url: "https://yutosuzuki.vercel.app/",
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
    name: "Ana Tajadura-Jiménez",
    role: "Associate Professor",
    affiliation: "Universidad Carlos III de Madrid / University College London",
    photo: "/images/organizers/ana-tajadura-jimenez.jpg",
    url: "https://www.dei.inf.uc3m.es/portal/index.php?page=people-personal&id=1234",
    motivation: {
      excites: [
        "1.How the brain integrates bodily signals through sensorimotor loops, and what role body perception (and its distortions) plays in motor learning. This is something sensory technologies let us study, to advance basic neuroscience.", 
        "2. How to design technologies that transform body perception to support motor learning, specifically looking at benefits for health and wellbeing.", 
        "3. How to make (sensori)motor learning hold up in everyday, real-world use of these technologies, not just in the lab."
      ],
      personal: ["To create a multidisciplinary community to study and design together these technologies. A joint article mapping the field would be amazing!"],
    },
  },
  {
    name: "Jun Nishida",
    role: "Assistant Professor",
    affiliation: "University of Maryland",
    photo: "/images/organizers/jun-nishida.jpg",
    url: "https://junis.sakura.ne.jp/wp/",
    motivation: {
      excites: [
        "The first is what enables motor skills to transfer from one person to another, and how this will impact our society and well-being. The factors that make such transfer effective remain unclear.",
        "The second is how technology can support motor learning that remains motivating over the long term. Most systems are evaluated in short sessions based on performance, while real skill acquisition requires sustained engagement.",
      ],
      personal: [],
    },
  },
  {
    name: "Donald Degraen",
    role: "Lecturer / Assistant Professor",
    affiliation: "University of Canterbury",
    photo: "/images/organizers/donald-degraen.jpg",
    url: "https://donalddegraen.com/",
    motivation: {
      excites: [
        "I have two main topics that emphasize motor learning.",
        "Tactile Motor Learning: My main line of research focused on extending what haptic experiences we can create and on building the methods and tools to design such experiences. Recently, I have been working on applying these insights in learning contexts, e.g., by designing 3D-printed phantoms for training palpation procedures.",
        "Experiential Interaction Design: Another line of work that I have recently started to explore is on the experiential aspects of immersive experiences and interaction design. For example, we are exploring if we can motivate people better during training and practise by transferring the positive effects of exercise (e.g., heavy exercise makes you sweat, therefore you associate sweat with positive performance, so we ask whether you will be more motivated if we make you sweat artificially). A similar line of work is a recently accepted grant proposal where we will look into the experiential aspects of extreme environments (Antarctica).",
      ],
      personal: [
        "My main motivation for co-organizing this workshop is because of my work's focus on immersive experiences that include the sense of touch.",
      ],
    },
  },
  {
    name: "Laia Turmo Vidal",
    role: "Assistant Professor",
    affiliation: "KTH Royal Institute of Technology",
    photo: "/images/organizers/laia-turmo-vidal.jpg",
    url: "https://laiatv.github.io/",
    motivation: {
      excites: [
        "How to design for motor learning/control in contexts of altered embodiments, such as after injuries and acquired disability, illness, or aging.",
      ],
      personal: [
        "Meet interesting people with whom to potentially collaborate.",
      ],
    },
  },
  {
    name: "Don Samitha Elvitigala",
    role: "Senior Lecturer/Assistant Professor",
    affiliation: "Monash University",
    photo: "/images/organizers/don-samitha-elvitigala.jpg",
    url: "https://samithaelvitigala.com/",
    motivation: {
      excites: [
        "How can we transition from explicit, visual feedback to subtle, implicit multisensory cues, embedded directly into everyday attire, to train proper motor patterns without increasing cognitive load or disrupting natural movement flow?",
      ],
      personal: [
        "I want to connect with researchers spanning biomechanics, sports science, and embodied HCI to explore how low-profile, multisensory feedback primitives (haptics, spatial audio, and smart textiles) can be standardized for real-world motor skill acquisition beyond controlled lab environments.",
      ],
    },
  },
  {
    name: "Robert Riener",
    role: "Professor",
    affiliation: "ETH Zürich",
    photo: "/images/organizers/robert-riener.jpg",
    url: "https://sms.hest.ethz.ch/the-group/team/robert-riener.html",
    motivation: {
      excites: [
        "How to find responders that show an individual effect about motor learning in therapy",
        "How to increase the effectiveness of motor learning significantly"
        ],
      personal: [],
    }
  },
  {
    name: "José Manuel Vega-Cebrián",
    role: "Ph.D. Candidate",
    affiliation: "Universidad Carlos III de Madrid",
    photo: "/images/organizers/jose-manuel-vega-cebrian.jpg",
    url: "https://imbodylab.com/2022/07/26/jose-manuel-vega-cebrian/",
    motivation: {
      excites: [
        "I am interested in exploring what is the minimum amount of technology that is needed for a meaningful interaction to support motor learning. I am curious about how digital technologies and their affordances interact with the affordances of non-digital objects for movement (sports or rehabilitation equipment, props, crafting materials, etc.).",
      ],
      personal: [
        "I would like to extend my network of people working with movement and computing, while also gaining a better understanding of the different perspectives and approaches that are current in the field.",
      ],
    },
  },
  {
    name: "Peter Wolf",
    role: "Senior Scientist",
    affiliation: "ETH Zürich",
    photo: "/images/organizers/peter-wolf.jpg",
    url: "https://sms.hest.ethz.ch/the-group/team/peter-wolf.html",
    motivation: {
      excites: [
        "I like to hear about motor learning (i.e. lasting effects once feedback is no longer present) rather than 'just' performance enhancement (i.e. whether feedback improves current performance).",
        "I love overviews of different types of feedback: how can learning tasks be categorised, and which type of feedback works best for learners with different levels of expertise? We have done [one on haptic feedback](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9513580&tag=1). And in what form can — or could — typical learning approaches be implemented in virtual trainers?",
        "I tend to prefer presentations that allow for generalisation rather than focusing exclusively on a very specific study with hardly transferable results.",
      ],
      personal: [],
    },
  },
  {
    name: "Xiao Xiao",
    role: "Professor",
    affiliation: "De Vinci Higher Education",
    photo: "/images/organizers/xiao-xiao.jpg",
    url: "https://scholar.google.com/citations?user=tbqqAOYAAAAJ&hl=en",
    motivation: {
      excites: [
        "I am particularly interested in ways of bridging embodied and data-driven ways of knowing. Part of it is understanding ways of thinking/doing that allow people who get to the top of their game in different disciplines, and creating technologies that enable other people to experience these ways of thinking/doing. Another thing that interests me is finding the commonalities of motor learning across domains, and ways of \"transferring\" motor capacities from one domain to another.",
        "Another thing is about surprising \"superpowers\" that you gain from getting really good at specific motor skills that apply beyond the original application domain. One example is that through learning to play the theremin, I got a lot better at imitating bird sounds and became more sensitive to the musicality of speech and everyday sounds. This is a gain in perception more than in pure motor output.",
      ],
      personal: [
        "A big part of it is understanding the cartography of research in motor learning and seeing how to position my interests. I haven't really been publishing my work explicitly as motor learning, and a main motivation is about how to frame what I am doing in a way that can be shared with the community.",
      ],
    },
  },
  {
    name: "Joanna Bergström",
    role: "Associate Professor",
    affiliation: "University of Copenhagen",
    photo: "/images/organizers/joanna-bergstrom.jpg",
    url: "https://scholar.google.com/citations?user=NL1Q89sAAAAJ&hl=en",
    motivation: {
      excites: [
        "For me, this is a two-way interest.",
        "First, motor learning → HCI. My ERC project uses motor learning theories, models, and paradigms, as well as more specific findings, mostly from neuroscience, to develop interaction techniques, with a current focus on VR. I think this knowledge can help us better design and evaluate VR mapping techniques (the mappings between physical and virtual movement, like resized grasping, gain functions for walking, or one hand controlling several virtual hands), because using any such mapping always requires motor learning, at minimum adaptation. Right now there's a lot of work to do just in creating awareness of the existing literature that's directly relevant to most interaction techniques, and in translating that knowledge into something usable for HCI research.",
        "Second, HCI → motor learning. I think technologies like VR and haptics can also help us understand human motor learning itself — in neuroscience, psychology, sports science. They let us study behavior in settings that conventional experimental setups can't easily create. De novo learning, for instance, shows up in infants, in learning to use a new neural prosthesis, in motor rehabilitation after stroke, or in learning to use a tool like a bike — but those real-world cases are hard to control, whereas VR can emulate them under controlled conditions.",
      ],
      personal: [
        "I'm not a big fan of grand-challenges papers, as they can end up as a patchwork that's hard to actually use for research. But I do see the value in connecting a broad, scattered space of knowledge, which is basically what I described above too. The tricky part is that the motor learning field itself is already like that.",
        "I'd say I sit more in the basics-focused community, on the mechanisms of motor learning, so it'll be interesting to connect at this workshop with the applied side too, and robotics is something I'd love to connect more with. So: mapping this landscape more clearly, both in my own head and for HCI research, and connecting with different kinds of motor-learning researchers, would be my answer. I genuinely don't know yet what form of output (a paper or something else) would actually be useful here, and I'd be curious what the rest of you think.",
      ],
    },
  },
  {
    name: "Elena Márquez Segura",
    role: "Assistant Professor",
    affiliation: "Universidad Carlos III de Madrid",
    photo: "/images/organizers/elena-marquez-segura.jpg",
    url: "https://imbodylab.com/2026/01/27/elena-marquez-segura/",
    motivation: {
      excites: [
        "I am interested in how the presence of technology shapes attention and experience during movement learning. Sometimes receding into the background and becoming almost transparent in action, but at other times we may deliberately want it highly noticeable: a dramatic sound, celebratory music, a vibration, or a visual effect can amplify a movement and transform it into a moment of performance.",
        "What interests me is that technological prominence does not map straightforwardly onto attentional focus or integration. A highly salient cue may still feel tightly integrated with one's movement; an external sound may orient attention toward an audience, evoke the presence of a coach, or intensify awareness of the bodily qualities that supported the action. Conversely, subtle technology may remain largely unnoticed while strongly shaping where attention goes.",
        "I would like to explore how we can design across these different degrees of technological transparency, prominence, and integration, and how they alter what learners attend to and how movement is experienced. When should technology disappear into action, when should it become deliberately foregrounded, and how can both support compelling and effective movement learning?",
      ],
      personal: [
        "I would like to use the workshop to connect the different ways this group approaches motor learning—from mechanisms of adaptation, feedback, transfer and body perception to embodied, experiential and real-world perspectives on movement. In particular, I am interested in developing a richer vocabulary for understanding how technology shapes attention and bodily experience during learning, beyond asking only whether it improves performance or retention.",
        "I would also like to explore whether there are design principles that cut across modalities and movement domains: e.g., when technology should be perceptually prominent or transparent, when it should guide attention, and when it can become integrated into the experience of moving. I am particularly interested in bringing perspectives from embodied interaction, soma design, theatre and dramaturgy into dialogue with motor-learning research, and seeing how concepts such as timing, staging, foregrounding and performance might extend how we think about technology-mediated learning.",
      ],
    },
  },
];

/* ---------------- Call for Participation ---------------- */

export const callForParticipation = {
  paragraphs: [
    "Participants are invited to submit a 3–6 page position paper using the ACM Master Article Template. Use the publication version of the template and set the document class to \\documentclass[sigconf]{acmart}.",
    "Submissions may present relevant research, ongoing work, design approaches, methodological perspectives, or open questions related to technology-mediated motor learning. Position papers should briefly introduce the authors' background and highlight one or more questions or challenges they would like to discuss during the workshop.",
    "Accepted papers will be used to inform breakout discussions, and authors will have a choice to have their accepted paper published on the workshop website.",
  ],
  links: [{ label: "ACM Master Article Template", url: "https://chi2025.acm.org/chi-publication-formats/" }],
};

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

export type FaqItem = {
  question: string;
  /** 1行＝1段落 */
  answer: string[];
  /** 回答の下に表示されるリンク */
  links?: { label: string; url: string }[];
};

export const faq: FaqItem[] = [
  {
    question: "How to attend the workshop?",
    answer: [
      "The Technology-Mediated Motor Learning workshop takes place in person at CHI 2027, and you can register for the event by reserving your spot during CHI 2027 registration.",
    ],
  },
  {
    question: "How to apply as a participant?",
    answer: ["Participants can apply by submitting the Google form."],
    links: [{ label: "Submission form (TBD)", url: "#" }],
  },
  {
    question: "What should be in the document submitted by the participants?",
    answer: [
      "If you are interested in participation, please submit a 3–6 page position paper using the publication version of the ACM Master Article Template and set the document class to \\documentclass[sigconf]{acmart}.",
      "We encourage your position paper to focus on at least one of the four questions discussed during the workshop — (a) embodied and experiential learning, (b) feedback and technological assistance, (c) transfer across skills and contexts, or (d) evaluation and translation — or to present another area you believe should be discussed.",
      "The paper should briefly introduce yourself and give an overview of what you believe is important and needs discussion in your chosen area, and you are highly encouraged to present your own work in this context.",
    ],
    links: [{ label: "CHI 2027 publication formats", url: "https://chi2027.acm.org/" }],
  },
  {
    question: "Will the submitted paper be published or displayed on the website?",
    answer: [
      "The submitted paper will be only displayed on the workshop website.",
    ],
  },
  {
    question: "Do I need to attend the workshop after submitting a position paper?",
    answer: ["At least one author of an accepted position paper must attend the workshop in person."],
  },
  {
    question: "What should I do if I am facing a problem during submission?",
    answer: ["Please send an email to TBD with clear details about the issue you are facing."],
  },
];
