interface Person {
  id: string;
  name: string;
  connections: string[];
  cluster: string;
  imageUrl: string;
  linkedin_url: string;
  company: string;
  department: string;
  role: string;
  summary: string | number;
  occupation?: string;
}

export const peopleData: Person[] = [
  {
    "id": "0",
    "name": "Benjamin Markham",
    "linkedin_url": "https://www.linkedin.com/in/benjamin-markham/",
    "connections": [
      "57",
      "61",
      "31",
      "13",
      "93"
    ],
    "company": "Nitricity",
    "department": "Engineering",
    "role": "Systems Engineer",
    "summary": "\u2600\ufe0f",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/8.jpg"
  },
  {
    "id": "1",
    "name": "Ronald Taylor",
    "linkedin_url": "https://www.linkedin.com/in/ronaldjterrytaylor/",
    "connections": [
      "155",
      "102",
      "169",
      "106",
      "45"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "X",
    "imageUrl": "/images/profiles/Ron.jpeg"
  },
  {
    "id": "2",
    "name": "Martin Majer",
    "linkedin_url": "https://www.linkedin.com/in/martinbmajer/",
    "connections": [
      "82",
      "38",
      "148",
      "154",
      "138"
    ],
    "company": "McKinsey",
    "department": "Generalist Consulting (focus on pharmaceuticals and public sector",
    "role": "Senior Analyst / Associate",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/15.jpg"
  },
  {
    "id": "3",
    "name": "Alexia Filice",
    "linkedin_url": "https://www.linkedin.com/in/afilice/",
    "connections": [
      "127",
      "24",
      "134",
      "151",
      "159"
    ],
    "company": "Gro Intelligence - ag tech company",
    "department": "Office of CEO / Customer Success",
    "role": "Associate Chief of Staff and Head of Customer Success",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/9.jpg"
  },
  {
    "id": "4",
    "name": "Emilie Heron",
    "linkedin_url": "https://www.linkedin.com/in/emilie-anne-heron/",
    "connections": [
      "169",
      "63",
      "45",
      "155",
      "106"
    ],
    "company": "TorQuest Partners",
    "department": "Deal team at mid-market private equity firm",
    "role": "Senior Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "X",
    "imageUrl": "/images/profiles/Mariana.jpeg"
  },
  {
    "id": "5",
    "name": "Anda Theerakulvanich",
    "linkedin_url": "https://www.linkedin.com/in/thanawadi-theerakulvanich?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "23",
      "132",
      "75",
      "98",
      "133"
    ],
    "company": "Agoda",
    "department": "Supply Marketing, Supply Strategy, Corporate Strategy, People Planning & Analytics",
    "role": "Marketing Specialist, Strategy Specialist, Analytics Business Partner",
    "summary": "With a background in Economics, Anda drives initiatives across both strategy and execution, bringing experience in performance marketing, project management, and organizational change management. She has worked closely with senior leadership in the supply side of the travel tech industry, leading cross-functional projects that enhance business growth and operational efficiency.\n\nBeyond work, she is passionate about fostering connections, from organizing team events to founding a rock climbing club that builds community.",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "6",
    "name": "Kurt Holuba",
    "linkedin_url": "https://www.linkedin.com/in/kurt-holuba-05168a126/",
    "connections": [
      "91",
      "103",
      "28",
      "77",
      "31"
    ],
    "company": "I have been in medical school at Columbia VP&S for the past 2.5 years.",
    "department": "Clinical Care",
    "role": "Medical Student",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/28.jpg"
  },
  {
    "id": "7",
    "name": "Yifan Ma",
    "linkedin_url": "https://www.linkedin.com/in/yifan-m-89b915a6/",
    "connections": [
      "139",
      "114",
      "164",
      "165",
      "95"
    ],
    "company": "Boston Consulting Group",
    "department": "Consulting team in consumer goods",
    "role": "Consultant and Acting Project Leader",
    "summary": "MBA candidate at Columbia Business School \uff5c Consultant at BCG",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/5.jpg"
  },
  {
    "id": "8",
    "name": "Ashley Tagg",
    "linkedin_url": "https://www.linkedin.com/in/ashley-tagg-01559544",
    "connections": [
      "114",
      "151",
      "34",
      "127",
      "165"
    ],
    "company": "Accenture ",
    "department": "Strategy Consulting",
    "role": "Senior Manager (November 2024 promotion)",
    "summary": "Ashley is a Senior Manager in Accenture\u2019s Strategy practice, focusing on Talent and Organization Strategy for Financial Services clients. In her role, Ashley sits at the intersection of talent and technology and advises executives on the future of work and strategies to modernize their operations and right size their workforce to meet business objectives.\n\nOutside of client work, Ashley sits on the Associate Board for The Bowery Mission, where she helps raise awareness and funding for the Mission\u2019s critical care programs. She is interested in art, design, culture and travel, and you can often find her trying her new workout classes or restaurants in NYC!",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/15.jpg"
  },
  {
    "id": "9",
    "name": "Jessica Setiawna Tjie",
    "linkedin_url": "https://www.linkedin.com/in/jessica-setiawan-tjie/",
    "connections": [
      "56",
      "131",
      "155",
      "117",
      "50"
    ],
    "company": "EY-Parthenon",
    "department": "M&A Consulting",
    "role": "Director",
    "summary": "Results-driven consultant with a background in delivering strategic solutions across various industries. Currently pursuing an MBA at Columbia Business School to broaden my expertise and deepen my focus on the consumer space and overall strategy. Passionate about leveraging data-driven insights to solve complex business challenges and drive growth.",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "10",
    "name": "Masafumi Mizoguchi",
    "linkedin_url": "https://www.linkedin.com/in/masafumi-mizoguchi/",
    "connections": [
      "27",
      "74",
      "2",
      "140",
      "154"
    ],
    "company": "Mitsubishi Estate Co., Ltd.",
    "department": "I worked in the following three departments. \n- Flexible Workspace Planning and Operation Department\n- Investment and development department and Administrative department in the UK subsidiary\n- Urban Planning Office and Urban Development Promotion Department",
    "role": "Generalist in the real estate investment and development business",
    "summary": "Experienced real estate development and investment professional with a strong background in urban planning and project management. Currently pursuing an MBA at Columbia Business School (Class of 2026), leveraging over a decade of experience with Mitsubishi Estate Co., Ltd. in Tokyo and London.\n\nKey achievements:\n\nLed flexible workspace planning and operations, achieving 170% occupancy in new service offices within five months\n\nSpearheaded international real estate acquisitions and developments, increasing company profits from $30 million to $55 million\n\nImplemented innovative urban planning initiatives, including pioneering urban beekeeping in Tokyo's Marunouchi district\n\nManaged complex redevelopment projects and collaborated with government entities to enhance urban sustainability\n\nSkilled in business strategy, graduate-level studies, and project execution.Certified in Scotch Whisky, Urban Renewal Planning, Finance for Non-Finance Professionals, and Real Estate Transactions.\n\nSeeking to leverage MBA education and extensive industry experience to drive value in global real estate development and investment.Open to new opportunities and connections in the field.",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/8.jpg"
  },
  {
    "id": "11",
    "name": "Jarrett Slote",
    "linkedin_url": "https://www.linkedin.com/in/jarrett-slote-247900103?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "148",
      "38",
      "129",
      "35",
      "137"
    ],
    "company": "Delos",
    "department": "Growth & IR",
    "role": "Director",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/30.jpg"
  },
  {
    "id": "12",
    "name": "Adithep Pasricha",
    "linkedin_url": "https://www.linkedin.com/in/adithep-pasricha-12b954167/",
    "connections": [
      "143",
      "158",
      "19",
      "74",
      "65"
    ],
    "company": "Kasikornbank Thailand",
    "department": "World Business Group - Foreign Expansion Team",
    "role": "Design and implemented GTM strategy for bank's consumer products and looked at collaboration opportunities with the bank's Corporate Venture Capital arm's investment portfilio.",
    "summary": "MBA Candidate Columbia Business School Class of 2026\nStrategist at Kasikorn Thai (One of the largest bank in Thailand)\nCo Founder of an Edtech Startup (moresheet.co)\nHighly motivated and driven individual seeking to bring the most value to those around him",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/23.jpg"
  },
  {
    "id": "13",
    "name": "Bharat Subramaniam",
    "linkedin_url": "https://www.linkedin.com/in/bharat-subramaniam/",
    "connections": [
      "22",
      "23",
      "133",
      "57",
      "61"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Y",
    "imageUrl": "/images/profiles/Natalie.jpeg"
  },
  {
    "id": "14",
    "name": "Sebastian Caceres",
    "linkedin_url": "https://www.linkedin.com/in/s-caceres",
    "connections": [
      "109",
      "133",
      "76",
      "14",
      "81"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Y",
    "imageUrl": "/images/profiles/Sebastian.jpeg"
  },
  {
    "id": "15",
    "name": "Mariana Castano",
    "linkedin_url": "https://www.linkedin.com/in/marianacastano/",
    "connections": [
      "94",
      "55",
      "114",
      "134",
      "47"
    ],
    "company": "BCG",
    "department": "Consulting",
    "role": "Consultant",
    "summary": "I\u2019m deeply passionate about creating meaningful change and crafting innovative solutions that span sustainability, technology, and strategic business areas\n\nMy experience includes management and sustainability consulting, as well as direct work with vulnerable communities. I hold a degree in Industrial Engineering, a master degree in Development Practice, and I am currently an MBA candidate at Columbia. I\u2019ve also been honored with awards and fellowships in Social Responsibility, Positive Impact, and Innovation",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Mariana.jpeg"
  },
  {
    "id": "16",
    "name": "Adrienne Roberson",
    "linkedin_url": "https://www.linkedin.com/in/adriennedroberson/",
    "connections": [
      "143",
      "148",
      "35",
      "129",
      "38"
    ],
    "company": "Douglas Elliman",
    "department": "Luxury brokerage",
    "role": "Broker",
    "summary": "Real estate sales and community development analyst",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/6.jpg"
  },
  {
    "id": "17",
    "name": "David Peyser",
    "linkedin_url": "https://www.linkedin.com/in/david-peyser-37a77894/",
    "connections": [
      "14",
      "39",
      "57",
      "133",
      "124"
    ],
    "company": "David Peyser Sportswear",
    "department": "Finance",
    "role": "VP Finance & Strategy",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/17.jpg"
  },
  {
    "id": "18",
    "name": "Sara de la Fuente",
    "linkedin_url": "https://www.linkedin.com/in/saradelafuentegil-alberdi",
    "connections": [
      "55",
      "114",
      "24",
      "127",
      "94"
    ],
    "company": "Mckinsey & Company",
    "department": "Consulting",
    "role": "Associate",
    "summary": "N/a",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/21.jpg"
  },
  {
    "id": "19",
    "name": "Sumanth Dasarath",
    "linkedin_url": "https://www.linkedin.com/in/sumanth-dasarath-221974106",
    "connections": [
      "74",
      "143",
      "12",
      "148",
      "35"
    ],
    "company": "Hitech Safety Glass",
    "department": "Banking, and construction ",
    "role": "Analyst & President",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/14.jpg"
  },
  {
    "id": "20",
    "name": "Alberto Gentili",
    "linkedin_url": "https://www.linkedin.com/in/albertogentili?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "54",
      "29",
      "36",
      "169",
      "156"
    ],
    "company": "McKinsey",
    "department": "Strategy consulting: transportation and automotive, insurance, banking",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School | McKinsey & Company",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/7.jpg"
  },
  {
    "id": "21",
    "name": "Hogan Barnes",
    "linkedin_url": "https://www.linkedin.com/in/hogan-barnes-533184b3/",
    "connections": [
      "138",
      "82",
      "66",
      "16",
      "135"
    ],
    "company": "Northbow",
    "department": "Investments",
    "role": "Vice President",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/23.jpg"
  },
  {
    "id": "22",
    "name": "Anisha  Subberwal",
    "linkedin_url": "https://www.linkedin.com/in/anisha-subberwal-434346126/",
    "connections": [
      "77",
      "13",
      "125",
      "88",
      "61"
    ],
    "company": "Deloitte",
    "department": "Deloitte Digital Consulting",
    "role": "Product Designer",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/6.jpg"
  },
  {
    "id": "23",
    "name": "varun bhatt",
    "linkedin_url": "https://www.linkedin.com/in/varun-bhatt-00122132/",
    "connections": [
      "13",
      "5",
      "31",
      "6",
      "91"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Y",
    "imageUrl": "/images/profiles/Varun.jpeg"
  },
  {
    "id": "24",
    "name": "Filipe Goncalves",
    "linkedin_url": "https://www.linkedin.com/in/filipe-gon%C3%A7alves/",
    "connections": [
      "127",
      "7",
      "55",
      "95",
      "114"
    ],
    "company": "McKinsey",
    "department": "Digital & Analytics practice | Projects done in Artificial Intelligence, Advanced Analytics, Investments Plans, Cybersecurity, Digital Sales, IT transformations | Focus in Banking and Retail",
    "role": "Associate",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/8.jpg"
  },
  {
    "id": "25",
    "name": "Brandon Butz",
    "linkedin_url": "https://www.linkedin.com/in/brandon-butz-674568113/",
    "connections": [
      "169",
      "156",
      "80",
      "146",
      "42"
    ],
    "company": "Accenture",
    "department": "AI Strategy Consulting",
    "role": "AI Strategy Manager",
    "summary": "Brandon is a Digital Strategy Manager within Accenture's Data & AI practice. Brandon specializes in digital transformations, customer experience strategy, and generative AI solutions. With a passion for leveraging cutting-edge technologies, Brandon is dedicated to revolutionizing customer experiences for our clients.\n\nBrandon holds a Bachelor\u2019s degree in Business Administration from Emory University, with concentrations in Finance and Information Systems Operational Management.",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/23.jpg"
  },
  {
    "id": "26",
    "name": "Santiago Alsua",
    "linkedin_url": "https://www.linkedin.com/in/santiagoalsua/",
    "connections": [
      "77",
      "88",
      "69",
      "125",
      "83"
    ],
    "company": "Complif (B2B SAAS, Winter 2022 YCombinator)",
    "department": "Technology",
    "role": "Product/Project Manager",
    "summary": "Devoted mentor and dedicated learner. Versatile skill set including team management, software development and process design. Recognized proficiency in coaching, negotiating with C-level executives and on-the-spot problem-solving.",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/21.jpg"
  },
  {
    "id": "27",
    "name": "Yudai Matsuoka",
    "linkedin_url": "https://www.linkedin.com/in/yudai-matsuoka-36676b156/",
    "connections": [
      "10",
      "2",
      "74",
      "154",
      "82"
    ],
    "company": "McKinsey & Company",
    "department": "Consulting (no specific industry or practice)",
    "role": "Associate (consultant)",
    "summary": "'- Mission: To distribute high-quality seafood in globally\n- Experience: A seafood trader in the Marine Products Division at Mitsubishi Corporation (the world's largest seafood supply chain owner); a yellowtail farmer at Shinkaiya; and the first graduate of my university to build a consulting career at McKinsey & Company\n- Skills: Sales and Procurement, Negotiation, International Trading, Corporate Digital Transformation, B2B Marketing, Digital Marketing",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/8.jpg"
  },
  {
    "id": "28",
    "name": "Rohit Didige",
    "linkedin_url": "https://www.linkedin.com/in/rohit-didige-34546832/",
    "connections": [
      "6",
      "61",
      "67",
      "22",
      "126"
    ],
    "company": "Archana Didige group/ Tradewater USA",
    "department": "Family business\u2019 general management / rotational intern (carbon markets research/market development/new projects/Partnerships)",
    "role": "At Tradewater I rotated through various departments and assisted in various functions thru activities such as Carbon markets research for the Indian market and sourcing new projects and developing partnerships with carbon credit trading platforms ",
    "summary": "Currently N/A",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/19.jpg"
  },
  {
    "id": "29",
    "name": "Diogo Maria Rola Pereira Cary",
    "linkedin_url": "https://www.linkedin.com/in/diogo-cary/",
    "connections": [
      "156",
      "36",
      "146",
      "56",
      "20"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate (role after analyst)",
    "summary": "Currently working at Mckinsey & Company as an Associate.\n\nFinished a Dual Master of Management and Finance at IE Business School in July 2022, becoming the best student of the Masters in Finance cohort of September 2022.",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/28.jpg"
  },
  {
    "id": "30",
    "name": "Martin Mbonu",
    "linkedin_url": "https://www.linkedin.com/in/martin-mbonu/",
    "connections": [
      "98",
      "81",
      "76",
      "71",
      "73"
    ],
    "company": "Axon Finance ",
    "department": "Investments/Finance",
    "role": "Investment team member ",
    "summary": "Private equity | Venture capital ",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/30.jpg"
  },
  {
    "id": "31",
    "name": "Matthew Botros",
    "linkedin_url": "https://www.linkedin.com/in/matthew-botros-168a5a216/",
    "connections": [
      "6",
      "0",
      "13",
      "23",
      "133"
    ],
    "company": "Ernst and Young",
    "department": "Real estate",
    "role": "Consultant",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Y",
    "imageUrl": "/images/profiles/Matthew.jpeg"
  },
  {
    "id": "32",
    "name": "Manuel Rubiales Villegas`",
    "linkedin_url": "https://www.linkedin.com/in/manuel-rubiales-villegas/",
    "connections": [
      "14",
      "81",
      "76",
      "109",
      "83"
    ],
    "company": "Tresmares Capital",
    "department": "Investment Team",
    "role": "Investment Analyst",
    "summary": "   ",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/18.jpg"
  },
  {
    "id": "33",
    "name": "Lucinda Kearney",
    "linkedin_url": "https://www.linkedin.com/in/lucinda-walker-kearney/",
    "connections": [
      "114",
      "170",
      "40",
      "151",
      "43"
    ],
    "company": "JKBX",
    "department": "Business Development, Partnerships and strategy",
    "role": "We were a start-up company. I joined when we were 20 people. We swelled to 60 and then reduced to a full-time headcount of 5 (including myself). So, as you can imagine, my official responsibilities were wide-ranging. Mainly I worked on our marketing, business development and corporate partnerships. I also helped our CEO create get onboarded and create a go to market plan. ",
    "summary": "Experienced Music Industry Leader | Business Development Strategist | Relationship Builder\n\nDedicated and results-driven music industry professional with over 6 years of experience driving growth and revenue in dynamic and evolving landscapes. Proven track record in business development, sales, and operations within established and early-stage startup environments. Skilled in forging and nurturing valuable relationships with artists, managers, legal professionals, and industry executives to foster collaborations and drive business success. Known for exceeding goals and fostering a culture of high performance, creativity, and trust. Passionate about meaningful work and dedicated to achieving and surpassing goals.\n\nPassionate about: Music royalties, investing, and new technologies. \n\nAsk me about: Running, what book I'm reading, or the next music show I'm attending!",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/6.jpg"
  },
  {
    "id": "34",
    "name": "Nandini  Srivastava",
    "linkedin_url": "https://www.linkedin.com/in/nandini-srivastava/",
    "connections": [
      "52",
      "8",
      "55",
      "127",
      "112"
    ],
    "company": "DraftWise",
    "department": "Technology",
    "role": "Account Executive",
    "summary": "Go-to-market strategy | Customer Relationship Development | Improving accessibility to Generative AI",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/14.jpg"
  },
  {
    "id": "35",
    "name": "Alexander Sanjurjo",
    "linkedin_url": "https://www.linkedin.com/in/alexanderdsanjurjo/",
    "connections": [
      "129",
      "38",
      "148",
      "119",
      "144"
    ],
    "company": "Columbia University Medical School",
    "department": "Vagelos College of Physicians & Surgeons",
    "role": "Medical Student",
    "summary": "MD/MBA Student at Columbia Vagelos College of Physicians & Surgeons",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/20.jpg"
  },
  {
    "id": "36",
    "name": "Angeles Garcia-Manso",
    "linkedin_url": "https://www.linkedin.com/in/angeles-garcia-manso-b50a02183",
    "connections": [
      "29",
      "80",
      "56",
      "169",
      "156"
    ],
    "company": "McKinsey & Company",
    "department": "Consultant",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School / McKinsey & Company",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/20.jpg"
  },
  {
    "id": "37",
    "name": "Manopat Niyomthai",
    "linkedin_url": "https://www.linkedin.com/in/manopat-niyomthai/",
    "connections": [
      "118",
      "40",
      "151",
      "95",
      "68"
    ],
    "company": "Agoda",
    "department": "Pricing team",
    "role": "Associate Manager",
    "summary": "Working as a Data Analyst/Scientist with expertise in Data Analysis, Marketing Strategy and Project Management. Successfully deployed data-driven solutions and products to provide actionable insights through data-tools. Proficient with Data Analysis, Python and SQL (in development and deployment stages). Passionate about problem solving, innovation, exploring new ideas. Thrives in the domain of business analytics, development strategy and implementation.",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/22.jpg"
  },
  {
    "id": "38",
    "name": "Borja Garcia",
    "linkedin_url": "https://www.linkedin.com/in/borjagarciaalonso?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "148",
      "160",
      "35",
      "129",
      "121"
    ],
    "company": "Deloitte",
    "department": "Strategy consulting",
    "role": "Senior consultant",
    "summary": "Don\u2019t have one",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/6.jpg"
  },
  {
    "id": "39",
    "name": "Zoe Zhou",
    "linkedin_url": "https://www.linkedin.com/in/cenxizhou/",
    "connections": [
      "44",
      "125",
      "77",
      "93",
      "126"
    ],
    "company": "Coatue",
    "department": "Private Equity",
    "role": "Vice President",
    "summary": "Previous investor in private equity. Passionate about consumer tech. Proud CBS MBA '26",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/17.jpg"
  },
  {
    "id": "40",
    "name": "Windy Oktanaura",
    "linkedin_url": "https://www.linkedin.com/in/windy-oktanaura/",
    "connections": [
      "120",
      "37",
      "33",
      "8",
      "34"
    ],
    "company": "FMCG Company in the beauty industry",
    "department": "Finance/Accounting",
    "role": "Senior Finance Reporting Manager",
    "summary": "Experienced Financial Reporting Accountant with 9 years of experience in FMCG industry. Able to delivered audited financial statements with comprehensive footnotes. Adept in creating documentation to accompany financial documents, solving complex regulatory and financial issues and developing financial reporting policies and procedures. Specializes in creating detailed financial spreadsheets and presenting complex information to a management team.",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/9.jpg"
  },
  {
    "id": "41",
    "name": "Savannah Smith",
    "linkedin_url": "https://www.linkedin.com/in/savannah-smith-648880112/",
    "connections": [
      "49",
      "22",
      "75",
      "125",
      "14"
    ],
    "company": "NBCUniversal",
    "department": "NBC News Digital Growth Business Operations",
    "role": "Analyst",
    "summary": "MBA Candidate, Columbia Business School",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/5.jpg"
  },
  {
    "id": "42",
    "name": "Sofia Englebienne",
    "linkedin_url": "https://www.linkedin.com/in/sofia-englebienne-570a62229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "146",
      "156",
      "25",
      "63",
      "36"
    ],
    "company": "Eter Studio ",
    "department": "Founder",
    "role": "CEO ",
    "summary": "As the founder of Eter Studio, I led the creation of digital experiences for fashion brands in the Metaverse, focusing on educating and introducing customers to this new environment and developing Web 3.0 platforms.\n\nI am currently an MBA student at Columbia Business School, which complements my entrepreneurial spirit and previous experience in sustainable fashion design, content coordination, and public relations, allowing me to drive innovation in the field of digital fashion.",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/15.jpg"
  },
  {
    "id": "43",
    "name": "Naoto Kojima",
    "linkedin_url": "https://www.linkedin.com/in/naoto-kojima-b291a1293/",
    "connections": [
      "99",
      "168",
      "163",
      "165",
      "7"
    ],
    "company": "Nomura Securities",
    "department": "Investment Banking Division",
    "role": "Vice President",
    "summary": "Eight years' experience in investment banking focusing on M&A transactions and capital market transactions based in the U.S. and Japan.",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/22.jpg"
  },
  {
    "id": "44",
    "name": "Ashley Sun",
    "linkedin_url": "https://www.linkedin.com/in/yuzhusun/",
    "connections": [
      "39",
      "126",
      "22",
      "77",
      "88"
    ],
    "company": "Hanwha Asset Management",
    "department": "Equity",
    "role": "Equity research analyst",
    "summary": "4-year buyside equity research experience\u2014Asia Tech specialist. From Canada LO to Korea AM.\nAlways primary research\u2014choose to act as a part-time advisor for a 3bn AI venture to verify China's progress in LLM and GPU. \nHoping to create positive externality for the world\u2014provide mentorship for first-gen girls.\nOvercoming overstress and losing 15 kg in one year\u2014see you in the gym!",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/27.jpg"
  },
  {
    "id": "45",
    "name": "Quinn Carr",
    "linkedin_url": "https://www.linkedin.com/in/quinn-carr/",
    "connections": [
      "80",
      "169",
      "102",
      "54",
      "4"
    ],
    "company": "Bain & Company",
    "department": "Management Consulting",
    "role": "Consultant ",
    "summary": "N/A, I have this blank. Maybe I shouldn't! ",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/23.jpg"
  },
  {
    "id": "46",
    "name": "Kyu Eun Kim",
    "linkedin_url": "https://www.linkedin.com/in/kyu-eun-kim-1498a5124/",
    "connections": [
      "110",
      "43",
      "164",
      "7",
      "165"
    ],
    "company": "Busan Korea Hospital",
    "department": "Operations",
    "role": "Chief Operating Officer",
    "summary": "I have not updated my profile",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/25.jpg"
  },
  {
    "id": "47",
    "name": "Santiago Siman",
    "linkedin_url": "https://www.linkedin.com/in/santiago-a-simán",
    "connections": [
      "134",
      "165",
      "114",
      "15",
      "55"
    ],
    "company": "Enersal, Grupo Siman",
    "department": "Renewable energy",
    "role": "Founder and CEO",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Santiago.jpeg"
  },
  {
    "id": "48",
    "name": "Hussain Ghani",
    "linkedin_url": "https://www.linkedin.com/in/hussainkghani/",
    "connections": [
      "0",
      "57",
      "133",
      "22",
      "124"
    ],
    "company": "Audible",
    "department": "Engineering",
    "role": "Software Engineer",
    "summary": "I think it's blank for now until I am 100% sure what my post MBA career is going to be. Probably will know in a couple months. ",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/12.jpg"
  },
  {
    "id": "49",
    "name": "Pauline Blondiaux",
    "linkedin_url": "https://www.linkedin.com/in/pauline-blondiaux-5a408199/",
    "connections": [
      "83",
      "125",
      "92",
      "77",
      "75"
    ],
    "company": "Point72 ",
    "department": "Public Affairs / Media Relations",
    "role": "Associate",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/20.jpg"
  },
  {
    "id": "50",
    "name": "Jorien te Riet ook genaamd Scholten",
    "linkedin_url": "https://www.linkedin.com/in/jorien-te-riet-ook-genaamd-scholten-80358214a/",
    "connections": [
      "115",
      "4",
      "9",
      "79",
      "56"
    ],
    "company": "HAL investments",
    "department": "Investment team/ Private Equity",
    "role": "Investment Associate",
    "summary": "I don't have a summary on my LinkedIn",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/27.jpg"
  },
  {
    "id": "51",
    "name": "Lily Beveridge",
    "linkedin_url": "https://www.linkedin.com/in/lily-beveridge/",
    "connections": [
      "157",
      "151",
      "128",
      "7",
      "68"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Lily.jpeg"
  },
  {
    "id": "52",
    "name": "Raja sekhar Medindrao",
    "linkedin_url": "https://in.linkedin.com/in/raja-sekhar-medindrao-62730915a",
    "connections": [
      "112",
      "34",
      "170",
      "24",
      "141"
    ],
    "company": "Salesforce",
    "department": "Technology",
    "role": "Product manager",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/16.jpg"
  },
  {
    "id": "53",
    "name": "khrishan gopal",
    "linkedin_url": "https://www.linkedin.com/in/khrishangopalusc/",
    "connections": [
      "112",
      "170",
      "164",
      "165",
      "163"
    ],
    "company": "Five9",
    "department": "Strategic Finance",
    "role": "Sr. Analyst",
    "summary": "University of Southern California 19'\nB.S. Business Administration, Marshall School of Business, Honors\nB.S. Accounting, Leventhal School of Accounting, Honors\n\ngopalkhrishan@gmail.com | +1(303) 956-0696",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/11.jpg"
  },
  {
    "id": "54",
    "name": "Matteo Bertacca",
    "linkedin_url": "https://www.linkedin.com/in/matteo-bertacca-cfa-822992143/",
    "connections": [
      "45",
      "20",
      "156",
      "102",
      "169"
    ],
    "company": "Legal and General Investment Management",
    "department": "Investment team",
    "role": "Investment associate",
    "summary": "Investing in alternative private credit",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/22.jpg"
  },
  {
    "id": "55",
    "name": "Magdalena Gutierrez de la Cerda",
    "linkedin_url": "https://www.linkedin.com/in/magdalenagutierrezd/",
    "connections": [
      "114",
      "15",
      "165",
      "18",
      "157"
    ],
    "company": "Venturance Alternative Assets",
    "department": "Private Debt",
    "role": "Portfolio Manager",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/9.jpg"
  },
  {
    "id": "56",
    "name": "Michelle Priscilla",
    "linkedin_url": "https://www.linkedin.com/in/michelle-p-35516619a/",
    "connections": [
      "117",
      "169",
      "36",
      "123",
      "9"
    ],
    "company": "Kearney (recent employer)",
    "department": "Management Consulting",
    "role": "Senior Consultant",
    "summary": NaN,
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/5.jpg"
  },
  {
    "id": "57",
    "name": "Mi Pham",
    "linkedin_url": "https://www.linkedin.com/in/mi-pham-b13783115/",
    "connections": [
      "133",
      "67",
      "91",
      "70",
      "76"
    ],
    "company": "Deloitte",
    "department": "Consulting",
    "role": "Senior Consultant",
    "summary": "MBA Candidate at Columbia Business School | Deloitte Consulting",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/16.jpg"
  },
  {
    "id": "58",
    "name": "Jonathan Wu",
    "linkedin_url": "https://www.linkedin.com/in/chiahewu/",
    "connections": [
      "140",
      "150",
      "154",
      "138",
      "104"
    ],
    "company": "CLSA",
    "department": "Equity research",
    "role": "Equity research associate",
    "summary": "Equity research | Investment management",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "59",
    "name": "Marga Romero",
    "linkedin_url": "https://ph.linkedin.com/in/marga-romero?original_referer=https%3A%2F%2Fwww.google.com%2F",
    "connections": [
      "65",
      "150",
      "160",
      "66",
      "38"
    ],
    "company": "Parlon (B2B2C Tech Company)",
    "department": "Business Development",
    "role": "Growth Lead",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/11.jpg"
  },
  {
    "id": "60",
    "name": "kania zakira",
    "linkedin_url": "https://www.linkedin.com/in/kaniaputrizakira/",
    "connections": [
      "64",
      "150",
      "38",
      "2",
      "137"
    ],
    "company": "Ernst and Young Indonesia",
    "department": "M&A Advisory (Lead Advisory)",
    "role": "Senior Associate",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/5.jpg"
  },
  {
    "id": "61",
    "name": "Nikhita Singh",
    "linkedin_url": "https://www.linkedin.com/in/nikhita-singh1",
    "connections": [
      "70",
      "109",
      "22",
      "28",
      "0"
    ],
    "company": "Tritium Technologies",
    "department": "Sales & Strategy",
    "role": "Sales Manager, Fleets & Automotive industry ",
    "summary": "I am an experienced sales manager who has led go-to-market strategies, established robust pipelines, and spearheaded innovative partner relationships to support pre-profit companies as they try to achieve scale in the nascent EV Charging industry. At EVgo and Tritium, I have focused on B2B sales and applied a consultative sales approach to identify solutions for fleets, research and testing organizations, and Charging-as-a-Service providers. \n\nI started my career in policy and strategy consulting, establishing expertise in transportation electrification and building skills in project management, systems modeling, and stakeholder facilitation. \n\nMy future goals remain in helping businesses in the EV and Energy industry successfully scale in sales and operations.",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/6.jpg"
  },
  {
    "id": "62",
    "name": "Sebastiano Bertola",
    "linkedin_url": "https://www.linkedin.com/in/sebastiano-bertola-6a379715a/",
    "connections": [
      "135",
      "154",
      "148",
      "66",
      "121"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Strategy Consultant",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/27.jpg"
  },
  {
    "id": "63",
    "name": "Lisa Schaller",
    "linkedin_url": "https://www.linkedin.com/in/lisahannaschaller/",
    "connections": [
      "169",
      "4",
      "29",
      "117",
      "56"
    ],
    "company": "Roland Berger",
    "department": "Consumer goods",
    "role": "Consultant",
    "summary": NaN,
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/21.jpg"
  },
  {
    "id": "64",
    "name": "Soraya van Beek",
    "linkedin_url": "https://www.linkedin.com/in/soraya-van-beek-406a29143?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "150",
      "148",
      "121",
      "60",
      "38"
    ],
    "company": "BCG",
    "department": "Energy, sustainability and luxury goods practice areas",
    "role": "Strategy consultant",
    "summary": "MBA Candidate at Columbia Business School | Consultant at Boston Consulting Group (BCG)",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/4.jpg"
  },
  {
    "id": "65",
    "name": "Jean Singphatanakul",
    "linkedin_url": "https://www.linkedin.com/in/jeansingphatanakul/",
    "connections": [
      "59",
      "138",
      "12",
      "129",
      "119"
    ],
    "company": "7 years in E-commerce (Lazada) in Southeast Asia, based in Thailand \n10 month before MBA at family business - Food & Beverages / service industry (moving into hospitality)",
    "department": "E-commerce (Lazada): User Growth \nFamily business: CEO Office",
    "role": "Ecommerce (Lazada): VP, Head of User Growth in Thailand (covers growth marketing, performance marketing, performance steering, customer segmentation) & Head of Affiliate Marketing for the Group (building influencer marketing across Southeast Asia: ID, MY, PH, VN, TH, SG)\nFamily business: New Business Lead (direct report to Father, CEO) ",
    "summary": "Don't have one yet (and need to update that I am currently pursuing my MBA)",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/3.jpg"
  },
  {
    "id": "66",
    "name": "Carolina  Cascarejo ",
    "linkedin_url": "https://www.linkedin.com/in/carolinacascarejo",
    "connections": [
      "121",
      "82",
      "160",
      "148",
      "38"
    ],
    "company": "McKinsey ",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA candidate at Columbia Business School,  Associate at McKinsey",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/6.jpg"
  },
  {
    "id": "67",
    "name": "Dongsoo Cho",
    "linkedin_url": "https://www.linkedin.com/in/dongsoo-cho-0bbbb0b7",
    "connections": [
      "126",
      "57",
      "91",
      "103",
      "22"
    ],
    "company": "Deloitte Consulting (Monitor Deloitte)",
    "department": "Strategy & Business Design (Strategy Consulting)",
    "role": "Engagement Manager (Senior Manager)",
    "summary": "Senior manager at Monitor Deloitte Korea specializing in deriving human-centered market and customer insights that drive strategic decision-making. Expertise includes establishing innovative new product/service development strategies, and formulating mid/long-term vision and business strategies. Proven track record in devising and implementing go-to-market strategies that enhanced market presence and competitiveness. Worked with clients in diverse sectors, including life sciences and healthcare, FMCG, consumer electronics, automotive, financial service, and technology.",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/11.jpg"
  },
  {
    "id": "68",
    "name": "Giacomo Martiriggiano",
    "linkedin_url": "https://www.linkedin.com/in/martirig/",
    "connections": [
      "127",
      "95",
      "84",
      "151",
      "24"
    ],
    "company": "McKinsey",
    "department": "Financial Services Consultant",
    "role": "Business Analyst",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/9.jpg"
  },
  {
    "id": "69",
    "name": "Giacomo Tritto",
    "linkedin_url": "https://www.linkedin.com/in/giacomo-tritto/",
    "connections": [
      "77",
      "125",
      "78",
      "93",
      "26"
    ],
    "company": "McKinsey & Company",
    "department": "I was a generalist consultant, and along my tenure I have served Manufacturing and Advanced Industries clients, as well as Private Equity, Banks and Insurance companies",
    "role": "Business Analyst",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/21.jpg"
  },
  {
    "id": "70",
    "name": "Nikita Pinge",
    "linkedin_url": "https://www.linkedin.com/in/nikitapinge",
    "connections": [
      "61",
      "98",
      "73",
      "57",
      "132"
    ],
    "company": "Maersk",
    "department": "Business Finance",
    "role": "Senior Finance Manager",
    "summary": "With over 13 years of international experience in finance within FMCG/CPG, healthcare, and logistics at Johnson & Johnson and Maersk, I have honed my expertise in FP&A operations, financial controllership, and business finance partnering with senior stakeholders. \n\nArmed with my CA degree, I pursued the leadership development program at J&J driven by my pursuit of purpose and a dedication to positively impact human lives. My approach is proactive and solution-oriented, with a keen focus on value creation and fostering strong partnerships.\n\nThroughout my career, I have achieved significant milestones, including providing valuable insights for retail portfolio optimization, successfully implementing financial systems, and driving business model transformations, encompassing acquisitions and divestitures. My commitment to robust compliance governance and effective team leadership has further fortified my professional journey.\n\nBeyond the workplace, I am passionate about fitness and volunteering, and I am honored to have received the J&J Global Community Impact Ambassador award for my contributions to education and pro bono advisory initiatives. I am excited to connect with like-minded professionals and explore opportunities for collaboration and growth.",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/21.jpg"
  },
  {
    "id": "71",
    "name": "Ana Bonamassa",
    "linkedin_url": "https://www.linkedin.com/in/anabonamassa/",
    "connections": [
      "77",
      "125",
      "22",
      "49",
      "30"
    ],
    "company": "Neptune (meetneptune.com)",
    "department": "I was the only person working at the startup besides the 2 founders",
    "role": "Operations & Product Marketing",
    "summary": "I don't have an about section. My headline is:\nProduct & Operations | CBS MBA '26 \ud83c\udf1f Community @ VC Unleashed",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/16.jpg"
  },
  {
    "id": "72",
    "name": "Sude Unal",
    "linkedin_url": "https://www.linkedin.com/in/sude-%C3%BCnal-64a59b139/",
    "connections": [
      "169",
      "80",
      "155",
      "45",
      "4"
    ],
    "company": "TSKB (Turkish Development Bank)",
    "department": "Financial Advisory",
    "role": "Analyst ",
    "summary": "-",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/17.jpg"
  },
  {
    "id": "73",
    "name": "Ewoud Paping",
    "linkedin_url": "https://www.linkedin.com/in/ewoud-paping-2a6146142/",
    "connections": [
      "70",
      "76",
      "133",
      "98",
      "30"
    ],
    "company": "Roland Berger",
    "department": "Investor Support",
    "role": "Consultant",
    "summary": "MBA candidate at Columbia Business School\n",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/29.jpg"
  },
  {
    "id": "74",
    "name": "Hitesh Malla",
    "linkedin_url": "https://www.linkedin.com/in/hitesh-malla/",
    "connections": [
      "158",
      "143",
      "19",
      "10",
      "129"
    ],
    "company": "Steinberg Asset Management",
    "department": "Investments",
    "role": "Investment Analyst",
    "summary": "Nothing",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/29.jpg"
  },
  {
    "id": "75",
    "name": "Danae  Paidoussis",
    "linkedin_url": "https://www.linkedin.com/in/danai-paidousi-734343118/",
    "connections": [
      "49",
      "77",
      "5",
      "125",
      "98"
    ],
    "company": "Darktrace",
    "department": "Sales",
    "role": "Senior Account Executive",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/23.jpg"
  },
  {
    "id": "76",
    "name": "Pedro Lucas",
    "linkedin_url": "https://www.linkedin.com/in/pedro-lucas-84a76a158?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "77",
      "14",
      "83",
      "133",
      "81"
    ],
    "company": "Bain & Company",
    "department": "Consulting",
    "role": "Associate ",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/11.jpg"
  },
  {
    "id": "77",
    "name": "Ana Catherine Colchete",
    "linkedin_url": "https://www.linkedin.com/in/ana-catherine-colchete-247430109/",
    "connections": [
      "22",
      "71",
      "69",
      "125",
      "78"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Y",
    "imageUrl": "/images/profiles/Ana.jpeg"
  },
  {
    "id": "78",
    "name": "Claudia Gallo",
    "linkedin_url": "https://www.linkedin.com/in/claudia-gallo-839aa7145/",
    "connections": [
      "125",
      "69",
      "83",
      "77",
      "49"
    ],
    "company": "McKinsey & Company",
    "department": "I work mostly in the energy and insurance sector",
    "role": "Business Analyst",
    "summary": "Business Analyst at McKinsey | BSc PPE graduate LSE",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "79",
    "name": "Shariq Sanghvi",
    "linkedin_url": "https://www.linkedin.com/in/shariqsanghvi/",
    "connections": [
      "117",
      "56",
      "45",
      "29",
      "36"
    ],
    "company": "CapitaLand",
    "department": "CapitaLand India Trust - Real Estate Investments",
    "role": "Manager, Investments",
    "summary": NaN,
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/1.jpg"
  },
  {
    "id": "80",
    "name": "Juan Pablo Guzman",
    "linkedin_url": "https://www.linkedin.com/in/juanguzman10/",
    "connections": [
      "36",
      "45",
      "169",
      "72",
      "155"
    ],
    "company": "Mastercard",
    "department": "Management consulting",
    "role": "Junior Manager",
    "summary": "I don't have one",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/15.jpg"
  },
  {
    "id": "81",
    "name": "Jesus Gonzalez",
    "linkedin_url": "https://www.linkedin.com/in/jesus-a-gonzalez/",
    "connections": [
      "133",
      "14",
      "76",
      "30",
      "83"
    ],
    "company": "Morgan Stanley",
    "department": "Investment Banking",
    "role": "Associate",
    "summary": "MBA CBS '26",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/22.jpg"
  },
  {
    "id": "82",
    "name": "Leonardo Fernades",
    "linkedin_url": "https://www.linkedin.com/in/leonardo-magalhaes-f/",
    "connections": [
      "148",
      "121",
      "66",
      "2",
      "160"
    ],
    "company": "McKinsey & Company",
    "department": "Consulting Services",
    "role": "Senior Business Analyst",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/2.jpg"
  },
  {
    "id": "83",
    "name": "Paulina Feliu",
    "linkedin_url": "http://linkedin.com/in/paulina-feli\u00fa-quiroga-b0a781152",
    "connections": [
      "49",
      "78",
      "77",
      "109",
      "76"
    ],
    "company": "Family Business",
    "department": "Finance",
    "role": "Research analyst ",
    "summary": "I don\u2019t have one",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "84",
    "name": "Roberto  Berlucchi",
    "linkedin_url": "https://www.linkedin.com/in/roberto-berlucchi/",
    "connections": [
      "95",
      "68",
      "127",
      "7",
      "94"
    ],
    "company": "Roland Berger",
    "department": "Consulting",
    "role": "Junior Consultant",
    "summary": "Management Consultant specialized in Automotive and Industrials",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Roberto.jpeg"
  },
  {
    "id": "85",
    "name": "Sedat Keles",
    "linkedin_url": "https://www.linkedin.com/in/sedat-kele%C5%9F-8bb563168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "7",
      "165",
      "24",
      "163",
      "170"
    ],
    "company": "Bcg",
    "department": "FI, IG",
    "role": "Consultant",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/1.jpg"
  },
  {
    "id": "86",
    "name": "Akash Dalal",
    "linkedin_url": "https://www.linkedin.com/in/akash-dalal",
    "connections": [
      "133",
      "122",
      "61",
      "76",
      "109"
    ],
    "company": "TLI Home (family business)",
    "department": "Management, Operations, Product, Sales",
    "role": "Director of Business Development, Product Development",
    "summary": "Associate Partner @ TLI Home",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/20.jpg"
  },
  {
    "id": "87",
    "name": "Geraldinee Capdeville Castro",
    "linkedin_url": "https://www.linkedin.com/in/geraldine-capdeville/",
    "connections": [
      "156",
      "146",
      "169",
      "36",
      "4"
    ],
    "company": "Besalco",
    "department": "Law department",
    "role": "Legal Counsel ",
    "summary": NaN,
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "88",
    "name": "Elif Gunes",
    "linkedin_url": "https://www.linkedin.com/in/elif-g%C3%BCne%C5%9F-b55761157/",
    "connections": [
      "77",
      "22",
      "26",
      "69",
      "125"
    ],
    "company": "Boston Consulting Group ",
    "department": "Consumer Goods & Retail",
    "role": "Consultant",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/12.jpg"
  },
  {
    "id": "89",
    "name": "Aaron Barg",
    "linkedin_url": "https://www.linkedin.com/in/aaron-barg-b8594a163/",
    "connections": [
      "14",
      "101",
      "71",
      "93",
      "122"
    ],
    "company": "Real Estate Investing",
    "department": "Investments",
    "role": "Owner",
    "summary": "Real estate investing and furniture manufacturing",
    "cluster": "Y",
    "imageUrl": "/images/profiles/Aaron.jpeg"
  },
  {
    "id": "90",
    "name": "Luki Elizalde",
    "linkedin_url": "https://www.linkedin.com/in/luki-aboitiz-elizalde-2a5704112/",
    "connections": [
      "98",
      "88",
      "26",
      "69",
      "76"
    ],
    "company": "Unybrands",
    "department": "Technology",
    "role": "Operations Manager",
    "summary": "-",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/18.jpg"
  },
  {
    "id": "91",
    "name": "Phillip Chung",
    "linkedin_url": "https://www.linkedin.com/in/phillipchung7/",
    "connections": [
      "103",
      "6",
      "126",
      "67",
      "57"
    ],
    "company": "Medtronic",
    "department": "R&D",
    "role": "R&D Engineer",
    "summary": "I aim to leverage a patient-centered perspective and my engineering background to create innovations that improve healthcare experiences.",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/9.jpg"
  },
  {
    "id": "92",
    "name": "Celine Hage",
    "linkedin_url": "https://www.linkedin.com/in/c%C3%A9line-hage-85a48b150/",
    "connections": [
      "49",
      "125",
      "133",
      "77",
      "78"
    ],
    "company": "Oliver Wyman",
    "department": "Strategy Consulting",
    "role": "Manager",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/20.jpg"
  },
  {
    "id": "93",
    "name": "Chiara Marzi",
    "linkedin_url": "https://www.linkedin.com/in/chiaramarzi/",
    "connections": [
      "69",
      "101",
      "14",
      "39",
      "125"
    ],
    "company": "Tenex Capital Management",
    "department": "Investment Team",
    "role": "Sr. Associate",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/13.jpg"
  },
  {
    "id": "94",
    "name": "Marisol de la Vega",
    "linkedin_url": "https://pe.linkedin.com/in/marisoldelavega",
    "connections": [
      "114",
      "15",
      "157",
      "55",
      "159"
    ],
    "company": "McKinsey ",
    "department": "Consumer Goods insdustry ",
    "role": "Associate",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/26.jpg"
  },
  {
    "id": "95",
    "name": "Manuel Di Mascio",
    "linkedin_url": "https://www.linkedin.com/in/manueldimascio/",
    "connections": [
      "68",
      "127",
      "84",
      "7",
      "114"
    ],
    "company": "Bain & Company",
    "department": "Consulting in Fashion & Luxury",
    "role": "Senior associate consultant",
    "summary": "-",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/15.jpg"
  },
  {
    "id": "96",
    "name": "Vasilis Paterakis",
    "linkedin_url": "https://www.linkedin.com/in/vasilis-paterakis-g4stelematix/",
    "connections": [
      "117",
      "63",
      "106",
      "115",
      "169"
    ],
    "company": "G4S Telematix",
    "department": "Product and Marketing",
    "role": "Head of Product and Marketing ",
    "summary": "Blank",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/17.jpg"
  },
  {
    "id": "97",
    "name": "Wonjoo Lee",
    "linkedin_url": "https://www.linkedin.com/in/wonjoo-lee-4b6a2025/",
    "connections": [
      "102",
      "155",
      "80",
      "169",
      "4"
    ],
    "company": "KPMG",
    "department": "Financial Advisory - Real Estate",
    "role": "Senior Manager",
    "summary": "MBA Candidate | Columbia Business School",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/18.jpg"
  },
  {
    "id": "98",
    "name": "Marcellinus Kevin Julienne",
    "linkedin_url": "https://www.linkedin.com/in/marcelljulienne",
    "connections": [
      "70",
      "30",
      "132",
      "73",
      "90"
    ],
    "company": "My most recent employer is ByteDance (TikTok), where I was part of the Southeast Asia (Indonesia) team.",
    "department": "I worked in the Seller Management Team, overseeing the seller dashboard, analytics, transaction platform, and Seller API for third-party sellers.",
    "role": "I was the Senior Lead Product Manager, leading a department of nine Product Managers.",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/8.jpg"
  },
  {
    "id": "99",
    "name": "Tatsuya Mishima",
    "linkedin_url": "https://www.linkedin.com/in/tatsuya-mishima-96aa99265",
    "connections": [
      "43",
      "108",
      "165",
      "7",
      "95"
    ],
    "company": "I work for Mishima Foods Co., Ltd., a food manufacturing company. It is my family business (My father-in-law's company).",
    "department": "Sales department in Tokyo.",
    "role": "Currently my position is a director.",
    "summary": "Working experience: 4 years as a corporate accountant, 2 years as a salesman, 3years as a director.\nIndustry: Food",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/5.jpg"
  },
  {
    "id": "100",
    "name": "Shailen Sampath",
    "linkedin_url": "https://www.linkedin.com/in/shailen-sampath-73906712b",
    "connections": [
      "74",
      "138",
      "148",
      "64",
      "35"
    ],
    "company": "Columbia University ",
    "department": "Healthcare - Medical student",
    "role": "medical student ",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/23.jpg"
  },
  {
    "id": "101",
    "name": "Antonio Chidiac",
    "linkedin_url": "https://linkedin.com/in/antoniochidiac",
    "connections": [
      "93",
      "77",
      "69",
      "125",
      "91"
    ],
    "company": "Stryber Ventures",
    "department": "Entrepreneur-in-residence",
    "role": "Venture Architect",
    "summary": "Building playbooks, running workshops, and supporting founders @ Columbia Startup Lab & beyond.",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/11.jpg"
  },
  {
    "id": "102",
    "name": "David Johnston",
    "linkedin_url": "https://www.linkedin.com/in/davidjohnston8",
    "connections": [
      "97",
      "45",
      "155",
      "80",
      "54"
    ],
    "company": "U.S. Army",
    "department": "Air Defense Artillery",
    "role": "Battery Commander",
    "summary": "Through 14 years of active-duty service in the U.S. Army and 5 years as an entrepreneur, I gained valuable analytical and management abilities, enabling me to find value overlooked by others, and founding a private real estate investment firm valued in excess of $8 million with a net operating income of over $400,000 annually. Upon completing my MBA, my objective is to continue growing my business with unique models to scale assets and expand access to equitable housing.",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/14.jpg"
  },
  {
    "id": "103",
    "name": "Simileoluwa Falako",
    "linkedin_url": "https://www.linkedin.com/in/simileoluwa-falako-mph-5708aa1a0",
    "connections": [
      "91",
      "6",
      "67",
      "78",
      "77"
    ],
    "company": "Medical Student (Dual Degree MD/MBA program)",
    "department": "Healthcare",
    "role": "Research Assistant",
    "summary": "I am an MD/MBA candidate at Columbia University with a Master of Public Health (MPH) in Social and Behavioral Sciences, specializing in U.S. Health and Justice. My passion lies at the intersection of healthcare, equity, and business\u2014leveraging research, policy, and innovation to drive systemic change in healthcare delivery.\n\nMy academic and professional journey has been deeply rooted in addressing health disparities, particularly in Black maternal health. I have conducted and published research that examines key inequities in maternal care, shedding light on structural barriers and advocating for data-driven, community-centered solutions. As an Equity and Justice Fellow, I have worked on initiatives that promote equitable healthcare access and outcomes for historically marginalized communities.\n\nNow, I am actively seeking opportunities that integrate healthcare and business to enhance the efficiency, accessibility, and quality of U.S. healthcare delivery. I am especially interested in roles that allow me to apply my expertise in public health, medicine, and business strategy to create innovative, sustainable solutions for complex healthcare challenges.\n",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/7.jpg"
  },
  {
    "id": "104",
    "name": "Ashley Liu",
    "linkedin_url": "https://www.linkedin.com/in/ashleytingyuliu",
    "connections": [
      "171",
      "138",
      "129",
      "148",
      "82"
    ],
    "company": "Google",
    "department": "Global Business Organization",
    "role": "Digital strategy consultant",
    "summary": "I am a dynamic business leader with a passion for driving digital transformation, AI innovation, and strategic growth in the tech industry. With a track record of success at Google, IBM, and Gartner, I specialize in leveraging AI, cloud computing, and data-driven strategies to accelerate business performance and revenue growth.\n\nCurrently pursuing an MBA at Columbia Business School, I bring over 8 years of experience in digital strategy, enterprise sales, and business development across diverse industries, including financial services, high-tech, and telecom. My expertise spans AI-powered sales strategies, GTM execution, and ecosystem partnerships, having led multimillion-dollar initiatives that redefine how businesses scale in an AI-driven world.",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/15.jpg"
  },
  {
    "id": "105",
    "name": "Jackie Jones",
    "linkedin_url": "https://www.linkedin.com/in/jackie-jones-main",
    "connections": [
      "102",
      "169",
      "36",
      "156",
      "97"
    ],
    "company": "Amazon",
    "department": "Global Robotics Delivery",
    "role": "Technical Program Manager II",
    "summary": "I don't have an \"About\" section",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/26.jpg"
  },
  {
    "id": "106",
    "name": "Orvin Pierre",
    "linkedin_url": "https://www.linkedin.com/in/orvin-pierre-b30326185",
    "connections": [
      "4",
      "169",
      "146",
      "97",
      "96"
    ],
    "company": "I am not working for any company, nor was I recently employed as I am a dual-degree MD/MBA student and was in medical school at Columbia VP&S.",
    "department": "See above.",
    "role": "See above.",
    "summary": "I am a third year medical student at Columbia University Vagelos College of Physicians & Surgeons and a first year business student at Columbia Business School, as part of the dual degree MD/MBA program. \n\nI am particularly interested in the intersection of medicine and business, particularly with regards to healthcare delivery, costs and clinical efficiency, and upon graduation from Columbia, I hope to pursue my dream of becoming a surgeon.\n\nI am a graduate of Harvard College, where I concentrated in Chemistry with a secondary in Classical Civilizations. As someone with a strong desire to help others, I involved myself in multiple organizations on Harvard's campus through various leadership positions with the main goal of fostering community and growth in any way I can. At Harvard, I worked as a Peer Advising Fellow, and served on the boards of the Harvard Black Men\u2019s Forum and the Harvard Caribbean Club. \n\nMy passions lie in the sciences and medicine and expand to sports, mentorship, education, and ancient Greek and Roman history. I believe that my experiences in various positions as well as my passions, people skills, and abilities will allow me to thrive in many different professional settings.",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/12.jpg"
  },
  {
    "id": "107",
    "name": "Michael Adjei-Mosi",
    "linkedin_url": "https://linkedin.com/in/michael-adjei-mosi/",
    "connections": [
      "168",
      "165",
      "163",
      "157",
      "161"
    ],
    "company": "Health Advances",
    "department": "Healthcare",
    "role": "Consulting analyst ",
    "summary": "Third year medical student at Columbia University",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Michael.jpeg"
  },
  {
    "id": "108",
    "name": "Zhenhua Jiang",
    "linkedin_url": "https://www.linkedin.com/in/zhenhuajiang",
    "connections": [
      "99",
      "7",
      "43",
      "141",
      "159"
    ],
    "company": "Bakkafrost",
    "department": "Quality Assurance",
    "role": "Sr. QA manager",
    "summary": "Experienced Quality Assurance Manager with a demonstrated history of working in the wholesale industry. Strong operations professional skilled in Operation, Quality control, Management, Food Processing, and Training.",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/24.jpg"
  },
  {
    "id": "109",
    "name": "Natalia Carceller",
    "linkedin_url": "https://www.linkedin.com/in/nataliacarceller",
    "connections": [
      "77",
      "125",
      "14",
      "61",
      "83"
    ],
    "company": "Kearney",
    "department": "Generalist but some projects in consumer goods",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School |Associate at Kearney",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/28.jpg"
  },
  {
    "id": "110",
    "name": "Grace  Shyu",
    "linkedin_url": "https://www.linkedin.com/in/grace-shyu-a34442114",
    "connections": [
      "113",
      "46",
      "168",
      "8",
      "127"
    ],
    "company": "JP Morgan",
    "department": "Private Banking",
    "role": "Investment advisor",
    "summary": "Business Strategy | Asset & Wealth Management",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/7.jpg"
  },
  {
    "id": "111",
    "name": "Archit Jain",
    "linkedin_url": "https://www.linkedin.com/in/archit-jain",
    "connections": [
      "101",
      "132",
      "124",
      "44",
      "61"
    ],
    "company": "Planet Labs PBC",
    "department": "Strategy & Ops",
    "role": "Strategy & Ops",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/27.jpg"
  },
  {
    "id": "112",
    "name": "Hiral Patel",
    "linkedin_url": "https://LinkedIn.com/in/hiralhp",
    "connections": [
      "139",
      "52",
      "163",
      "34",
      "53"
    ],
    "company": "Microsoft",
    "department": "Azure Storage",
    "role": "Technical Program manager",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/29.jpg"
  },
  {
    "id": "113",
    "name": "Dominga Derderian",
    "linkedin_url": "https://Www.linkedin.com/in/dominga-derderian-aguilera-a72918197?utm_source=share&utm_cam-paign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "110",
      "142",
      "55",
      "15",
      "168"
    ],
    "company": "MBI AGF",
    "department": "Equity research",
    "role": "Investment analyst ",
    "summary": "Ingeniera Civil Industrial de la Universidad Cat\u00f3lica de Chile. Interes en el area de fin has y en particular en la evaluation de inversions, administraci\u00f3n y creaci\u00f3n de fondos. Deseo colaborar en su empresa en las areas mencionadas y a la vez adquirir conocimientos. Aprendo rapido, trabajo con intensidad, me relaciono muy bien con pares y jefaturas, me gustan las tareas con desafios. \nIt\u2019s in Spanish and not updated\n",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/5.jpg"
  },
  {
    "id": "114",
    "name": "Maria Baeza Vinas",
    "linkedin_url": "https://linkedin.com/in/maria-baeza-vinas",
    "connections": [
      "157",
      "55",
      "165",
      "94",
      "7"
    ],
    "company": "Currently not working. Accenture is my most recent employer",
    "department": "Strategy consulting",
    "role": "Consultant",
    "summary": "MBA candidate at CBS",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/28.jpg"
  },
  {
    "id": "115",
    "name": "Alexander Roetheli",
    "linkedin_url": "https://www.linkedin.com/in/alexander-roetheli",
    "connections": [
      "116",
      "149",
      "50",
      "20",
      "54"
    ],
    "company": "McKinsey & Company",
    "department": "Consulting",
    "role": "Associate",
    "summary": NaN,
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/6.jpg"
  },
  {
    "id": "116",
    "name": "divya jain",
    "linkedin_url": "https://www.linkedin.com/in/divya-jain-9a4220105",
    "connections": [
      "115",
      "149",
      "79",
      "105",
      "117"
    ],
    "company": "oswal granites",
    "department": "client relations",
    "role": "director of client relations and people",
    "summary": "Columbia business school || Oswal Granites || IIM Indore PGP'22 || BITS Pilani, Goa Chemical'19",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "117",
    "name": "Pasika Lohachitranont",
    "linkedin_url": "https://www.linkedin.com/in/pasika-lohachitranont\n\n",
    "connections": [
      "56",
      "123",
      "79",
      "63",
      "36"
    ],
    "company": "Union Chemtech Limited",
    "department": "Accounting and Tax",
    "role": "Assistant Manager",
    "summary": NaN,
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/22.jpg"
  },
  {
    "id": "118",
    "name": "Albertus Rianto Wibisono",
    "linkedin_url": "https://LinkedIn.com/in/albertusrian95",
    "connections": [
      "37",
      "95",
      "68",
      "168",
      "120"
    ],
    "company": "Segari (e grocery startup company)",
    "department": "Technology",
    "role": "Data analyst/scientist",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/20.jpg"
  },
  {
    "id": "119",
    "name": "Jordan  Ingersoll ",
    "linkedin_url": "https://LinkedIn.com/in/jordan-ingersoll-514ab7ba",
    "connections": [
      "129",
      "82",
      "148",
      "38",
      "35"
    ],
    "company": "LinkedIn",
    "department": "LinkedIn Talent Solutions",
    "role": "Product Marketing Manager ",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/14.jpg"
  },
  {
    "id": "120",
    "name": "Hasan Alawadhi",
    "linkedin_url": "https://www.linkedin.com/in/hasanalawadhi",
    "connections": [
      "95",
      "164",
      "47",
      "40",
      "128"
    ],
    "company": "Oliver Wyman",
    "department": "Consulting",
    "role": "Consultant",
    "summary": "Associate at Oliver Wyman's Dubai Office.\n\nFirst Class BENG degree in Materials Engineering from the University of Exeter.",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Hasan.jpeg"
  },
  {
    "id": "121",
    "name": "Sofia Canada",
    "linkedin_url": "https://www.linkedin.com/in/sofiacanada",
    "connections": [
      "148",
      "66",
      "82",
      "129",
      "38"
    ],
    "company": "McKinsey & Company",
    "department": "Strategy",
    "role": "Associate",
    "summary": "**do not have any profile summary**",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/5.jpg"
  },
  {
    "id": "122",
    "name": "Alexander Falcone",
    "linkedin_url": "https://www.linkedin.com/in/alexander-falcone-455363198",
    "connections": [
      "14",
      "69",
      "124",
      "86",
      "77"
    ],
    "company": "Brigade Capital Management",
    "department": "Research",
    "role": "Research Analyst",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/14.jpg"
  },
  {
    "id": "123",
    "name": "Pakteema Jesadachet",
    "linkedin_url": "https://www.linkedin.com/in/pakteema-jesadachet",
    "connections": [
      "56",
      "117",
      "169",
      "63",
      "155"
    ],
    "company": "Shopee (Thailand) Co. Ltd.",
    "department": "Business Development",
    "role": "Marketing Solutions and Monetization Senior Associate",
    "summary": "MBA at Columbia Business School",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/27.jpg"
  },
  {
    "id": "124",
    "name": "Daniel Gromis",
    "linkedin_url": "https://www.linkedin.com/in/daniel-gromis",
    "connections": [
      "122",
      "81",
      "109",
      "6",
      "101"
    ],
    "company": "Astrana Health (Then family business)",
    "department": "Mergers & Acquisitions / Strategy",
    "role": "M&A senior analyst",
    "summary": "Blank",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/21.jpg"
  },
  {
    "id": "125",
    "name": "Cecilia Napoli",
    "linkedin_url": "https://www.linkedin.com/in/cecilia-napoli-b7822b173\n\n",
    "connections": [
      "78",
      "77",
      "109",
      "22",
      "69"
    ],
    "company": "PVH (Tommy Hilfiger & Calvin Klein)",
    "department": "Retail",
    "role": "Retail Operations & Omnichannel Manager, Southwest Europe",
    "summary": "Committed to developing a career in the Premium & Luxury Consumer Goods industry, I have invested all of my work experiences in a variety of departments before focusing on retail. \n\nMy diverse background and international upbringing has allowed me to have a unique understanding of different cultures and customs. I am fluent in English, French and Italian, conversant in Spanish, and a novice in Japanese.",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/5.jpg"
  },
  {
    "id": "126",
    "name": "Jaehyeok Choi",
    "linkedin_url": "https://www.linkedin.com/in/maxchoi1991",
    "connections": [
      "67",
      "77",
      "132",
      "91",
      "44"
    ],
    "company": "PKM (Family business)",
    "department": "Business & Strategy Development",
    "role": "To research and develop new products and franchise business / To find strategic & financial investment opportunities",
    "summary": "Columbia MBA candidate with a background in startups, VC, and family business | Building on tradition \u2014 preparing to grow a century-old food brand | Exploring global opportunities for Family business",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/17.jpg"
  },
  {
    "id": "127",
    "name": "Francesca Giacomoni",
    "linkedin_url": "https://linkedin.com/in/francesca-giacomoni-a02b10137/",
    "connections": [
      "68",
      "95",
      "24",
      "114",
      "84"
    ],
    "company": "McKinsey & Company",
    "department": "Consulting",
    "role": "Business Analyst",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/28.jpg"
  },
  {
    "id": "128",
    "name": "Anthonie Abbenhuis",
    "linkedin_url": "https://www.linkedin.com/in/anthonieabbenhuis",
    "connections": [
      "151",
      "120",
      "47",
      "40",
      "128"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Antonie.jpeg"
  },
  {
    "id": "129",
    "name": "Isabel Tangel",
    "linkedin_url": "https://www.linkedin.com/in/isabel-tangel/",
    "connections": [
      "148",
      "121",
      "119",
      "35",
      "38"
    ],
    "company": "AlphaSights",
    "department": "Client Services for PE/VC clients",
    "role": "Manager ",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "130",
    "name": "Luciano Filiberti",
    "linkedin_url": "https://www.linkedin.com/in/luciano-filiberti-333a23232",
    "connections": [
      "154",
      "82",
      "140",
      "150",
      "135"
    ],
    "company": "Transclor SA ",
    "department": "Management",
    "role": "Owner/director",
    "summary": "-",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/24.jpg"
  },
  {
    "id": "131",
    "name": "Casey Dobiesz",
    "linkedin_url": "https://www.linkedin.com/in/caseydobiesz/",
    "connections": [
      "9",
      "156",
      "29",
      "155",
      "56"
    ],
    "company": "Citibank",
    "department": "VP Commercial Banker Covering the Software predominantly in the bay area and pacific northwest",
    "role": "Vice President",
    "summary": NaN,
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/3.jpg"
  },
  {
    "id": "132",
    "name": "Mine Jirajakkavan",
    "linkedin_url": "https://th.linkedin.com/in/napatsorn-mine-jirajakkavan-61780b161",
    "connections": [
      "126",
      "98",
      "5",
      "70",
      "0"
    ],
    "company": "Google",
    "department": "Product Marketing",
    "role": "Product Marketing Manager, YouTube Southeast Asia",
    "summary": "I do not have one",
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/3.jpg"
  },
  {
    "id": "133",
    "name": "Leon  Gaugler",
    "linkedin_url": "https://www.linkedin.com/in/leon-gaugler/",
    "connections": [
      "14",
      "81",
      "86",
      "69",
      "57"
    ],
    "company": "McKinsey & Company",
    "department": "Energy and basic materials",
    "role": "Associate (Senior Consultant)",
    "summary": NaN,
    "cluster": "Y",
    "imageUrl": "https://randomuser.me/api/portraits/female/13.jpg"
  },
  {
    "id": "134",
    "name": "Alejandro Bolanos",
    "linkedin_url": "https://www.linkedin.com/in/alejandro-bolanos-52838327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "47",
      "15",
      "159",
      "166",
      "114"
    ],
    "company": "Ecotropik",
    "department": "Sales, sourcing, legal, HR, finance",
    "role": "Founder and Managing Director",
    "summary": "No profile summary added ",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/19.jpg"
  },
  {
    "id": "135",
    "name": "Niccolo de Vecchi",
    "linkedin_url": "https://www.linkedin.com/in/niccol%C3%B2-de-vecchi-245b5a191/",
    "connections": [
      "62",
      "154",
      "148",
      "82",
      "66"
    ],
    "company": "Bain & Company",
    "department": "Strategy Consulting",
    "role": "Senior Associate Consultant",
    "summary": "MBA at Columbia Business School | Bain & Company",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/7.jpg"
  },
  {
    "id": "136",
    "name": "Trevor Hanson",
    "linkedin_url": "https://www.linkedin.com/in/trevordhanson/",
    "connections": [
      "163",
      "165",
      "151",
      "134",
      "47"
    ],
    "company": "Small real estate private equity operator",
    "department": "Acquisitions",
    "role": "Head of Acquisitions for the Western US",
    "summary": "I don't have anything in the \"About\" section. ",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/23.jpg"
  },
  {
    "id": "137",
    "name": " Brit Zeeb",
    "linkedin_url": "https://www.linkedin.com/in/brittany-zeeb/",
    "connections": [
      "129",
      "148",
      "121",
      "138",
      "64"
    ],
    "company": "Slalom Consulting",
    "department": "Public Sector and Social Impact",
    "role": "Senior Consultant",
    "summary": "None at the moment",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/12.jpg"
  },
  {
    "id": "138",
    "name": "Weixian Shen",
    "linkedin_url": "https://www.linkedin.com/in/shenweixian",
    "connections": [
      "148",
      "104",
      "129",
      "121",
      "82"
    ],
    "company": "BCG",
    "department": "Consulting",
    "role": "Senior Associate",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/14.jpg"
  },
  {
    "id": "139",
    "name": "Hailey Yubeta",
    "linkedin_url": "https://LinkedIn.com/in/haileyyubeta",
    "connections": [
      "7",
      "163",
      "168",
      "164",
      "165"
    ],
    "company": "Amazon",
    "department": "Fashion (new business), Logistics, Search, Whole Foods Market",
    "role": "Senior Product Manager ",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/28.jpg"
  },
  {
    "id": "140",
    "name": "Jamie Tuchman",
    "linkedin_url": "https://www.linkedin.com/in/jamie-kitzes-600ba7350/",
    "connections": [
      "58",
      "150",
      "130",
      "10",
      "74"
    ],
    "company": "Alphadyne Asset Management",
    "department": "Macro Hedge Fund - Investor Relations",
    "role": "Investor Relations",
    "summary": "nothing",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/14.jpg"
  },
  {
    "id": "141",
    "name": "Rushil Jain",
    "linkedin_url": "https://www.linkedin.com/in/rushil-jain-86057813b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "95",
      "168",
      "24",
      "47",
      "134"
    ],
    "company": "Zarco Ventures",
    "department": "Investing ",
    "role": "Associate ",
    "summary": "-",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/18.jpg"
  },
  {
    "id": "142",
    "name": "Diego Rodriguez",
    "linkedin_url": "https://www.linkedin.com/in/diego-rodr%C3%ADguez-padilla/",
    "connections": [
      "55",
      "113",
      "18",
      "94",
      "134"
    ],
    "company": "Ideal Abrasives",
    "department": "Management",
    "role": "Deputy director",
    "summary": "Deputy Director at Abrasivos y Conversiones Ideal",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/8.jpg"
  },
  {
    "id": "143",
    "name": "Adarsh Reddy",
    "linkedin_url": "https://www.linkedin.com/in/adarsh-reddy-90a3049a/",
    "connections": [
      "74",
      "158",
      "16",
      "12",
      "144"
    ],
    "company": "Goldman Sachs",
    "department": "Asset Wealth Management ",
    "role": "I was a Vice President and Advisor",
    "summary": "Unwritten, but my main title is \"MBA Candidate at Columbia Business School\"",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/16.jpg"
  },
  {
    "id": "144",
    "name": "Alexander Julian",
    "linkedin_url": "https://www.linkedin.com/in/alexander-julian-cfa-054b53b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "35",
      "154",
      "143",
      "135",
      "2"
    ],
    "company": "Rockefeller Capital Management",
    "department": "Alternative Investment Diligence",
    "role": "AVP of Private Markets Solutions",
    "summary": "Columbia Business School MBA Candidate - Class of 2026",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/17.jpg"
  },
  {
    "id": "145",
    "name": "Claudia Madera",
    "linkedin_url": "https://es.linkedin.com/in/claudia-madera-fernandez-788a941a8",
    "connections": [
      "148",
      "82",
      "66",
      "121",
      "38"
    ],
    "company": "Vestige Collection",
    "department": "sales, business development, investment",
    "role": "Co-founder",
    "summary": "Sales Manager and Co-founder of Vestige Collection",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/19.jpg"
  },
  {
    "id": "146",
    "name": "Bea Gari",
    "linkedin_url": "https://www.linkedin.com/in/beatrizgarie/",
    "connections": [
      "156",
      "29",
      "169",
      "42",
      "36"
    ],
    "company": "Boston Consulting Group",
    "department": "Strategy Consulting",
    "role": "Associate Consultant",
    "summary": "Columbia MBA Candidate | Ex-Otovo | Ex-BCG",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/9.jpg"
  },
  {
    "id": "147",
    "name": "Priya Lalwani",
    "linkedin_url": "https://www.linkedin.com/in/priyalalwani-pl\n\n",
    "connections": [
      "74",
      "150",
      "158",
      "59",
      "60"
    ],
    "company": "Yash Fabrics (Parental Company)",
    "department": "Strategy and Expansion",
    "role": "Director",
    "summary": "As a proactive and sociable professional with a strong quantitative background, I currently contribute to our family-managed business by introducing a fresh, insight-driven approach to its management. My passion lies in continuous improvement and leveraging data to drive strategic decisions that enhance operational efficiency and foster growth.\n\nIn my previous role as a Project Coordinator in IT at MTX, I successfully led and managed strategic digital transformation engagements in the healthcare, higher education, non-profit, and public sectors, aligning business strategies with technology solutions. I have a proven track record in planning and executing multi-million dollar IT programs, improving time-to-market, and driving process improvements that result in competitive advantages and significant business growth. I also enjoy coaching delivery teams on agile methodologies, boosting customer experience, and unlocking innovation.\n\nI am always eager to explore new opportunities where I can apply my knowledge and experience to create value, build lasting relationships, and make a meaningful impact. Feel free to connect with me at priyalalwani06@gmail.com or message me on LinkedIn.\n\nSkills: Business Strategy Development, Technology Consulting, Digital Transformation, Client Relationship Management, Cross-Functional Team Leadership\n\nFunctional Expertise: Agile & Digital Transformation, Product Roadmapping & Strategy, Agile Coaching & Facilitation, Daily Scrum & Agile Ceremonies (Sprint Planning, Sprint Review, Retrospective), Backlog Refinement & Prioritization, Software Development Life Cycle (SDLC) Management, Comprehensive Project Management\n\nBusiness & Technical Competencies: Salesforce CRM Implementation & Optimisation, Lucidchart, Smartsheet, Figma, Google Workspace & Microsoft Office Suite (Word, Excel, Outlook, PowerPoint, SharePoint, Teams, Visio), MS Office Automation & Workflow Optimisation",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/24.jpg"
  },
  {
    "id": "148",
    "name": "Beatriz Machado",
    "linkedin_url": "https://www.linkedin.com/in/beatrizsenciales/",
    "connections": [
      "121",
      "82",
      "129",
      "38",
      "138"
    ],
    "company": "Bain&Company",
    "department": "General consulting",
    "role": "Consultant",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/6.jpg"
  },
  {
    "id": "149",
    "name": "Nathalie Doumar",
    "linkedin_url": "https://www.linkedin.com/in/nathalie-doumar-85aa50156",
    "connections": [
      "116",
      "115",
      "4",
      "169",
      "63"
    ],
    "company": "Blackstone Inc. ",
    "department": "Investor Relations for BREIT ",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/20.jpg"
  },
  {
    "id": "150",
    "name": "Leila Merz",
    "linkedin_url": "https://www.linkedin.com/in/leila-merz-baa173124/",
    "connections": [
      "64",
      "148",
      "140",
      "2",
      "59"
    ],
    "company": "Amazon Web Services ",
    "department": "Cloud ",
    "role": "Account Executive ",
    "summary": "nothing",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/27.jpg"
  },
  {
    "id": "151",
    "name": "Athina Rickmers",
    "linkedin_url": "https://www.linkedin.com/in/athina-rickmers/",
    "connections": [
      "114",
      "157",
      "68",
      "51",
      "7"
    ],
    "company": "frog, part of capgemini invent ",
    "department": "Growth Strategy ",
    "role": "Strategy Consultant ",
    "summary": "I dont have profile summary ",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/27.jpg"
  },
  {
    "id": "152",
    "name": "Victoria Botsford",
    "linkedin_url": "https://www.linkedin.com/in/tori-botsford63/",
    "connections": [
      "64",
      "137",
      "121",
      "148",
      "140"
    ],
    "company": "United Talent Agency",
    "department": "Digital Talent & Innovations and TV Lit",
    "role": "Agent",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/8.jpg"
  },
  {
    "id": "153",
    "name": "Pushaka Qubro",
    "linkedin_url": "https://www.linkedin.com/in/pushaka-qubro-962343a3",
    "connections": [
      "60",
      "64",
      "154",
      "12",
      "74"
    ],
    "company": "Pertamina",
    "department": "Business Development",
    "role": "Analyst",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/23.jpg"
  },
  {
    "id": "154",
    "name": "Eugenio Fragasso",
    "linkedin_url": "https://www.linkedin.com/in/eugenio-fragasso-68b054b3/",
    "connections": [
      "135",
      "62",
      "82",
      "2",
      "66"
    ],
    "company": "Roland Berger",
    "department": "Management Consulting",
    "role": "Senior Consultant",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/13.jpg"
  },
  {
    "id": "155",
    "name": "Dennis Yang",
    "linkedin_url": "https://www.linkedin.com/in/dennis-hueyen-yang-41a782a2",
    "connections": [
      "169",
      "97",
      "102",
      "156",
      "80"
    ],
    "company": "Accenture",
    "department": "telco industry",
    "role": "Manager: led teams to define digital transformation plan for clients",
    "summary": "MBA Candidate at Columbia Business School class of 2026",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/9.jpg"
  },
  {
    "id": "156",
    "name": "Diego Montalvo",
    "linkedin_url": "https://www.linkedin.com/in/diego-montalvo-hernandez-8b5498151/",
    "connections": [
      "29",
      "146",
      "169",
      "155",
      "54"
    ],
    "company": "BCG",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School | Ex-BCG",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/16.jpg"
  },
  {
    "id": "157",
    "name": "Laura Ribas",
    "linkedin_url": "https://www.linkedin.com/in/laura-ribas-abislaiman-666a64213/",
    "connections": [
      "114",
      "168",
      "94",
      "165",
      "161"
    ],
    "company": "PharmaNew (family business)",
    "department": "Sales and marketing",
    "role": "Manager",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/14.jpg"
  },
  {
    "id": "158",
    "name": "Archit Parikh",
    "linkedin_url": "https://www.linkedin.com/in/architparikh/",
    "connections": [
      "74",
      "143",
      "12",
      "147",
      "10"
    ],
    "company": "Bankers Without Boundaries",
    "department": "Investment Banking",
    "role": "Associate",
    "summary": NaN,
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/10.jpg"
  },
  {
    "id": "159",
    "name": "Jose Lizarazo",
    "linkedin_url": "https://www.linkedin.com/in/jose-manuel-lizarazo/",
    "connections": [
      "24",
      "47",
      "15",
      "134",
      "94"
    ],
    "company": "Foodology Inc",
    "department": "General Management",
    "role": "City Manager Medellin",
    "summary": "Industrial Engineer from Universidad de los Andes. Focused on delivering results and data-driven decision-making. Passionate about entrepreneurship with over 4 years of experience in a hyper-growth startup.\n\nCurrently pursuing my Masters in Business Administration at Columbia Business School.",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/29.jpg"
  },
  {
    "id": "160",
    "name": "Alvaro Munoz",
    "linkedin_url": "https://www.linkedin.com/in/alvaro-mu%C3%B1oz-palacin-b1318b171/?originalSubdomain=es",
    "connections": [
      "66",
      "38",
      "82",
      "121",
      "2"
    ],
    "company": "(i) McKinsey & Company , (ii) AMFRESH (Agri-tech company)",
    "department": "(i) Associate at McKinsey, (ii) Innovation department at AMFRESH",
    "role": "(i) Associate at McKinsey, (ii) Associate in the innovation department at AMFRESH",
    "summary": "Do not have one",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/16.jpg"
  },
  {
    "id": "161",
    "name": "Josh Lauder",
    "linkedin_url": "https://www.linkedin.com/in/joshlauder",
    "connections": [
      "157",
      "168",
      "165",
      "107",
      "7"
    ],
    "company": "Indagare Travel",
    "department": "Productions ",
    "role": "Productions and Business Development Senior Associate",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/27.jpg"
  },
  {
    "id": "162",
    "name": "Euan McKay",
    "linkedin_url": "https://www.linkedin.com/in/euan-mckay-0190a0124?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "2",
      "27",
      "160",
      "154",
      "10"
    ],
    "company": "Strategy&",
    "department": "M&A, TMT",
    "role": "Manager",
    "summary": "MBA @ Columbia Business School | Investing in early stage climate and impact founders @ LEO Impact Fund",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/8.jpg"
  },
  {
    "id": "163",
    "name": "Harry Alappat",
    "linkedin_url": "https://LinkedIn.com/in/harryalappat",
    "connections": [
      "168",
      "165",
      "157",
      "161",
      "136"
    ],
    "company": "McKinsey",
    "department": "Consulting",
    "role": "Associate",
    "summary": "MBA Candidate at Columbia Business School",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Harry.jpeg"
  },
  {
    "id": "164",
    "name": "Haerin Kang",
    "linkedin_url": "https://www.linkedin.com/in/haerinkang",
    "connections": [
      "163",
      "165",
      "7",
      "168",
      "114"
    ],
    "company": "my family business was the most recent employer.",
    "department": "corporate strategy ",
    "role": "corporate strategist ",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/3.jpg"
  },
  {
    "id": "165",
    "name": "David Maximilian Tessner",
    "linkedin_url": "https://www.linkedin.com/in/david-maximilian-tessner-9a605aaa/",
    "connections": [
      "168",
      "163",
      "114",
      "164",
      "157"
    ],
    "company": "ProSiebenSat.1 Media AG",
    "department": "M&A",
    "role": "Manager",
    "summary": "Columbia MBA Candidate 2026",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/25.jpg"
  },
  {
    "id": "166",
    "name": "Anja Tonkovic-Capin",
    "linkedin_url": "https://www.linkedin.com/in/anja-tonkovic-capin",
    "connections": [
      "114",
      "168",
      "165",
      "157",
      "127"
    ],
    "company": "Incentrum ",
    "department": "IB ",
    "role": "Analyst",
    "summary": NaN,
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/25.jpg"
  },
  {
    "id": "167",
    "name": "Stephen Barry",
    "linkedin_url": "https://www.linkedin.com/in/stephenbarry1/",
    "connections": [
      "163",
      "43",
      "170",
      "164",
      "136"
    ],
    "company": "COARE Companies",
    "department": "Investments",
    "role": "VP of Investments",
    "summary": "NYC based real estate investment & development professional",
    "cluster": "Z",
    "imageUrl": "/images/profiles/Stephen.jpeg"
  },
  {
    "id": "168",
    "name": "Alexander Njiru",
    "linkedin_url": "https://www.linkedin.com/in/alexander-njiru-187122346",
    "connections": [
      "165",
      "163",
      "43",
      "157",
      "107"
    ],
    "company": "Cygnus Holdings Ltd",
    "department": "Board of Directors",
    "role": "Director",
    "summary": "MBA candidate at Columbia Business School",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/2.jpg"
  },
  {
    "id": "169",
    "name": "Kenza Bouhassoune",
    "linkedin_url": "https://www.linkedin.com/in/kenza-bouhassoune-36273a150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "connections": [
      "155",
      "56",
      "63",
      "172",
      "156"
    ],
    "company": "Mckinsey & Company",
    "department": "Consulting",
    "role": "Business analyst",
    "summary": "Industrial engineer with extensive experience in retail and consulting ",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/18.jpg"
  },
  {
    "id": "170",
    "name": "Kabir  Sardana ",
    "linkedin_url": "https://www.linkedin.com/in/kabir-sardana-74511753?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "connections": [
      "85",
      "52",
      "165",
      "53",
      "33"
    ],
    "company": "Self Employed. Used to work in Investment Banking then Real Estate Private Equity. Thereafter helped real estate developers with fund raising and project acquisition. As well as worked with startups/SPACs.\n",
    "department": "Real Estate/Financial Services",
    "role": "Investment Associate/Founder",
    "summary": "Worked across Private Equity, Investment Banking and then started a boutique advisory firm.\n\nNow spending time in New York further exploring new opportunities.",
    "cluster": "Z",
    "imageUrl": "https://randomuser.me/api/portraits/female/17.jpg"
  },
  {
    "id": "171",
    "name": "Tianyi Peng",
    "linkedin_url": "https://www.linkedin.com/in/tianyi-peng-8a6909b4/",
    "connections": [
      "104",
      "138",
      "58",
      "148",
      "152"
    ],
    "company": "Columbia Business School",
    "department": "Decision, Risk and Operations",
    "role": "Assistant Professor",
    "summary": "AI for Decision Making",
    "cluster": "W",
    "imageUrl": "https://randomuser.me/api/portraits/female/12.jpg"
  },
  {
    "id": "172",
    "name": "Malek Ben Sliman",
    "linkedin_url": "https://www.linkedin.com/in/malekbensliman/",
    "connections": [
      "169",
      "63",
      "72",
      "156",
      "106"
    ],
    "company": "Columbia Business School",
    "department": "Marketing",
    "role": "Adjust Professor",
    "summary": "",
    "cluster": "X",
    "imageUrl": "https://randomuser.me/api/portraits/female/29.jpg"
  }
];