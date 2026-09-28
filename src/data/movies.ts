import { Movie } from '../types/movie';

export const MOVIES: Movie[] = [
  {
    id: 'blade-runner-2049',
    title: 'Blade Runner 2049',
    originalTitle: 'Blade Runner 2049',
    tagline: 'There is still a little of every one of us in every part of what we do.',
    year: 2017,
    releaseDate: 'October 6, 2017',
    mpaaRating: 'R',
    duration: 164,
    genres: ['Sci-Fi', 'Neo-Noir', 'Drama', 'Mystery'],
    synopsis:
      'Thirty years after the events of the first film, a new Blade Runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what is left of society into chaos. K’s discovery leads him on a quest to find Rick Deckard, a former LAPD Blade Runner who has been missing for three decades.',
    director: 'Denis Villeneuve',
    screenplay: 'Hampton Fancher, Michael Green',
    cinematography: 'Roger Deakins',
    musicComposer: 'Hans Zimmer, Benjamin Wallfisch',
    cast: [
      { name: 'Ryan Gosling', role: "Officer K / Joe" },
      { name: 'Harrison Ford', role: 'Rick Deckard' },
      { name: 'Ana de Armas', role: 'Joi' },
      { name: 'Sylvia Hoeks', role: 'Luv' },
      { name: 'Robin Wright', role: 'Lt. Joshi' },
      { name: 'Mackenzie Davis', role: 'Mariette' },
      { name: 'Dave Bautista', role: 'Sapper Morton' },
      { name: 'Jared Leto', role: 'Niander Wallace' }
    ],
    posterUrl: '/src/assets/images/poster_neon_noir_1790573335606.jpg',
    backdropUrl: '/src/assets/images/hero_cinematic_scifi_1790573311179.jpg',
    trailerYoutubeId: 'gCcx85zbxz4',
    ratings: {
      imdb: 8.0,
      metascore: 81,
      rottenTomatoes: 88,
      userScore: 8.7,
      votesCount: '620,000+'
    },
    boxOffice: {
      budget: '$150,000,000',
      openingWeekend: '$31,525,000',
      worldwideGross: '$259,350,000',
      grossNumber: 259350000,
      multiplier: '1.7x'
    },
    awards: [
      'Winner: Academy Award for Best Cinematography (Roger Deakins)',
      'Winner: Academy Award for Best Visual Effects',
      'Winner: BAFTA Award for Best Cinematography',
      'Winner: BAFTA Award for Best Special Visual Effects'
    ],
    trivia: [
      'Roger Deakins received his first Academy Award for Best Cinematography after fourteen previous nominations across 23 years.',
      'Denis Villeneuve insisted on building practical sets instead of using green screens whenever possible to immerse the actors in atmospheric rain and dust.',
      'Harrison Ford accidentally punched Ryan Gosling in the face for real during the fight scene in the Las Vegas casino sequence.'
    ],
    quotes: [
      { quote: 'I have memories, but they are not real. They are just dreams or something.', speaker: 'Officer K' },
      { quote: 'Dying for the right cause. It is the most human thing we can do.', speaker: 'Freysa' },
      { quote: 'All the best memories are hers.', speaker: 'Dr. Ana Stelline' }
    ],
    userReviews: [
      {
        id: 'rev-br-1',
        author: 'Elena Vance',
        date: 'March 14, 2024',
        rating: 10,
        title: 'A towering visual and philosophical masterpiece',
        content:
          'Blade Runner 2049 does the unthinkable: it honors Ridley Scott’s original while expanding its thematic scope into an even more melancholic, profound reflection on what it means to possess a soul. Deakins’ lighting is sublime.',
        likes: 142,
        hasSpoilers: false
      },
      {
        id: 'rev-br-2',
        author: 'Marcus Cole',
        date: 'January 28, 2024',
        rating: 9,
        title: 'Hypnotic pacing with breathtaking sound design',
        content:
          'From the brutal bass synths of Zimmer and Wallfisch to Gosling’s quietly devastated performance, this is pure cinema. Give yourself over to its deliberate rhythm.',
        likes: 89,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['arrival', 'interstellar', 'the-matrix', 'zodiac'],
    featured: true,
    trending: true,
    moods: ['Mind-Bending', 'Visually Stunning', 'Dark & Gritty', 'Philosophical']
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    originalTitle: 'Interstellar',
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    year: 2014,
    releaseDate: 'November 7, 2014',
    mpaaRating: 'PG-13',
    duration: 169,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    synopsis:
      'When Earth becomes uninhabitable in the near future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humanity through an anomalous wormhole discovered near Saturn.',
    director: 'Christopher Nolan',
    screenplay: 'Jonathan Nolan, Christopher Nolan',
    cinematography: 'Hoyte van Hoytema',
    musicComposer: 'Hans Zimmer',
    cast: [
      { name: 'Matthew McConaughey', role: 'Joseph Cooper' },
      { name: 'Anne Hathaway', role: 'Dr. Amelia Brand' },
      { name: 'Jessica Chastain', role: 'Murphy Cooper (Adult)' },
      { name: 'Michael Caine', role: 'Professor John Brand' },
      { name: 'Matt Damon', role: 'Dr. Mann' },
      { name: 'John Lithgow', role: 'Donald' },
      { name: 'Bill Irwin', role: 'TARS (voice & puppeteer)' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'zSWdZVtXT7E',
    ratings: {
      imdb: 8.7,
      metascore: 74,
      rottenTomatoes: 73,
      userScore: 9.3,
      votesCount: '2,100,000+'
    },
    boxOffice: {
      budget: '$165,000,000',
      openingWeekend: '$47,510,360',
      worldwideGross: '$730,868,764',
      grossNumber: 730868764,
      multiplier: '4.4x'
    },
    awards: [
      'Winner: Academy Award for Best Visual Effects',
      'Nominee: 5 Academy Awards including Best Original Score & Sound Mixing',
      'Winner: BAFTA Award for Best Special Visual Effects'
    ],
    trivia: [
      'Astrophysicist and Nobel laureate Kip Thorne worked closely with Nolan to ensure the gravitational lensing equations and Gargantua black hole were mathematically accurate.',
      'The CGI rendering of the black hole took up to 100 hours per single frame, generating over 800 terabytes of scientific simulation data.',
      'Hans Zimmer composed the iconic organ soundtrack at Temple Church in London using a 1926 four-manual Harrison & Harrison organ.'
    ],
    quotes: [
      { quote: 'Do not go gentle into that good night; Old age should burn and rave at close of day.', speaker: 'Prof. Brand' },
      { quote: 'Love is the one thing we are capable of perceiving that transcends dimensions of time and space.', speaker: 'Dr. Amelia Brand' },
      { quote: 'We used to look up at the sky and wonder at our place in the stars. Now we just look down and worry about our place in the dirt.', speaker: 'Cooper' }
    ],
    userReviews: [
      {
        id: 'rev-int-1',
        author: 'Julian Thorne',
        date: 'February 10, 2024',
        rating: 10,
        title: 'An emotional and scientific triumph',
        content:
          'Interstellar is Nolan’s most emotional film. The docking sequence alone, backed by Zimmer’s pounding organ score "No Time for Caution", ranks among the tensest cinematic moments of all time.',
        likes: 215,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['arrival', 'blade-runner-2049', 'inception', 'oppenheimer'],
    featured: true,
    trending: true,
    moods: ['Mind-Bending', 'Visually Stunning', 'Philosophical', 'Emotional Masterpiece']
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    originalTitle: 'Oppenheimer',
    tagline: 'The world forever changes.',
    year: 2023,
    releaseDate: 'July 21, 2023',
    mpaaRating: 'R',
    duration: 180,
    genres: ['Biography', 'Drama', 'History'],
    synopsis:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, examining the moral, political, and personal consequences of unleashing nuclear fission upon the earth.',
    director: 'Christopher Nolan',
    screenplay: 'Christopher Nolan',
    cinematography: 'Hoyte van Hoytema',
    musicComposer: 'Ludwig Göransson',
    cast: [
      { name: 'Cillian Murphy', role: 'J. Robert Oppenheimer' },
      { name: 'Emily Blunt', role: 'Katherine "Kitty" Oppenheimer' },
      { name: 'Matt Damon', role: 'Leslie Groves' },
      { name: 'Robert Downey Jr.', role: 'Lewis Strauss' },
      { name: 'Florence Pugh', role: 'Jean Tatlock' },
      { name: 'Josh Hartnett', role: 'Ernest Lawrence' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'uYPbbksJxIg',
    ratings: {
      imdb: 8.9,
      metascore: 88,
      rottenTomatoes: 93,
      userScore: 9.1,
      votesCount: '810,000+'
    },
    boxOffice: {
      budget: '$100,000,000',
      openingWeekend: '$82,455,420',
      worldwideGross: '$957,000,000',
      grossNumber: 957000000,
      multiplier: '9.5x'
    },
    awards: [
      'Winner: 7 Academy Awards including Best Picture, Best Director & Best Actor',
      'Winner: 7 BAFTA Awards including Best Film',
      'Winner: 5 Golden Globe Awards'
    ],
    trivia: [
      'Nolan shot the movie using 65mm large-format film and had Kodak engineer the first-ever black-and-white IMAX film stock specifically for the Lewis Strauss perspective scenes.',
      'The Trinity test explosion was captured entirely practically using magnesium, black powder, gasoline, and high-speed IMAX shutters without computer-generated graphics.',
      'Cillian Murphy read the Bhagavad Gita and lost substantial weight to achieve Oppenheimer’s gaunt, cigarette-fueled silhouette.'
    ],
    quotes: [
      { quote: 'Now I am become Death, the destroyer of worlds.', speaker: 'J. Robert Oppenheimer' },
      { quote: 'They won’t fear it until they understand it. And they won’t understand it until they’ve used it.', speaker: 'J. Robert Oppenheimer' },
      { quote: 'Amateurs seek the sun and get eaten. Power stays in the shadows.', speaker: 'Lewis Strauss' }
    ],
    userReviews: [
      {
        id: 'rev-opp-1',
        author: 'Arthur Pendelton',
        date: 'December 12, 2023',
        rating: 10,
        title: 'Ludwig Göransson and Cillian Murphy ignite cinema',
        content:
          'Not a standard biopic, but an unrelenting historical psychological horror film. The tension during the Trinity sequence and the gymnasium speech is suffocating.',
        likes: 194,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['interstellar', 'there-will-be-blood', 'zodiac'],
    featured: true,
    trending: true,
    moods: ['Dark & Gritty', 'Philosophical', 'Emotional Masterpiece']
  },
  {
    id: 'dune-part-two',
    title: 'Dune: Part Two',
    originalTitle: 'Dune: Part Two',
    tagline: 'Long live the fighters.',
    year: 2024,
    releaseDate: 'March 1, 2024',
    mpaaRating: 'PG-13',
    duration: 166,
    genres: ['Sci-Fi', 'Adventure', 'Action', 'Drama'],
    synopsis:
      'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future only he can foresee.',
    director: 'Denis Villeneuve',
    screenplay: 'Denis Villeneuve, Jon Spaihts',
    cinematography: 'Greig Fraser',
    musicComposer: 'Hans Zimmer',
    cast: [
      { name: 'Timothée Chalamet', role: 'Paul Atreides / Muad’Dib' },
      { name: 'Zendaya', role: 'Chani' },
      { name: 'Rebecca Ferguson', role: 'Lady Jessica' },
      { name: 'Javier Bardem', role: 'Stilgar' },
      { name: 'Austin Butler', role: 'Feyd-Rautha Harkonnen' },
      { name: 'Florence Pugh', role: 'Princess Irulan' },
      { name: 'Josh Brolin', role: 'Gurney Halleck' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'Way9Dexny3w',
    ratings: {
      imdb: 8.6,
      metascore: 79,
      rottenTomatoes: 92,
      userScore: 9.0,
      votesCount: '580,000+'
    },
    boxOffice: {
      budget: '$190,000,000',
      openingWeekend: '$82,505,000',
      worldwideGross: '$714,400,000',
      grossNumber: 714400000,
      multiplier: '3.7x'
    },
    awards: [
      'Critic’s Choice Super Award for Best Science Fiction Movie',
      'Golden Trailer Award for Best Action / Thriller'
    ],
    trivia: [
      'The Giedi Prime colosseum sequence was filmed using custom infrared cameras to give the Harkonnen world an eerie, stark black-and-white sunless sheen.',
      'Greig Fraser created unique sand-diffusion lens rigs to prevent desert sand grains from ruining the digital sensors in Abu Dhabi and Jordan.',
      'Austin Butler spent four months training in Kali martial arts and voice-mimicking Stellan Skarsgård’s Baron Harkonnen delivery.'
    ],
    quotes: [
      { quote: 'You will not see me die here. You will see me lead them.', speaker: 'Paul Atreides' },
      { quote: 'May thy knife chip and shatter.', speaker: 'Feyd-Rautha' },
      { quote: 'As written! Lisan al-Gaib!', speaker: 'Stilgar' }
    ],
    userReviews: [
      {
        id: 'rev-dune-1',
        author: 'Cassandra Roy',
        date: 'April 2, 2024',
        rating: 10,
        title: 'The Lord of the Rings of modern Sci-Fi',
        content:
          'From the worm-riding spectacle to the tragic moral descent of Paul into messianic fanaticism, Villeneuve has delivered a landmark cinema experience.',
        likes: 180,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['blade-runner-2049', 'interstellar', 'arrival'],
    featured: true,
    trending: true,
    moods: ['Visually Stunning', 'Philosophical', 'High Octane Action']
  },
  {
    id: 'parasite',
    title: 'Parasite',
    originalTitle: '기생충 (Gisaengchung)',
    tagline: 'Act like you own the place.',
    year: 2019,
    releaseDate: 'October 11, 2019',
    mpaaRating: 'R',
    duration: 132,
    genres: ['Thriller', 'Drama', 'Comedy'],
    synopsis:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan, culminating in an unpredictable, tragic collision.',
    director: 'Bong Joon Ho',
    screenplay: 'Bong Joon Ho, Han Jin-won',
    cinematography: 'Hong Kyung-pyo',
    musicComposer: 'Jung Jae-il',
    cast: [
      { name: 'Song Kang-ho', role: 'Kim Ki-taek' },
      { name: 'Lee Sun-kyun', role: 'Park Dong-ik' },
      { name: 'Cho Yeo-jeong', role: 'Park Yeon-gyo' },
      { name: 'Choi Woo-shik', role: 'Kim Ki-woo' },
      { name: 'Park So-dam', role: 'Kim Ki-jung' },
      { name: 'Lee Jung-eun', role: 'Gook Moon-gwang' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: '5xH0R_46n4U',
    ratings: {
      imdb: 8.5,
      metascore: 96,
      rottenTomatoes: 99,
      userScore: 9.4,
      votesCount: '950,000+'
    },
    boxOffice: {
      budget: '$15,500,000',
      openingWeekend: '$393,216',
      worldwideGross: '$263,000,000',
      grossNumber: 263000000,
      multiplier: '17x'
    },
    awards: [
      'Winner: 4 Academy Awards including Best Picture (First non-English film in history)',
      'Winner: Palme d’Or at Cannes Film Festival (Unanimous vote)',
      'Winner: Golden Globe for Best Foreign Language Film'
    ],
    trivia: [
      'The luxurious Park family house was not a real residence; it was an elaborate multi-level open-air set designed specifically to manipulate natural sunlight angles.',
      'Director Bong Joon Ho storyboarded every single shot before filming began, resulting in minimal deleted scenes and tight pacing.',
      'The signature "Jessica, Only child, Illinois, Chicago" jingle was written by the co-writer based on a mnemonic song Korean students use to remember history.'
    ],
    quotes: [
      { quote: 'You know what kind of plan never fails? No plan at all.', speaker: 'Kim Ki-taek' },
      { quote: 'She’s rich, but still nice. - She’s nice because she’s rich.', speaker: 'Kim Chung-sook' },
      { quote: 'It’s so metaphorical.', speaker: 'Kim Ki-woo' }
    ],
    userReviews: [
      {
        id: 'rev-par-1',
        author: 'Min-jun Kim',
        date: 'May 18, 2023',
        rating: 10,
        title: 'Perfection in screenwriting and architectural direction',
        content:
          'Every staircase, every flood, every slice of peach is deliberate. The shift in tone halfway through is one of cinema’s greatest gear changes.',
        likes: 310,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['pulp-fiction', 'zodiac', 'whiplash'],
    featured: true,
    trending: false,
    moods: ['Mind-Bending', 'Dark & Gritty', 'Emotional Masterpiece']
  },
  {
    id: 'the-dark-knight',
    title: 'The Dark Knight',
    originalTitle: 'The Dark Knight',
    tagline: 'Why so serious?',
    year: 2008,
    releaseDate: 'July 18, 2008',
    mpaaRating: 'PG-13',
    duration: 152,
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
    synopsis:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    screenplay: 'Jonathan Nolan, Christopher Nolan',
    cinematography: 'Wally Pfister',
    musicComposer: 'Hans Zimmer, James Newton Howard',
    cast: [
      { name: 'Christian Bale', role: 'Bruce Wayne / Batman' },
      { name: 'Heath Ledger', role: 'Joker' },
      { name: 'Aaron Eckhart', role: 'Harvey Dent / Two-Face' },
      { name: 'Michael Caine', role: 'Alfred Pennyworth' },
      { name: 'Maggie Gyllenhaal', role: 'Rachel Dawes' },
      { name: 'Gary Oldman', role: 'James Gordon' },
      { name: 'Morgan Freeman', role: 'Lucius Fox' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'EXeTwQWrcwY',
    ratings: {
      imdb: 9.0,
      metascore: 84,
      rottenTomatoes: 94,
      userScore: 9.5,
      votesCount: '2,800,000+'
    },
    boxOffice: {
      budget: '$185,000,000',
      openingWeekend: '$158,411,483',
      worldwideGross: '$1,006,000,000',
      grossNumber: 1006000000,
      multiplier: '5.4x'
    },
    awards: [
      'Winner: Academy Award for Best Supporting Actor (Heath Ledger)',
      'Winner: Academy Award for Best Sound Editing',
      'Nominee: 8 Academy Awards'
    ],
    trivia: [
      'Heath Ledger locked himself away in a London hotel room for roughly six weeks to formulate the Joker’s signature mannerisms, voice, and anarchic ideology.',
      'The film was the first mainstream feature to use 15/70mm IMAX cameras for major live-action sequences, including the opening bank robbery.',
      'Christian Bale did not perform any wirework for the Chicago skyscraper ledge scene; he stood on the roof edge himself without vertigo.'
    ],
    quotes: [
      { quote: 'Some men just want to watch the world burn.', speaker: 'Alfred Pennyworth' },
      { quote: 'You either die a hero, or you live long enough to see yourself become the villain.', speaker: 'Harvey Dent' },
      { quote: 'He’s the hero Gotham deserves, but not the one it needs right now.', speaker: 'James Gordon' }
    ],
    userReviews: [
      {
        id: 'rev-tdk-1',
        author: 'Derrick Hunt',
        date: 'October 19, 2023',
        rating: 10,
        title: 'The gold standard for crime epics',
        content:
          'Ledger’s Joker remains the single most magnetic villain in cinema history. The pacing never relents, functioning as a high-stakes Heat-style crime saga.',
        likes: 275,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['inception', 'zodiac', 'pulp-fiction'],
    featured: false,
    trending: true,
    moods: ['Dark & Gritty', 'High Octane Action', 'Philosophical']
  },
  {
    id: 'inception',
    title: 'Inception',
    originalTitle: 'Inception',
    tagline: 'Your mind is the scene of the crime.',
    year: 2010,
    releaseDate: 'July 16, 2010',
    mpaaRating: 'PG-13',
    duration: 148,
    genres: ['Sci-Fi', 'Action', 'Adventure', 'Mystery'],
    synopsis:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    director: 'Christopher Nolan',
    screenplay: 'Christopher Nolan',
    cinematography: 'Wally Pfister',
    musicComposer: 'Hans Zimmer',
    cast: [
      { name: 'Leonardo DiCaprio', role: 'Dom Cobb' },
      { name: 'Joseph Gordon-Levitt', role: 'Arthur' },
      { name: 'Elliot Page', role: 'Ariadne' },
      { name: 'Tom Hardy', role: 'Eames' },
      { name: 'Ken Watanabe', role: 'Saito' },
      { name: 'Marion Cotillard', role: 'Mal Cobb' },
      { name: 'Cillian Murphy', role: 'Robert Fischer' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'YoHD9XEInc0',
    ratings: {
      imdb: 8.8,
      metascore: 74,
      rottenTomatoes: 87,
      userScore: 9.2,
      votesCount: '2,500,000+'
    },
    boxOffice: {
      budget: '$160,000,000',
      openingWeekend: '$62,785,337',
      worldwideGross: '$836,848,410',
      grossNumber: 836848410,
      multiplier: '5.2x'
    },
    awards: [
      'Winner: 4 Academy Awards (Cinematography, Sound Editing, Sound Mixing, Visual Effects)',
      'Nominee: 8 Academy Awards including Best Picture & Best Original Screenplay'
    ],
    trivia: [
      'The rotating hallway zero-gravity brawl was filmed in a massive centrifuge constructed inside a converted airship hangar in Cardington, England.',
      'The iconic brass horns sound in Hans Zimmer’s score was created by slowing down Edith Piaf’s song "Non, je ne regrette rien" by 1000%.',
      'Nolan worked on the screenplay for over ten years before feeling ready to pitch it to Warner Bros.'
    ],
    quotes: [
      { quote: 'An idea is like a virus. Resilient. Highly contagious.', speaker: 'Dom Cobb' },
      { quote: 'You mustn’t be afraid to dream a little bigger, darling.', speaker: 'Eames' },
      { quote: 'Dreams feel real while we’re in them. It’s only when we wake up that we realize something was actually strange.', speaker: 'Dom Cobb' }
    ],
    userReviews: [
      {
        id: 'rev-inc-1',
        author: 'Sophia Chen',
        date: 'November 8, 2023',
        rating: 10,
        title: 'A masterclass in cross-cutting and original world building',
        content:
          'Four simultaneous dream layers intersecting in slow motion, synchronized to Zimmer’s "Time". It redefines what blockbuster cinema can achieve mentally.',
        likes: 168,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['interstellar', 'the-matrix', 'blade-runner-2049'],
    featured: false,
    trending: false,
    moods: ['Mind-Bending', 'Visually Stunning', 'High Octane Action']
  },
  {
    id: 'whiplash',
    title: 'Whiplash',
    originalTitle: 'Whiplash',
    tagline: 'The road to greatness can take you to the edge.',
    year: 2014,
    releaseDate: 'October 10, 2014',
    mpaaRating: 'R',
    duration: 106,
    genres: ['Drama', 'Music', 'Psychological'],
    synopsis:
      'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student’s potential, testing the boundary between coaching and brutal psychological abuse.',
    director: 'Damien Chazelle',
    screenplay: 'Damien Chazelle',
    cinematography: 'Sharone Meir',
    musicComposer: 'Justin Hurwitz',
    cast: [
      { name: 'Miles Teller', role: 'Andrew Neiman' },
      { name: 'J.K. Simmons', role: 'Terence Fletcher' },
      { name: 'Paul Reiser', role: 'Jim Neiman' },
      { name: 'Melissa Benoist', role: 'Nicole' },
      { name: 'Austin Stowell', role: 'Ryan Connolly' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: '7d_jQycdQGo',
    ratings: {
      imdb: 8.5,
      metascore: 88,
      rottenTomatoes: 94,
      userScore: 9.3,
      votesCount: '940,000+'
    },
    boxOffice: {
      budget: '$3,300,000',
      openingWeekend: '$135,388',
      worldwideGross: '$49,400,000',
      grossNumber: 49400000,
      multiplier: '15x'
    },
    awards: [
      'Winner: 3 Academy Awards including Best Supporting Actor (J.K. Simmons) & Best Film Editing',
      'Grand Jury Prize at Sundance Film Festival'
    ],
    trivia: [
      'Miles Teller did 99% of the drumming in the film himself, practicing for four hours a day until blisters literally bled over the snare drum skin.',
      'The entire feature was filmed in only 19 days in Los Angeles on a micro-budget.',
      'Damien Chazelle was an aspiring jazz drummer in high school and drew from the dread he felt during rehearsals with an aggressive conductor.'
    ],
    quotes: [
      { quote: 'There are no two words in the English language more harmful than "good job".', speaker: 'Terence Fletcher' },
      { quote: 'I’d rather die drunk, broke at 34 and have people talk about me, than be rich and sober at 90 and nobody remembered who I was.', speaker: 'Andrew Neiman' },
      { quote: 'Not quite my tempo.', speaker: 'Terence Fletcher' }
    ],
    userReviews: [
      {
        id: 'rev-whip-1',
        author: 'Leo Sterling',
        date: 'January 4, 2024',
        rating: 10,
        title: 'An electrifying duel disguised as jazz rehearsal',
        content:
          'J.K. Simmons gives an all-time performance. The final ten-minute drum solo contains more heart-stopping thrills than any summer superhero movie.',
        likes: 220,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['there-will-be-blood', 'parasite', 'oppenheimer'],
    featured: false,
    trending: false,
    moods: ['Dark & Gritty', 'Emotional Masterpiece']
  },
  {
    id: 'spirited-away',
    title: 'Spirited Away',
    originalTitle: '千と千尋の神隠し (Sen to Chihiro no Kamikakushi)',
    tagline: 'The tunnel led to a mysterious world...',
    year: 2001,
    releaseDate: 'July 20, 2001',
    mpaaRating: 'PG',
    duration: 125,
    genres: ['Animation', 'Adventure', 'Fantasy', 'Family'],
    synopsis:
      'During her family’s move to the suburbs, a sullen 10-year-old girl, Chihiro, wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts. After her parents are transformed, she must work at a bathhouse to free them.',
    director: 'Hayao Miyazaki',
    screenplay: 'Hayao Miyazaki',
    cinematography: 'Atsushi Okui',
    musicComposer: 'Joe Hisaishi',
    cast: [
      { name: 'Rumi Hiiragi', role: 'Chihiro Ogino / Sen (voice)' },
      { name: 'Miyu Irino', role: 'Haku (voice)' },
      { name: 'Mari Natsuki', role: 'Yubaba / Zeniba (voice)' },
      { name: 'Takashi Naito', role: 'Akio Ogino (voice)' },
      { name: 'Yasuko Sawaguchi', role: 'Yuko Ogino (voice)' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'ByXuk9QqQkk',
    ratings: {
      imdb: 8.6,
      metascore: 96,
      rottenTomatoes: 97,
      userScore: 9.5,
      votesCount: '830,000+'
    },
    boxOffice: {
      budget: '$19,000,000',
      openingWeekend: '$1,600,000 (Japan)',
      worldwideGross: '$395,800,000',
      grossNumber: 395800000,
      multiplier: '20.8x'
    },
    awards: [
      'Winner: Academy Award for Best Animated Feature (First and only hand-drawn anime winner)',
      'Winner: Golden Bear at Berlin International Film Festival',
      'Winner: 4 Annie Awards'
    ],
    trivia: [
      'Miyazaki wrote the story without a script; he developed the storyboard directly as the animation team drew, figuring out the climax in real time.',
      'Every single frame was overseen and hand-corrected by Miyazaki himself, who inspected over 144,000 animation cels.',
      'The soothing train ride across the flooded railway was praised by Akira Kurosawa as a masterclass in cinematic "Ma" (intentional quiet negative space).'
    ],
    quotes: [
      { quote: 'Once you’ve met someone you never really forget them. It just takes a while for your memories to return.', speaker: 'Zeniba' },
      { quote: 'Nothing that happens is ever forgotten, even if you can’t remember it.', speaker: 'Kamaji' },
      { quote: 'I promise I will get you out of here, Mom and Dad.', speaker: 'Chihiro' }
    ],
    userReviews: [
      {
        id: 'rev-sa-1',
        author: 'Naomi Tanaka',
        date: 'December 21, 2023',
        rating: 10,
        title: 'A timeless, restorative work of art',
        content:
          'Joe Hisaishi’s piano theme "One Summer’s Day" instantly brings tears to your eyes. Miyazaki crafts a world of spirits that feels ancient, living, and infinitely comforting.',
        likes: 245,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['spider-man-into-the-spider-verse', 'parasite'],
    featured: false,
    trending: true,
    moods: ['Visually Stunning', 'Philosophical', 'Emotional Masterpiece']
  },
  {
    id: 'the-matrix',
    title: 'The Matrix',
    originalTitle: 'The Matrix',
    tagline: 'Welcome to the Real World.',
    year: 1999,
    releaseDate: 'March 31, 1999',
    mpaaRating: 'R',
    duration: 136,
    genres: ['Sci-Fi', 'Action', 'Cyberpunk'],
    synopsis:
      'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    director: 'Lana Wachowski, Lilly Wachowski',
    screenplay: 'Lana Wachowski, Lilly Wachowski',
    cinematography: 'Bill Pope',
    musicComposer: 'Don Davis',
    cast: [
      { name: 'Keanu Reeves', role: 'Neo / Thomas Anderson' },
      { name: 'Laurence Fishburne', role: 'Morpheus' },
      { name: 'Carrie-Anne Moss', role: 'Trinity' },
      { name: 'Hugo Weaving', role: 'Agent Smith' },
      { name: 'Joe Pantoliano', role: 'Cypher' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'vKQi3bBA1y8',
    ratings: {
      imdb: 8.7,
      metascore: 73,
      rottenTomatoes: 83,
      userScore: 9.4,
      votesCount: '2,000,000+'
    },
    boxOffice: {
      budget: '$63,000,000',
      openingWeekend: '$27,788,331',
      worldwideGross: '$467,222,728',
      grossNumber: 467222728,
      multiplier: '7.4x'
    },
    awards: [
      'Winner: 4 Academy Awards (Sound, Sound Editing, Film Editing, Visual Effects)',
      'Winner: 2 BAFTA Awards'
    ],
    trivia: [
      'The famous green digital rain code actually consists of Japanese katakana characters copied from the production designer’s wife’s sushi cookbooks.',
      'The cast spent four months in intense kung fu training under legendary Hong Kong martial arts choreographer Yuen Woo-ping before cameras rolled.',
      'Keanu Reeves underwent neck surgery shortly before training and had to practice wirework while wearing a neck brace.'
    ],
    quotes: [
      { quote: 'You take the blue pill, the story ends. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes.', speaker: 'Morpheus' },
      { quote: 'What is "real"? How do you define "real"? If you’re talking about what you can feel, what you can smell, what you can taste and see, then "real" is simply electrical signals interpreted by your brain.', speaker: 'Morpheus' },
      { quote: 'Never send a human to do a machine’s job.', speaker: 'Agent Smith' }
    ],
    userReviews: [
      {
        id: 'rev-mat-1',
        author: 'Klaus Reinhardt',
        date: 'July 15, 2023',
        rating: 10,
        title: 'A cultural earthquake that redefined sci-fi cinema',
        content:
          'Bullet time, leather trench coats, Baudrillard philosophy, and groundbreaking wire-fu action. Twenty-five years later, it hasn’t aged a day.',
        likes: 182,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['blade-runner-2049', 'inception', 'the-dark-knight'],
    featured: false,
    trending: false,
    moods: ['Mind-Bending', 'High Octane Action', 'Philosophical']
  },
  {
    id: 'pulp-fiction',
    title: 'Pulp Fiction',
    originalTitle: 'Pulp Fiction',
    tagline: 'You won’t know the facts until you’ve seen the fiction.',
    year: 1994,
    releaseDate: 'October 14, 1994',
    mpaaRating: 'R',
    duration: 154,
    genres: ['Crime', 'Drama', 'Neo-Noir'],
    synopsis:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence, redemption, and serendipitous coincidence in sunny Los Angeles.',
    director: 'Quentin Tarantino',
    screenplay: 'Quentin Tarantino, Roger Avary',
    cinematography: 'Andrzej Sekuła',
    musicComposer: 'Various Artists / Curated Soundtrack',
    cast: [
      { name: 'John Travolta', role: 'Vincent Vega' },
      { name: 'Samuel L. Jackson', role: 'Jules Winnfield' },
      { name: 'Uma Thurman', role: 'Mia Wallace' },
      { name: 'Bruce Willis', role: 'Butch Coolidge' },
      { name: 'Ving Rhames', role: 'Marsellus Wallace' },
      { name: 'Harvey Keitel', role: 'Winston Wolfe' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 's7EdQ4FqbhY',
    ratings: {
      imdb: 8.9,
      metascore: 95,
      rottenTomatoes: 92,
      userScore: 9.6,
      votesCount: '2,200,000+'
    },
    boxOffice: {
      budget: '$8,500,000',
      openingWeekend: '$9,311,882',
      worldwideGross: '$213,928,762',
      grossNumber: 213928762,
      multiplier: '25.1x'
    },
    awards: [
      'Winner: Academy Award for Best Original Screenplay',
      'Winner: Palme d’Or at Cannes Film Festival',
      'Nominee: 7 Academy Awards'
    ],
    trivia: [
      'Vincent Vega’s 1964 Chevelle Malibu convertible actually belonged to Quentin Tarantino himself and was stolen during production.',
      'The film is told completely out of chronological order; Jules and Vincent’s storyline begins and finishes at the exact same Hawaiian burger conversation.',
      'The famous glowing suitcase contents were never defined by Tarantino; an amber lightbulb and battery were placed inside to create an enigmatic McGuffin.'
    ],
    quotes: [
      { quote: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.', speaker: 'Jules Winnfield' },
      { quote: 'I do believe Marsellus Wallace, my husband, your boss, told you to take ME out and do WHATEVER I WANTED.', speaker: 'Mia Wallace' },
      { quote: 'Say "what" again. Say "what" again, I dare you, I double dare you!', speaker: 'Jules Winnfield' }
    ],
    userReviews: [
      {
        id: 'rev-pf-1',
        author: 'Cole Vance',
        date: 'August 14, 2023',
        rating: 10,
        title: 'Pure conversational crackle',
        content:
          'No one writes dialogue like Tarantino. The diner robbery, the twist contest at Jack Rabbit Slim’s, the adrenaline needle: every sequence is imprinted on cinema history.',
        likes: 210,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['parasite', 'the-dark-knight', 'zodiac'],
    featured: false,
    trending: false,
    moods: ['Dark & Gritty', 'Philosophical']
  },
  {
    id: 'arrival',
    title: 'Arrival',
    originalTitle: 'Arrival',
    tagline: 'Why are they here?',
    year: 2016,
    releaseDate: 'November 11, 2016',
    mpaaRating: 'PG-13',
    duration: 116,
    genres: ['Sci-Fi', 'Drama', 'Mystery'],
    synopsis:
      'Linguistics professor Louise Banks leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world. As nations teeter on the verge of global war, Banks races against time for answers.',
    director: 'Denis Villeneuve',
    screenplay: 'Eric Heisserer',
    cinematography: 'Bradford Young',
    musicComposer: 'Jóhann Jóhannsson',
    cast: [
      { name: 'Amy Adams', role: 'Louise Banks' },
      { name: 'Jeremy Renner', role: 'Ian Donnelly' },
      { name: 'Forest Whitaker', role: 'Colonel Weber' },
      { name: 'Michael Stuhlbarg', role: 'Agent Halpern' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'tFMo3UJ4B4g',
    ratings: {
      imdb: 7.9,
      metascore: 81,
      rottenTomatoes: 94,
      userScore: 8.8,
      votesCount: '750,000+'
    },
    boxOffice: {
      budget: '$47,000,000',
      openingWeekend: '$24,074,047',
      worldwideGross: '$203,388,186',
      grossNumber: 203388186,
      multiplier: '4.3x'
    },
    awards: [
      'Winner: Academy Award for Best Sound Editing',
      'Nominee: 8 Academy Awards including Best Picture & Best Director',
      'Winner: BAFTA for Best Sound'
    ],
    trivia: [
      'The Heptapod circular logogram written language was created in collaboration with scientific illustrators and linguists, totaling a functional vocabulary of over 100 symbols.',
      'Bradford Young deliberately underexposed the film to create a warm, muted, almost documentary atmosphere inside the mist-shrouded Montana valley.',
      'Based on Ted Chiang’s celebrated novella "Story of Your Life".'
    ],
    quotes: [
      { quote: 'Despite knowing the journey and where it leads, I embrace it, and I welcome every moment of it.', speaker: 'Louise Banks' },
      { quote: 'Language is the first weapon drawn in a conflict.', speaker: 'Louise Banks' },
      { quote: 'If you could see your whole life from start to finish, would you change things?', speaker: 'Louise Banks' }
    ],
    userReviews: [
      {
        id: 'rev-arr-1',
        author: 'Clara Oswald',
        date: 'March 20, 2024',
        rating: 10,
        title: 'A profoundly humane science fiction poem',
        content:
          'Amy Adams delivers an astounding, heart-rending performance. The non-linear perception of time and memory makes the ending an emotional avalanche.',
        likes: 198,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['interstellar', 'blade-runner-2049'],
    featured: false,
    trending: false,
    moods: ['Mind-Bending', 'Philosophical', 'Emotional Masterpiece']
  },
  {
    id: 'spider-man-into-the-spider-verse',
    title: 'Spider-Man: Into the Spider-Verse',
    originalTitle: 'Spider-Man: Into the Spider-Verse',
    tagline: 'More than one wears the mask.',
    year: 2018,
    releaseDate: 'December 14, 2018',
    mpaaRating: 'PG',
    duration: 117,
    genres: ['Animation', 'Action', 'Adventure', 'Sci-Fi'],
    synopsis:
      'Teenager Miles Morales becomes the new Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
    director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
    screenplay: 'Phil Lord, Rodney Rothman',
    cinematography: 'Visual Development / Patrick O’Keefe',
    musicComposer: 'Daniel Pemberton',
    cast: [
      { name: 'Shameik Moore', role: 'Miles Morales (voice)' },
      { name: 'Jake Johnson', role: 'Peter B. Parker (voice)' },
      { name: 'Hailee Steinfeld', role: 'Gwen Stacy (voice)' },
      { name: 'Mahershala Ali', role: 'Uncle Aaron (voice)' },
      { name: 'Nicolas Cage', role: 'Spider-Man Noir (voice)' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'g4Hbz2jLxvQ',
    ratings: {
      imdb: 8.4,
      metascore: 87,
      rottenTomatoes: 97,
      userScore: 9.3,
      votesCount: '690,000+'
    },
    boxOffice: {
      budget: '$90,000,000',
      openingWeekend: '$35,363,376',
      worldwideGross: '$384,256,930',
      grossNumber: 384256930,
      multiplier: '4.2x'
    },
    awards: [
      'Winner: Academy Award for Best Animated Feature',
      'Winner: Golden Globe for Best Animated Motion Picture',
      'Winner: 7 Annie Awards'
    ],
    trivia: [
      'To mimic authentic vintage comic book printing, animators deliberately animated Miles at 12 frames per second (on the twos) while veteran Peter Parker moved at a smooth 24 fps until Miles learned to master his powers.',
      'The production took a massive team of 140 animators, the largest animation crew Sony Pictures Imageworks had ever assembled.',
      'Half-tone Ben-Day dot shading and chromatic aberration were painted into each 3D frame by hand.'
    ],
    quotes: [
      { quote: 'When will I know I’m ready? - You won’t. It’s a leap of faith. That’s all it is, Miles. A leap of faith.', speaker: 'Peter B. Parker' },
      { quote: 'Anyone can wear the mask. You can wear the mask. If you didn’t know that before, I hope you do now.', speaker: 'Miles Morales' }
    ],
    userReviews: [
      {
        id: 'rev-spv-1',
        author: 'Jordan Avery',
        date: 'May 3, 2023',
        rating: 10,
        title: 'A watershed moment for visual animation',
        content:
          'The "What’s Up Danger" leap of faith scene is sheer cinematic ecstasy. Every frame is literally a work of comic book art.',
        likes: 240,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['spirited-away', 'the-matrix', 'inception'],
    featured: false,
    trending: true,
    moods: ['Visually Stunning', 'High Octane Action', 'Emotional Masterpiece']
  },
  {
    id: 'zodiac',
    title: 'Zodiac',
    originalTitle: 'Zodiac',
    tagline: 'There is more than one way to lose your life to a killer.',
    year: 2007,
    releaseDate: 'March 2, 2007',
    mpaaRating: 'R',
    duration: 157,
    genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
    synopsis:
      'Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the elusive Zodiac Killer, an unidentified murderer who terrorizes Northern California with cryptic ciphers.',
    director: 'David Fincher',
    screenplay: 'James Vanderbilt',
    cinematography: 'Harris Savides',
    musicComposer: 'David Shire',
    cast: [
      { name: 'Jake Gyllenhaal', role: 'Robert Graysmith' },
      { name: 'Mark Ruffalo', role: 'Inspector Dave Toschi' },
      { name: 'Robert Downey Jr.', role: 'Paul Avery' },
      { name: 'Anthony Edwards', role: 'Inspector William Armstrong' },
      { name: 'Brian Cox', role: 'Melvin Belli' },
      { name: 'John Carroll Lynch', role: 'Arthur Leigh Allen' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'yNncHPl1UXg',
    ratings: {
      imdb: 7.7,
      metascore: 79,
      rottenTomatoes: 90,
      userScore: 8.6,
      votesCount: '610,000+'
    },
    boxOffice: {
      budget: '$65,000,000',
      openingWeekend: '$13,395,610',
      worldwideGross: '$84,785,914',
      grossNumber: 84785914,
      multiplier: '1.3x'
    },
    awards: [
      'Nominee: Palme d’Or at Cannes Film Festival',
      'Winner: Toronto Film Critics Association Award'
    ],
    trivia: [
      'David Fincher and James Vanderbilt spent 18 months conducting their own forensic investigation, interviewing original detectives, surviving victims, and forensic cryptographers.',
      'Fincher shot the film on the early digital Thomson Viper FilmStream camera, capturing 200+ hours of digital footage and performing up to 70 takes per conversation.',
      'The basement scene with Bob Vaughn was designed to induce maximum claustrophobia by playing with ambient rain sounds and creaking wooden floorboards.'
    ],
    quotes: [
      { quote: 'I need to know who he is. I need to stand there, I need to look him in the eye and I need to know that it’s him.', speaker: 'Robert Graysmith' },
      { quote: 'Does anyone ever actually read your column? - More people than will ever read your cartoon.', speaker: 'Paul Avery' }
    ],
    userReviews: [
      {
        id: 'rev-zod-1',
        author: 'Nicholas Drake',
        date: 'October 30, 2023',
        rating: 9,
        title: 'Fincher’s most patient, obsessive masterpiece',
        content:
          'Zodiac is not a conventional whodunit; it’s an unsettling study of how an unresolved mystery slowly poisons the minds of those who attempt to decode it.',
        likes: 115,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['blade-runner-2049', 'oppenheimer', 'pulp-fiction'],
    featured: false,
    trending: false,
    moods: ['Dark & Gritty', 'Philosophical']
  },
  {
    id: 'there-will-be-blood',
    title: 'There Will Be Blood',
    originalTitle: 'There Will Be Blood',
    tagline: 'When ambition meets greed, an empire is born.',
    year: 2007,
    releaseDate: 'December 26, 2007',
    mpaaRating: 'R',
    duration: 158,
    genres: ['Drama', 'Period'],
    synopsis:
      'A ruthless silver miner turned oil prospector moves to a drought-plagued California town on the promise of black gold, clashing with a charismatic young evangelical preacher as his empire expands.',
    director: 'Paul Thomas Anderson',
    screenplay: 'Paul Thomas Anderson',
    cinematography: 'Robert Elswit',
    musicComposer: 'Jonny Greenwood',
    cast: [
      { name: 'Daniel Day-Lewis', role: 'Daniel Plainview' },
      { name: 'Paul Dano', role: 'Eli Sunday / Paul Sunday' },
      { name: 'Kevin J. O’Connor', role: 'Henry Brands' },
      { name: 'Ciarán Hinds', role: 'Fletcher Hamilton' },
      { name: 'Dillon Freasier', role: 'H.W. Plainview' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'FeSLPELpMeM',
    ratings: {
      imdb: 8.2,
      metascore: 93,
      rottenTomatoes: 91,
      userScore: 9.1,
      votesCount: '630,000+'
    },
    boxOffice: {
      budget: '$25,000,000',
      openingWeekend: '$190,739',
      worldwideGross: '$76,181,545',
      grossNumber: 76181545,
      multiplier: '3.0x'
    },
    awards: [
      'Winner: Academy Award for Best Actor (Daniel Day-Lewis)',
      'Winner: Academy Award for Best Cinematography (Robert Elswit)',
      'Nominee: 8 Academy Awards'
    ],
    trivia: [
      'Daniel Day-Lewis stayed in character as Daniel Plainview 24/7 during the entire grueling shoot in Marfa, Texas, mimicking the low drawl of John Huston.',
      'Radiohead guitarist Jonny Greenwood composed the avant-garde string score, which became one of the most influential film scores of the 21st century.',
      'The massive oil derrick fire was shot using real controlled oil and kerosene flames, visible from over 10 miles away in the desert night.'
    ],
    quotes: [
      { quote: 'I have a competition in me. I want no one else to succeed. I hate most people.', speaker: 'Daniel Plainview' },
      { quote: 'I drink your milkshake! I drink it up!', speaker: 'Daniel Plainview' },
      { quote: 'I’m finished.', speaker: 'Daniel Plainview' }
    ],
    userReviews: [
      {
        id: 'rev-twbb-1',
        author: 'Evelyn Shaw',
        date: 'September 17, 2023',
        rating: 10,
        title: 'Daniel Day-Lewis delivers the acting pinnacle of the 2000s',
        content:
          'A ferocious, biblical epic about American capitalism and religious hypocrisy. Greenwood’s dissonant strings make the barren plains feel like another planet.',
        likes: 187,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['oppenheimer', 'whiplash', 'zodiac'],
    featured: false,
    trending: false,
    moods: ['Dark & Gritty', 'Philosophical']
  },
  {
    id: 'everything-everywhere-all-at-once',
    title: 'Everything Everywhere All at Once',
    originalTitle: 'Everything Everywhere All at Once',
    tagline: 'The universe is so much bigger than you realize.',
    year: 2022,
    releaseDate: 'March 25, 2022',
    mpaaRating: 'R',
    duration: 139,
    genres: ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
    synopsis:
      'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
    director: 'Daniel Kwan, Daniel Scheinert',
    screenplay: 'Daniel Kwan, Daniel Scheinert',
    cinematography: 'Larkin Seiple',
    musicComposer: 'Son Lux',
    cast: [
      { name: 'Michelle Yeoh', role: 'Evelyn Wang' },
      { name: 'Ke Huy Quan', role: 'Waymond Wang' },
      { name: 'Stephanie Hsu', role: 'Joy Wang / Jobu Tupaki' },
      { name: 'Jamie Lee Curtis', role: 'Deirdre Beaubeirdre' },
      { name: 'James Hong', role: 'Gong Gong' }
    ],
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=900&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop',
    trailerYoutubeId: 'wxN1T1uxQ2g',
    ratings: {
      imdb: 7.8,
      metascore: 81,
      rottenTomatoes: 94,
      userScore: 8.9,
      votesCount: '520,000+'
    },
    boxOffice: {
      budget: '$25,000,000',
      openingWeekend: '$501,305',
      worldwideGross: '$143,400,000',
      grossNumber: 143400000,
      multiplier: '5.7x'
    },
    awards: [
      'Winner: 7 Academy Awards including Best Picture, Best Director, Best Actress (Michelle Yeoh), Best Supporting Actor (Ke Huy Quan)',
      'Winner: 2 Golden Globe Awards'
    ],
    trivia: [
      'The visual effects were done by a tiny team of just nine artists, including the directors themselves, using After Effects in their living rooms during quarantine.',
      'Ke Huy Quan had retired from acting for nearly 20 years before landing the role of Waymond, inspired by Crazy Rich Asians.',
      'The silent rock universe sequence was inspired by the directors’ desire to take audiences to a place where completely nothing happens after 90 minutes of sensory overload.'
    ],
    quotes: [
      { quote: 'In another life, I would have really liked just doing laundry and taxes with you.', speaker: 'Waymond Wang' },
      { quote: 'When I choose to see the good side of things, I’m not being naive. It is strategic and necessary. It’s how I’ve learned to survive through everything.', speaker: 'Waymond Wang' },
      { quote: 'Nothing matters. We’re all just small and stupid.', speaker: 'Joy Wang' }
    ],
    userReviews: [
      {
        id: 'rev-eeao-1',
        author: 'Samantha Wu',
        date: 'January 22, 2024',
        rating: 10,
        title: 'Absurdist, hilarious, and devastatingly moving',
        content:
          'Who knew talking rocks with googly eyes could make an entire theater weep? Michelle Yeoh and Ke Huy Quan give the performances of their careers.',
        likes: 290,
        hasSpoilers: false
      }
    ],
    similarMovieIds: ['the-matrix', 'inception', 'spider-man-into-the-spider-verse'],
    featured: false,
    trending: true,
    moods: ['Mind-Bending', 'Visually Stunning', 'Emotional Masterpiece']
  }
];

export const GENRES = [
  'All',
  'Sci-Fi',
  'Drama',
  'Crime',
  'Action',
  'Mystery',
  'Thriller',
  'Animation',
  'Neo-Noir',
  'Adventure'
];

export const TRIVIA_QUESTIONS = [
  {
    id: 1,
    question: 'In "Blade Runner 2049", how many previous Academy Award nominations did Roger Deakins have before winning for this film?',
    options: ['8 nominations', '11 nominations', '14 nominations', 'Zero, it was his first nomination'],
    correctIndex: 2,
    explanation: 'Roger Deakins had 14 previous nominations over 23 years before finally winning his first Oscar for Blade Runner 2049.'
  },
  {
    id: 2,
    question: 'Astrophysicist Kip Thorne calculated real equations for which visual element in Christopher Nolan’s "Interstellar"?',
    options: ['The cryo-chambers', 'The Gargantua Black Hole & gravitational lensing', 'The TARS robot mechanical joints', 'The water planet tides'],
    correctIndex: 1,
    explanation: 'Nobel laureate Kip Thorne provided the equations to simulate the Gargantua black hole, generating over 800 terabytes of scientific simulation data.'
  },
  {
    id: 3,
    question: 'Which movie made history as the very first non-English language film to win the Academy Award for Best Picture?',
    options: ['Spirited Away', 'Crouching Tiger, Hidden Dragon', 'Parasite', 'Roma'],
    correctIndex: 2,
    explanation: 'Bong Joon Ho’s "Parasite" won four Academy Awards in 2020, becoming the first non-English language film to ever claim Best Picture.'
  },
  {
    id: 4,
    question: 'In "The Matrix", what unexpected source provided the symbols for the iconic digital cascading green code?',
    options: ['MIT hacker logs from 1989', 'Japanese sushi recipe cookbooks', 'Ancient Sumerian cuneiform', 'Cobol programming manuals'],
    correctIndex: 1,
    explanation: 'Production designer Simon Whiteley scanned Japanese katakana characters from his Japanese wife’s sushi cookbooks.'
  },
  {
    id: 5,
    question: 'For "Oppenheimer", what breakthrough film stock did Christopher Nolan convince Kodak to engineer specifically for IMAX?',
    options: ['65mm Infrared Nightvision', '65mm Black-and-White IMAX film', '3D Stereoscopic 70mm', 'Ultra-violet 15-perf film'],
    correctIndex: 1,
    explanation: 'Kodak custom-engineered the first-ever 65mm black-and-white IMAX film stock for Nolan to shoot the Lewis Strauss Senate hearings.'
  }
];
