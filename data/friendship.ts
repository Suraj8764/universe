export interface FriendProfile {
  name: string;
  nickname: string;
  avatarColor: string;
  favoriteQuote: string;
}

export interface TimelineMilestone {
  id: string;
  phase: string;
  title: string;
  date: string;
  badge: string;
  iconName: "Sparkles" | "Heart" | "Laugh" | "PartyPopper" | "ShieldCheck" | "Compass";
  description: string;
  highlightQuote: string;
  tag: string;
}

export interface MemoryPhoto {
  id: string;
  title: string;
  date: string;
  location: string;
  caption: string;
  longStory: string;
  aspectRatio: "portrait" | "landscape" | "square";
  rotationDeg: number;
  category: "all" | "adventures" | "candid" | "celebrations";
  svgIllustrationType: "sunset" | "coffee" | "stars" | "roadtrip" | "rain" | "party" | "study" | "hug";
  imagePath?: string; // Optional user-provided photo path (e.g., '/images/photo1.jpg')
}

export interface OpenWhenLetter {
  id: string;
  categoryNumber: number;
  title: string;
  previewPrompt: string;
  envelopeColor: string;
  waxColor: string;
  letterGreeting: string;
  letterBody: string[];
  signature: string;
  musicMood: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    text: string;
    target: "ritu" | "smurti" | "both";
    icon: string;
    subtext: string;
  }[];
}

export interface SpecialMomentCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "Laugh" | "MessagesSquare" | "Swords" | "KeyRound" | "Sparkles";
  statsText: string;
  accentGradient: string;
  bgGlow: string;
}

export const friendshipData = {
  meta: {
    title: "The Friendship Universe 💗",
    friends: {
      person1: "Ritu",
      person2: "Smurti",
      shortCombo: "Ritu & Smurti",
      duoTitle: "Soul Sisters & Best Friends Forever",
    },
    hero: {
      heading: "Welcome to Our Little Universe",
      names: "Ritu & Smurti",
      subtitle: "Two souls, countless memories, one beautiful friendship.",
      ctaButton: "Enter Our Little World",
      floatingBadges: [
        "✨ Infinite Laughs",
        "💌 Secrets Kept: 100%",
        "☕ Endless Late Talks",
        "🌸 Forever & Always",
      ],
    },
  },

  profiles: {
    ritu: {
      name: "Ritu",
      nickname: "Sunshine / The Wise One",
      avatarColor: "from-pink-400 to-rose-400",
      favoriteQuote: "Happiness is real only when shared with your favorite person.",
    },
    smurti: {
      name: "Smurti",
      nickname: "Star / The Cheerful Spark",
      avatarColor: "from-purple-400 to-indigo-400",
      favoriteQuote: "A good friend knows all your stories; a best friend helped you write them.",
    },
  },

  // Timeline Milestones (Editable)
  timelineMilestones: [
    {
      id: "milestone-1",
      phase: "Chapter I",
      title: "How the Friendship Started",
      date: "The First Hello",
      badge: "The Beginning",
      iconName: "Sparkles",
      description:
        "A chance encounter that felt quietly written in the stars. An awkward initial greeting, an exchange of smiles, and that instant intuition that this wasn't going to be just another acquaintance, but the start of something legendary.",
      highlightQuote: "Neither of us knew that a simple 'Hello' would change everything forever.",
      tag: "Destiny",
    },
    {
      id: "milestone-2",
      phase: "Chapter II",
      title: "First Memorable Moment",
      date: "The Day Everything Clicked",
      badge: "The Spark",
      iconName: "Heart",
      description:
        "The day we had our first deep conversation and laughed until our cheeks hurt over the simplest thing. We realized we shared the exact same quirks, secret thoughts, and humor. In that exact moment, we knew we had found our person.",
      highlightQuote: "Finding someone whose wavelength matches yours is true magic.",
      tag: "Connection",
    },
    {
      id: "milestone-3",
      phase: "Chapter III",
      title: "Funniest Memories",
      date: "Uncontrollable Giggles & Inside Jokes",
      badge: "Pure Chaos",
      iconName: "Laugh",
      description:
        "The disastrous kitchen experiments, the secret nicknames that would baffle any outsider, and those uncontrollable bouts of giggles in the quietest rooms where one glance was enough to set both of us off into tears of laughter.",
      highlightQuote: "We don't need a comedian when one glance between us is a comedy special.",
      tag: "Inside Jokes",
    },
    {
      id: "milestone-4",
      phase: "Chapter IV",
      title: "Special Occasions",
      date: "Midnight Countdowns & Celebrations",
      badge: "Milestones",
      iconName: "PartyPopper",
      description:
        "Midnight birthday calls that never stayed under five minutes, surprise gifts wrapped with love, cheering each other on through every victory, and turning ordinary weekends into unforgettable mini-festivals of joy.",
      highlightQuote: "Every celebration is ten times brighter with your best friend beside you.",
      tag: "Celebration",
    },
    {
      id: "milestone-5",
      phase: "Chapter V",
      title: "Unforgettable Moments",
      date: "Through Thick and Thin",
      badge: "Unbreakable",
      iconName: "ShieldCheck",
      description:
        "Standing side by side through life's unexpected rainy days. No masks, no judgment, just an unspoken sanctuary where tears could fall freely and be wiped away by a warm hug and the steady reminder: 'We will get through this together.'",
      highlightQuote: "True friends aren't the ones who make your problems disappear, but those who won't disappear when you face problems.",
      tag: "Forever",
    },
  ] as TimelineMilestone[],

  // Memory Wall Polaroid items (Editable)
  polaroidMemories: [
    {
      id: "polaroid-1",
      title: "Golden Hour Giggles",
      date: "October Sunset",
      location: "Our Favorite Hillside",
      caption: "When the sky was painted gold and our smiles were infinite.",
      longStory:
        "We chased the sunset, sat on the grass with iced drinks, and talked about where we would be in ten years. Whatever the future holds, we promised we'd still be holding hands and laughing just like this.",
      aspectRatio: "portrait",
      rotationDeg: -3,
      category: "candid",
      svgIllustrationType: "sunset",
    },
    {
      id: "polaroid-2",
      title: "The Midnight Coffee Run",
      date: "Winter Midnight",
      location: "Corner Café",
      caption: "Caffeine, warm pastries, and conversations that saved our sanity.",
      longStory:
        "It was 1:00 AM, the world was quiet, but our ideas and gossip were louder than ever. Some of our best life plans and therapeutic healing happened over steamed mugs of coffee.",
      aspectRatio: "square",
      rotationDeg: 2.5,
      category: "adventures",
      svgIllustrationType: "coffee",
    },
    {
      id: "polaroid-3",
      title: "Stargazing & Wild Dreams",
      date: "Summer Night",
      location: "Open Terrace Under the Stars",
      caption: "Dreaming big under a million celestial witnesses.",
      longStory:
        "Looking up at constellations and whispering our boldest hopes into the cool night air. Having a friend who believes in your dreams even when you doubt yourself is the rarest gift.",
      aspectRatio: "landscape",
      rotationDeg: -2,
      category: "adventures",
      svgIllustrationType: "stars",
    },
    {
      id: "polaroid-4",
      title: "Spontaneous Road Trip",
      date: "Spring Breezes",
      location: "Highway to Nowhere",
      caption: "Windows rolled down, singing off-key at the top of our lungs.",
      longStory:
        "No map, no itinerary, just our favorite playlist blasted on full volume. Half the time we forgot the lyrics, but the sheer joy in the car was unmistakable.",
      aspectRatio: "portrait",
      rotationDeg: 3.5,
      category: "adventures",
      svgIllustrationType: "roadtrip",
    },
    {
      id: "polaroid-5",
      title: "The Umbrella Disaster",
      date: "Monsoon Afternoon",
      location: "City Streets",
      caption: "The umbrella broke, so we decided to dance in the rain instead.",
      longStory:
        "A sudden cloudburst caught us completely off-guard. When the cheap umbrella turned inside out, we looked at each other and couldn't help but splash through puddles like kids.",
      aspectRatio: "landscape",
      rotationDeg: -4,
      category: "candid",
      svgIllustrationType: "rain",
    },
    {
      id: "polaroid-6",
      title: "Birthday Queen Celebration",
      date: "Birthday Eve",
      location: "Living Room Fort",
      caption: "Balloons, messy cake frosting, and unconditional love.",
      longStory:
        "We spent hours blowing up balloons, stringing fairy lights, and setting up the cutest midnight surprise. The look of sheer joy and happy tears on that face made every second worth it.",
      aspectRatio: "square",
      rotationDeg: 2,
      category: "celebrations",
      svgIllustrationType: "party",
    },
    {
      id: "polaroid-7",
      title: "Study Night Turned Gossip Marathon",
      date: "Exam Prep Week",
      location: "Study Table with Sticky Notes",
      caption: "We swore we'd finish the syllabus. Gossip won 10 to 0.",
      longStory:
        "Books open, highlighter in hand, and ten minutes in: 'Wait, did I tell you what happened the other day?' Before we knew it, it was 4 AM and we knew everything except chapter four.",
      aspectRatio: "portrait",
      rotationDeg: -2.5,
      category: "candid",
      svgIllustrationType: "study",
    },
    {
      id: "polaroid-8",
      title: "Soul Sister Hugs",
      date: "Always & Forever",
      location: "Everywhere We Go",
      caption: "The kind of hug that puts all your broken pieces back together.",
      longStory:
        "No words were needed. Just a long, warm embrace that said: 'I'm right here with you, and everything is going to be alright.' The ultimate comfort of true friendship.",
      aspectRatio: "square",
      rotationDeg: 3,
      category: "celebrations",
      svgIllustrationType: "hug",
    },
  ] as MemoryPhoto[],

  // Open When Letters (The 6 required categories)
  openWhenLetters: [
    {
      id: "letter-smile",
      categoryNumber: 1,
      title: "Open when you need a smile",
      previewPrompt: "A little burst of sunshine for when your sky looks grey.",
      envelopeColor: "from-pink-100 to-rose-100 border-pink-300",
      waxColor: "bg-rose-400 text-rose-50",
      letterGreeting: "Dearest Ritu & Smurti,",
      letterBody: [
        "Hey you! Pause for a second and take a gentle, deep breath.",
        "Remember that time we tried so hard to look poised and serious, only for one of us to make a weird squeak and send us both collapsing in hysterics? Think about that sound right now.",
        "Your smile isn't just charming—it carries a genuine warmth that brightens everyone around you, especially your best friend. Whatever small trouble is bothering you today, remember it's just a tiny wave in a vast, beautiful ocean.",
        "You are so deeply cherished, loved, and valued. Now soften your shoulders, let the corner of your lips curl upward, and wear that dazzling smile. You've got this!",
      ],
      signature: "With infinite love & cheerful hugs 🌸",
      musicMood: "Uplifting & Bright",
    },
    {
      id: "letter-sad",
      categoryNumber: 2,
      title: "Open when you feel sad",
      previewPrompt: "A warm comforting embrace when words feel too heavy.",
      envelopeColor: "from-purple-100 to-indigo-100 border-purple-300",
      waxColor: "bg-purple-500 text-purple-50",
      letterGreeting: "My Dearest Best Friend,",
      letterBody: [
        "First of all, wrap your arms around yourself and feel this virtual hug from me. Hold on tight.",
        "It is completely okay to feel sad. You don't have to put on a brave face, you don't have to explain yourself, and you don't have to be strong all the time. Being human means honoring the heavy days too.",
        "I wish I could be sitting right next to you right now with your comfort food and cozy blankets. But please know that even across distance, my heart is right beside yours.",
        "Cry if your heart feels full. Rest without feeling guilty. This feeling will pass, the sun will shine warm on your face again, and until it does, I will hold the umbrella for you.",
      ],
      signature: "Your forever safe space & best friend 💜",
      musicMood: "Gentle & Calming",
    },
    {
      id: "letter-miss",
      categoryNumber: 3,
      title: "Open when you miss your best friend",
      previewPrompt: "Proof that distance is powerless against soul connections.",
      envelopeColor: "from-fuchsia-100 to-pink-100 border-fuchsia-300",
      waxColor: "bg-fuchsia-400 text-fuchsia-50",
      letterGreeting: "Hey Soul Sister,",
      letterBody: [
        "Guess what? I was just missing you too! It’s like we share a cosmic telepathy that never sleeps.",
        "Sometimes an ordinary moment happens—a funny sign on the road, a weird conversation someone has nearby, or a song playing on the radio—and my immediate instinct is: 'I have to tell her this right now!'",
        "Miles, schedules, and daily routines can never dim the bond we've forged. You are woven into my favorite memories, my personality, and my everyday thoughts.",
        "Consider this letter your official invitation to call or voice-note me right this second. Even if you just ramble about your day or send three hilarious memes, my inbox is always waiting for you.",
      ],
      signature: "Always a phone call away, with all my love ✨",
      musicMood: "Warm & Nostalgic",
    },
    {
      id: "letter-laugh",
      categoryNumber: 4,
      title: "Open when you want to laugh",
      previewPrompt: "An emergency dose of chaotic friendship humor.",
      envelopeColor: "from-amber-100 to-yellow-100 border-amber-300",
      waxColor: "bg-amber-400 text-amber-50",
      letterGreeting: "Hello Partner in Crime,",
      letterBody: [
        "Emergency comedic intervention initiated!",
        "Let us take a brief inventory of our greatest shared achievements: tripping on completely flat surfaces, formulating secret nicknames that make zero grammatical sense, and making faces across the room that would get us thrown out of any respectable establishment.",
        "Remember that time we thought we had our lives completely put together, and then five minutes later we were panicking over something utterly absurd? We are a walking sitcom, and honestly, the ratings are top tier.",
        "Never let the world make you too sensible. Our chaotic energy is a treasure, and nobody laughs as wonderfully as we do together!",
      ],
      signature: "Your fellow chaos partner 😂",
      musicMood: "Playful & Bouncy",
    },
    {
      id: "letter-difficult",
      categoryNumber: 5,
      title: "Open when life gets difficult",
      previewPrompt: "A reminder of your resilience and the strength inside you.",
      envelopeColor: "from-sky-100 to-indigo-100 border-sky-300",
      waxColor: "bg-indigo-400 text-indigo-50",
      letterGreeting: "To the Strongest Soul I Know,",
      letterBody: [
        "Take a slow breath. Inhale courage, exhale doubt.",
        "Look at everything you've already walked through in this life. There were days you wondered if you would ever make it through the week, and yet you emerged wiser, kinder, and more resilient than ever.",
        "Difficult days are not the end of the story; they are simply the hard pages that make the triumphant chapters so much sweeter. You do not have to figure out the next five years or the next five months—just take the next right step.",
        "I believe in you with every fiber of my being. Even when you can't see your own light, I see it glowing brighter than ever. We walk this road together, no matter what.",
      ],
      signature: "Always by your side, through every storm 🛡️",
      musicMood: "Empowering & Tender",
    },
    {
      id: "letter-remember",
      categoryNumber: 6,
      title: "Open when you want to remember your friendship",
      previewPrompt: "A timeless reflection on the miracle of Ritu & Smurti.",
      envelopeColor: "from-rose-100 to-purple-100 border-rose-300",
      waxColor: "bg-rose-500 text-rose-50",
      letterGreeting: "Dearest Ritu & Smurti,",
      letterBody: [
        "In a world of billions of people, out of all the paths our lives could have taken, the universe brought our two souls together.",
        "Think back to the first time our friendship blossomed. Through every season, through laughter and tears, through quiet evenings and big milestones, this bond has remained our sweetest anchor.",
        "True friendship doesn't demand perfection; it celebrates authenticity. With each other, we can be our truest, silliest, most vulnerable selves without any hesitation.",
        "Thank you for being my anchor, my sister, my confidante, and my eternal cheerleader. This Friendship Universe is ours forever, written in stardust and endless love.",
      ],
      signature: "Two souls, one timeless bond ❤️",
      musicMood: "Ethereal & Moving",
    },
  ] as OpenWhenLetter[],

  // Friendship Quiz
  quiz: {
    title: "The Ultimate Friendship Quiz",
    subtitle: "Let's settle the classic best-friend debates once and for all!",
    questions: [
      {
        id: 1,
        question: "Who is more dramatic?",
        subtitle: "When a minor inconvenience happens...",
        options: [
          { text: "Ritu 🌸", target: "ritu", icon: "🎭", subtext: "Oscar-worthy monologue every time" },
          { text: "Smurti 💜", target: "smurti", icon: "✨", subtext: "Main character energy 24/7" },
          { text: "Both of Us! 👯‍♀️", target: "both", icon: "🌟", subtext: "We should star in our own drama series" },
        ],
      },
      {
        id: 2,
        question: "Who laughs the most?",
        subtitle: "At jokes that aren't even funny to anyone else...",
        options: [
          { text: "Ritu 🌸", target: "ritu", icon: "😄", subtext: "Starts laughing before the punchline" },
          { text: "Smurti 💜", target: "smurti", icon: "🤣", subtext: "Silent wheezing until tears stream down" },
          { text: "Both of Us! 👯‍♀️", target: "both", icon: "💖", subtext: "We trigger each other's laughter loop" },
        ],
      },
      {
        id: 3,
        question: "Who is always late?",
        subtitle: "When 'I'm 5 minutes away' actually means...",
        options: [
          { text: "Ritu 🌸", target: "ritu", icon: "⏰", subtext: "Fashionably late is a lifestyle" },
          { text: "Smurti 💜", target: "smurti", icon: "⏳", subtext: "Still picking out the outfit" },
          { text: "Both of Us! 👯‍♀️", target: "both", icon: "🐢", subtext: "Time is merely a suggestion for us" },
        ],
      },
      {
        id: 4,
        question: "Who gives the best advice?",
        subtitle: "When life gets tangled and you need clarity...",
        options: [
          { text: "Ritu 🌸", target: "ritu", icon: "🦉", subtext: "Calm, grounded, and deeply wise" },
          { text: "Smurti 💜", target: "smurti", icon: "💡", subtext: "Honest, fiercely loving, and sharp" },
          { text: "Both of Us! 👯‍♀️", target: "both", icon: "✨", subtext: "Together we form one super-genius" },
        ],
      },
      {
        id: 5,
        question: "Who is more emotional?",
        subtitle: "Watching cute animal reels or heartwarming movies...",
        options: [
          { text: "Ritu 🌸", target: "ritu", icon: "🥺", subtext: "Big heart with deep feelings" },
          { text: "Smurti 💜", target: "smurti", icon: "💧", subtext: "Will shed tears over a sweet commercial" },
          { text: "Both of Us! 👯‍♀️", target: "both", icon: "😭", subtext: "Two softies hugging through the tears" },
        ],
      },
      {
        id: 6,
        question: "Who is the biggest foodie?",
        subtitle: "When the most serious conversation is 'What are we eating?'...",
        options: [
          { text: "Ritu 🌸", target: "ritu", icon: "🍕", subtext: "Always ready for dessert and treats" },
          { text: "Smurti 💜", target: "smurti", icon: "🍟", subtext: "Knows every trending café menu" },
          { text: "Both of Us! 👯‍♀️", target: "both", icon: "🍩", subtext: "Food is our primary bonding ritual" },
        ],
      },
    ] as QuizQuestion[],

    resultsSummary: {
      duoArchetype: "The Celestial Soulmates",
      compatibilityScore: "100%",
      verdictTitle: "A Match Made in Heaven! 💗",
      verdictDescription:
        "The stars have calculated the cosmic data: Ritu and Smurti are an unstoppable duo. Whether it's dramatic stories, foodie cravings, or crying over wholesome videos, your quirks complement each other in the most harmonious way. You are proof that soulmates exist in best friends!",
      funStats: [
        { label: "Laughter Synchronization", value: "99.9%" },
        { label: "Drama Level", value: "Max (Iconic)" },
        { label: "Telepathy Accuracy", value: "100%" },
        { label: "Lifelong Friendship Odds", value: "Guaranteed" },
      ],
    },
  },

  // Special Moments Cards
  specialMoments: [
    {
      id: "moment-laughter",
      title: "Random Laughter",
      subtitle: "The kind that makes your cheeks hurt",
      description:
        "Those sudden moments in public where eyes meet, an unspoken memory flashes, and neither of you can keep a straight face. Pure, unadulterated joy that needs no explanation.",
      iconName: "Laugh",
      statsText: "Countless shared giggles",
      accentGradient: "from-pink-400 to-rose-400",
      bgGlow: "bg-pink-100/70 border-pink-200",
    },
    {
      id: "moment-conversations",
      title: "Endless Conversations",
      subtitle: "Time stops when we start talking",
      description:
        "From discussing the mysteries of life, dreams, career hopes, to debating the plot of a TV show at 2 AM. Hours feel like minutes when Ritu & Smurti are talking.",
      iconName: "MessagesSquare",
      statsText: "10,000+ hours spoken",
      accentGradient: "from-purple-400 to-indigo-400",
      bgGlow: "bg-purple-100/70 border-purple-200",
    },
    {
      id: "moment-fights",
      title: "Silly Fights",
      subtitle: "Dramatic today, laughing tomorrow",
      description:
        "Squabbling over which café to visit, who forgot to reply first, or whose turn it was to choose the movie. Our little disagreements only prove how comfortable and real we are with each other.",
      iconName: "Swords",
      statsText: "Resolved with hugs & fries",
      accentGradient: "from-amber-400 to-orange-400",
      bgGlow: "bg-amber-100/70 border-amber-200",
    },
    {
      id: "moment-secrets",
      title: "Secret Sharing",
      subtitle: "The ultimate vault of trust",
      description:
        "The confessions that nobody else knows, the private fears, the unpolished truths, and the vulnerable moments kept safe inside the impenetrable fortress of our friendship.",
      iconName: "KeyRound",
      statsText: "Vault security: 100%",
      accentGradient: "from-emerald-400 to-teal-400",
      bgGlow: "bg-emerald-100/70 border-emerald-200",
    },
    {
      id: "moment-unforgettable",
      title: "Unforgettable Memories",
      subtitle: "Etched in our hearts forever",
      description:
        "Every road trip, rainy day adventure, birthday surprise, and quiet coffee hour. Together, Ritu & Smurti have created a treasury of golden memories that will last a lifetime.",
      iconName: "Sparkles",
      statsText: "Growing every single day",
      accentGradient: "from-fuchsia-400 to-pink-500",
      bgGlow: "bg-fuchsia-100/70 border-fuchsia-200",
    },
  ] as SpecialMomentCard[],

  // Final Surprise (Specific text requested)
  finalSurprise: {
    buttonLabel: "One Last Surprise",
    buttonSubtitle: "Click to unveil a heartfelt message from the heart of this universe",
    exactMessageLines: [
      "Some friendships are too beautiful to be explained in words.",
      "They make ordinary days special, turn little moments into unforgettable memories, and make life a little more beautiful.",
      "Ritu & Smurti, may your friendship always remain this special.",
      "Keep smiling. Keep laughing. Keep creating memories.",
      "With lots of love ❤️",
    ],
    closingDedication: "Dedicated to Ritu & Smurti — Forever & Always in This Universe.",
  },

  footer: {
    quote: "A true friend is someone who reaches for your hand and touches your heart.",
    madeWithLove: "Crafted with love for Ritu & Smurti 💗",
    year: "2026",
  },
};
