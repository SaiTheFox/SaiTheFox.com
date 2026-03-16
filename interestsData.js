/* interestsData.js */
const interestsData = [
    // --- General ---
    {
        category: "General", // This just tells it which category to go under, all of this is one long list.
        name: "Hikes", // Title of the card
        cover: "/Images/hiking.gif", // URL or path to the cover image
        special: true, // This gives it the outline 
        note: "", // This is the tiny note at the bottom
        review: "", // This is the review that shows up when you click the card
        rating: null // This is the rating out of 5 that shows up when you click the card
       
    },
    {
        category: "General",
        name: "IT Stuff",
        cover: "/Images/hiking.gif",
        special: true,
        note: ""
    },
    {
        category: "General",
        name: "Gaming",
        cover: "/Images/hiking.gif",
        special: true,
        note: ""
    },
    {
        category: "General",
        name: "Music",
        cover: "/Images/hiking.gif",
        special: true,
        note: ""
    },
    {
        category: "General",
        name: "Programming",
        cover: "/Images/hiking.gif",
        special: true,
        note: ""
    },
    {
        category: "General",
        name: "Game Design",
        cover: "/Images/hiking.gif",
        special: true,
        note: ""
    },
        {
        category: "General",
        name: "Art",
        cover: "/Images/hiking.gif",
        special: true,
        note: ""
    },
    // --- GAMES ---
    {
        category: "Games",
        name: "Undertale",
        cover: "https://kopsnijgre.pl/images/gry/0497331.jpg",
        special: true, 
        note: "Don't make me cry little pixel people :(",
        review: "This is one of my favorite games and stories of all time, I've normal and pacifist endings multiple times and did genocide once just to have that part of the story. I even fixated over it enough to play a million fan games for Undertale for the next year. 10/10 would recommend obsessing over.",
        rating: 5
    },
    {
        category: "Games",
        name: "Deltarune",
        cover: "https://preview.redd.it/erx5wrsaa7u71.jpg?width=600&format=pjpg&auto=webp&s=81da12f33d91d6e5f559a2029743488a98185420", // Replace with real URLs
        special: true,
        note: "I NEED THE NEXT CHAPTERS TO RELEASE PLEASE I BEG",
        review: "This is such a good game ohmgod, I think it accomplishes what Undertale did and more with the story/gameplay. I haven't done as much with it as I did Undertale, but that's just because I'm waiting on the final chapters to release. I can't wait to try getting every ending in this.",
        rating: 5
    },
    {
        category: "Games",
        name: "Skyrim",
        cover: "https://cdn1.epicgames.com/offer/c8738a4d1ead40368eab9688b3c7d737/EGS_SkyrimSpecialEdition_BethesdaGameStudios_S2_1200x1600-ae5d13f6510e81460fe80aa1ca19cf4c",
        special: true,
        note: "Playthroughs: 100 \n Completions: 0"
    },
    {
        category: "Games",
        name: "Elden Ring",
        cover: "https://preview.redd.it/i-updated-the-cover-of-elden-ring-to-include-the-two-main-v0-9jr2a68dx24b1.png?width=640&crop=smart&auto=webp&s=caf0ddf6b30f635cb215b24c0437ef1b4b6f68a7",
        special: true,
        note: "The best soulsborne game"
    },
    {
        category: "Games",
        name: "Dark Souls",
        cover: "https://i.etsystatic.com/6824854/r/il/17d498/2035572893/il_fullxfull.2035572893_s8gc.jpg",
        special: true,
        note: "The first soulslike I ever played"
    },
    {
        category: "Games",
        name: "Dark Souls II",
        cover: "https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg",
        special: true,
        note: "This game PMO so bad then I was sad when I finished"
    },
    {
        category: "Games",
        name: "Dark Souls III",
        cover: "https://store-images.s-microsoft.com/image/apps.26308.65765405318615559.1860d263-d982-466f-947a-523231ff1c3f.5ed26900-c677-4743-a9f1-67a46b866cd6",
        special: true,
        note: "Actually my least favorite of the 3, still 10/10 vs 12/10"
    },
    {
        category: "Games",
        name: "The Binding of Isaac",
        cover: "https://upload.wikimedia.org/wikipedia/en/e/e1/The_Binding_of_Issac_Rebirth_cover.jpg",
        special: true,
        note: "We love dying 20 million times!"
    },
    
    // --- MOVIES ---
    {
        category: "Movies",
        name: "Spirited Away",
        cover: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        special: true,
        note: "Oh my god the amount of merch I have for this"
    },
    {
        category: "Movies",
        name: "How's Moving Castle",
        cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421500904/howls-moving-castle-picture-book-9781421500904_lg.jpg",
        special: true,
        note: "The characters are so good"
    },
    {
        category: "Movies",
        name: "The Secret World of Arrietty",
        cover: "https://static.wikia.nocookie.net/studio-ghibli/images/f/f7/The_Secret_World_of_Arrietty.jpg",
        special: false,
        note: "Tiny movies = peak movies"
    },
    {
        category: "Movies",
        name: "Pokémon: Lucario and the Mystery of Mew",
        cover: "https://d3c3ws7andfulm.cloudfront.net/covers/2e060af3-b04d-48a0-ab4e-1d5a03578faf.jpg",
        special: false,
        note: "This might've made Lucario my favorite Pokemon (says the furry)",
        review: "This is the first Pokemon movie I've watched and I think it did a really good job being what it was. It had a pretty good story with some parts that actually did really capture my emotions, and I love the animation style.",
        rating: 5
    },

    // --- Shows ---
    {
        category: "Shows",
        name: "Cyberpunk: Edgerunners",
        cover: "https://static.wikia.nocookie.net/cyberpunk/images/c/c1/Cyberpunk_Edgerunners_Trigger_2.jpg",
        special: true,
        note: "I HAVE to 100% Cyberpunk 2077 now",
        review: "This almost feels like an art piece to watch, and does such a good job at just implanting emotions in you.",
        rating: 5
    },
        {
        category: "Shows",
        name: "Beastars",
        cover: "https://i0.wp.com/psistillreadyou.wordpress.com/wp-content/uploads/2020/07/1_63twejnf5w6zlqrwgtbgsa.jpeg.jpg",
        special: true,
        note: "I NEED THE FINAL SEASON TO RELEASE",
        review: "I honestly love how weird all the characters and some of the plot points are in this, genuinely just entertaining to watch but still feels deep and interesting.",
        rating: 5
    },
    {
        category: "Shows",
        name: "Mob Psycho 100",
        cover: "https://m.media-amazon.com/images/M/MV5BYzU3NDM4ZjgtY2UyMi00YTczLTgyNDEtMjBiMDJlOGUxNjcxXkEyXkFqcGc@._V1_.jpg",
        special: false,
        note: "Mob's character development over the series is SO GOOD",
        review: "Honestly might be one of my favorite animes to date, the way they write Mob and the other characters both independently and together is so good, I love all of their little emotions and plot lines.",
        rating: 5
    },
    {
        category: "Shows",
        name: "BNA: Brand New Animal",
        cover: "https://static.wikia.nocookie.net/voiceacting/images/8/83/91694179-84EE-46E1-969E-EFA5E0579C0E.jpeg",
        special: false,
        note: "I love Ogami so much the goober crying at the festival is 10/10",
        review: "Honestly I really liked this show and the characters, it was silly enough to be casually enjoyable but also still had enough depth to keep me invested. Not an all time favorite but still actually really good.",
        rating: 5
    },

    // --- BOOKS ---
    {
        category: "Books",
        name: "High Rise Invasion",
        cover: "https://m.media-amazon.com/images/I/91A21twBGhL._UF1000,1000_QL80_.jpg",
        special: false,
        note: "Really neat concept and likable characters!"
    },

    // --- Music ---
    {
        category: "Music",
        name: "beach life in death",
        cover: "https://f4.bcbits.com/img/a3776947833_16.jpg",
        special: true,
        note: "#1 favorite song 3 years running",
        review: "I've listened to this enough times that I can just play the full thing in my head perfectly without thinking about it, I like the original (Car Seat Headrest's) version too, but this one has been with me for years now as a favorite.",
        rating: 5
    },
    {
        category: "Music",
        name: "Plastic Death",
        cover: "https://runforcoverrecords.com/cdn/shop/files/GB-1000.jpg",
        special: true,
        note: "Oml Glass Beach is SO GOOD",
        review: "Glass Beach has been my favorite artist for a while now, and I've AT LEAST listened to this album weekly since it dropped lol",
        rating: 5
    },
    {
        category: "Music",
        name: "the first glass beach album",
        cover: "https://f4.bcbits.com/img/a0854720793_10.jpg",
        special: true,
        note: "My introduction to Glass Beach",
        review: "This has so many good songs in it, with Glass Beach definitely being my favorite. 10/10 would listen to it a million more times.",
        rating: 5
    },
    {
        category: "Music",
        name: "Igor",
        cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg",
        special: true,
        note: "Igor my precious",
        review: "The thing that got my into Tyler originally was his New Magic Wand performance at the Grammys, and since then I've listened to this album constantly. ",
        rating: 5
    },
];