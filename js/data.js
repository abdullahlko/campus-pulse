

const eventsData = [
    {
        id: 1,
        title: "TechFest 2026",
        description: "Annual technology festival featuring hackathons, workshops, and tech talks from industry leaders. Join us for 48 hours of innovation and creativity!",
        date: "2025-03-15",
        time: "9:00 AM - 6:00 PM",
        venue: "Central Auditorium",
        category: "tech",
        clubId: 1,
        capacity: 500,
        registered: 342,
        image: "🖥️",
        status: "upcoming"
    },
    {
        id: 2,
        title: "Cultural Night",
        description: "A spectacular evening celebrating diversity through music, dance, and art performances from students across different cultures.",
        date: "2025-02-28",
        time: "6:00 PM - 10:00 PM",
        venue: "Open Air Theatre",
        category: "cultural",
        clubId: 2,
        capacity: 800,
        registered: 654,
        image: "🎭",
        status: "upcoming"
    },
    {
        id: 3,
        title: "Inter-College Basketball Tournament",
        description: "Compete against the best college teams in our annual basketball championship. Show your skills and bring glory to your college!",
        date: "2025-03-20",
        time: "8:00 AM - 5:00 PM",
        venue: "Basket Ball Court",
        category: "sports",
        clubId: 3,
        capacity: 200,
        registered: 180,
        image: "🏀",
        status: "upcoming"
    },
    {
        id: 4,
        title: "AI/ML Workshop Series",
        description: "Learn the fundamentals of Artificial Intelligence and Machine Learning through hands-on workshops led by experts.",
        date: "2025-02-20",
        time: "2:00 PM - 5:00 PM",
        venue: "ICC Lab 3",
        category: "tech",
        clubId: 1,
        capacity: 60,
        registered: 58,
        image: "🤖",
        status: "upcoming"
    },
    {
        id: 5,
        title: "Photography Exhibition",
        description: "Explore stunning photographs captured by our talented student photographers. Themes include nature, portraits, and urban life.",
        date: "2025-01-25",
        time: "10:00 AM - 4:00 PM",
        venue: "Academic Block B",
        category: "arts",
        clubId: 5,
        capacity: 300,
        registered: 300,
        image: "📷",
        status: "past"
    },
    {
        id: 6,
        title: "Startup Pitch Competition",
        description: "Present your innovative startup ideas to a panel of investors and entrepreneurs. Win funding and mentorship opportunities!",
        date: "2025-04-10",
        time: "10:00 AM - 3:00 PM",
        venue: "Central Auditorium (Hall-4)",
        category: "academic",
        clubId: 6,
        capacity: 150,
        registered: 89,
        image: "💡",
        status: "upcoming"
    },
    {
        id: 7,
        title: "Music Jam Session",
        description: "Join fellow musicians for an evening of live music, jamming, and collaboration. All genres and skill levels welcome!",
        date: "2025-01-15",
        time: "5:00 PM - 9:00 PM",
        venue: "High Note Music Society",
        category: "cultural",
        clubId: 7,
        capacity: 50,
        registered: 50,
        image: "🎸",
        status: "past"
    },
    {
        id: 8,
        title: "Annual Marathon",
        description: "Run for fitness and fun! Choose from 5K, 10K, or half marathon categories. Medals and certificates for all finishers.",
        date: "2025-03-05",
        time: "6:00 AM - 11:00 AM",
        venue: "Campus Ground",
        category: "sports",
        clubId: 3,
        capacity: 1000,
        registered: 756,
        image: "🏃",
        status: "upcoming"
    },
    {
        id: 9,
        title: "Debate Championship",
        description: "Showcase your argumentative skills in our annual debate competition. Topics range from politics to philosophy.",
        date: "2025-02-10",
        time: "9:00 AM - 4:00 PM",
        venue: "Central Auditorium",
        category: "academic",
        clubId: 8,
        capacity: 100,
        registered: 78,
        image: "🎤",
        status: "upcoming"
    },
    {
        id: 10,
        title: "Gaming Tournament - Valorant",
        description: "Compete in the ultimate Valorant tournament. Form your team and battle for the championship title!",
        date: "2025-01-20",
        time: "12:00 PM - 8:00 PM",
        venue: "B113",
        category: "tech",
        clubId: 4,
        capacity: 64,
        registered: 64,
        image: "🎮",
        status: "past"
    }
];


const clubsData = [
    {
        id: 1,
        name: "Tech Innovators Club",
        shortName: "TIC",
        description: "Fostering innovation through technology. We organize hackathons, workshops, and tech talks.",
        category: "tech",
        members: 245,
        events: 15,
        founded: 2018,
        logo: "💻",
        image:"assets/tech.png",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        id: 2,
        name: "Cultural Society",
        shortName: "CS",
        description: "Celebrating diversity through arts, music, and cultural performances.",
        category: "cultural",
        members: 312,
        events: 20,
        founded: 2015,
        logo: "🎨",
        image:"assets/cultural.png",
        gradient: "from-pink-500 to-rose-600"
    },
    {
        id: 3,
        name: "Sports Club",
        shortName: "SC",
        description: "Promoting fitness and sportsmanship through various athletic activities and competitions.",
        category: "sports",
        members: 420,
        events: 25,
        founded: 2010,
        logo: "⚽",
        image:"assets/sports.png",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        id: 4,
        name: "Gaming Guild",
        shortName: "GG",
        description: "Unite gamers! From casual games to competitive esports, we've got it all.",
        category: "tech",
        members: 180,
        events: 12,
        founded: 2020,
        logo: "🎮",
        
        image:"assets/entre.png",
        gradient: "from-purple-500 to-violet-600"
    },
    {
        id: 5,
        name: "Photography Club",
        shortName: "PC",
        description: "Capture moments, tell stories. Learn and share photography skills with fellow enthusiasts.",
        category: "arts",
        members: 156,
        events: 10,
        founded: 2017,
        logo: "📸",
        
        image:"assets/photography.png",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        id: 6,
        name: "Entrepreneurship Cell",
        shortName: "E-Cell",
        description: "Nurturing the entrepreneurs of tomorrow through mentorship, funding, and networking.",
        category: "academic",
        members: 198,
        events: 18,
        founded: 2016,
        logo: "🚀",
        
        image:"assets/entre.png",
        gradient: "from-red-500 to-rose-600"
    },
    {
        id: 7,
        name: "Music Society",
        shortName: "MS",
        description: "From classical to contemporary, express yourself through the language of music.",
        category: "cultural",
        members: 134,
        events: 14,
        founded: 2014,
        logo: "🎵",
        
        image:"assets/music.jpg",
        gradient: "from-cyan-500 to-blue-600"
    },
    {
        id: 8,
        name: "Debate Society",
        shortName: "DS",
        description: "Sharpen your argumentative skills and engage in intellectual discourse.",
        category: "academic",
        members: 89,
        events: 8,
        founded: 2019,
        logo: "💬",
        
        image:"assets/debate.png",
        gradient: "from-teal-500 to-emerald-600"
    },
    {
        id: 9,
        name: "Robotics Club",
        shortName: "RC",
        description: "Build, program, and compete with robots. From beginners to experts, all are welcome!",
        category: "tech",
        members: 112,
        events: 9,
        founded: 2018,
        logo: "🤖",
        
        image:"assets/robotics.png",
        gradient: "from-gray-600 to-slate-700"
    },
    {
        id: 10,
        name: "Environmental Club",
        shortName: "EC",
        description: "Making our campus and community greener, one initiative at a time.",
        category: "social",
        members: 167,
        events: 11,
        founded: 2017,
        logo: "🌱",
        
        image:"assets/environmental.png",
        gradient: "from-lime-500 to-green-600"
    }
];

const registrationsData = [
    { id: 1, name: "Arshil Masood", email: "arshil@college.edu", studentId: "STU001", eventId: 1, timestamp: "2025-01-28 10:30 AM" },
    { id: 2, name: "Abdullah Ansari", email: "abdullah@college.edu", studentId: "STU002", eventId: 1, timestamp: "2025-01-28 11:15 AM" },
    { id: 3, name: "Kamran Rizvi", email: "kamran@college.edu", studentId: "STU003", eventId: 2, timestamp: "2025-01-28 09:45 AM" },
    { id: 4, name: "Alafiya Irshad", email: "alafiya@college.edu", studentId: "STU004", eventId: 3, timestamp: "2025-01-27 03:20 PM" },
    { id: 5, name: "Ayushmaan Vaibhav", email: "ayushmaan@college.edu", studentId: "STU005", eventId: 1, timestamp: "2025-01-27 02:00 PM" },
    { id: 6, name: "Ghazi Haider", email: "ghazicollege.edu", studentId: "STU006", eventId: 4, timestamp: "2025-01-27 11:30 AM" },
    { id: 7, name: "Arman Khan", email: "arman@college.edu", studentId: "STU007", eventId: 2, timestamp: "2025-01-26 04:45 PM" },
    { id: 8, name: "Juveria Siddiqui", email: "juveria@college.edu", studentId: "STU008", eventId: 6, timestamp: "2025-01-26 10:00 AM" }
];


function getClubById(id) {
    return clubsData.find(club => club.id === id);
}


function getEventById(id) {
    return eventsData.find(event => event.id === id);
}


function formatDate(dateString) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}


function isUpcoming(dateString) {
    return new Date(dateString) >= new Date();
}
