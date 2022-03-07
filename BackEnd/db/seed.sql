\c movies_dev;
INSERT INTO users(display_name, photo_url) VALUES
('Jeffrey', 'https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Carlos', 'https://imageio.forbes.com/specials-images/imageserve/5faad475425cebb9d7e5b876/Best-Animal-Photos-Agora-Cntest--Green-guana--among-sunflowers/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Poonam','https://imageio.forbes.com/specials-images/imageserve/5faad55af0851928cb60532b/Best-Animal-Photos-Contest--highland-cattle-in-heather-blooming-season-amid-fog-/0x0.jpg?fit=crop&format=jpg&crop=959,959,x0,y134,safe'),
('Jordan', 'https://imageio.forbes.com/specials-images/imageserve/5faad60e9317699561e5b876/Best-Animal-Photos-contest--Reindeer-at-the-end-of-fall-as-first-snow-falls-/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Flower', 'https://imageio.forbes.com/specials-images/imageserve/5faad6ab034ddd632234f82b/Best-Animal-Photos-Agora-Contest--a-family-of-elephants-against-the-orange-sunset-in/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Kong', 'https://imageio.forbes.com/specials-images/imageserve/5faad6f6b2b6ec5039e5b876/Best-Animal-Photos-Contest-Agora--reindeer-locking-horns--with-orange-sunset/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Carlo', 'https://imageio.forbes.com/specials-images/imageserve/5faad98ac406039b52e5b876/Best-Animal-Photos-Agora-Contest--barn-owl-with-spreading-wings/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Durdona', 'https://imageio.forbes.com/specials-images/imageserve/5faad9ab2a368d4f8860532b/Best-Animal-Photos-Agora-Contest--mother-monkey-with-baby/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Mr. Koala', 'https://imageio.forbes.com/specials-images/imageserve/5faad9d8f019e70a0260532b/Best-Animal-Photos-Agora-Contest-A-koala-bear-with-baby-on-top-crossing-a-road-in/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Adam', 'https://imageio.forbes.com/specials-images/imageserve/5faad9f90695623b0760532b/Best-Animal-Photos-Agora-Contest-Ibex-in-Chamonix--France/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Matt', 'https://imageio.forbes.com/specials-images/imageserve/5faada1a27ed9b982134f82d/Best-Animal-Photos-Agora-Contest--close-up-of-an-orangutan-face-in-Indonesia-/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Mr. Cow', 'https://imageio.forbes.com/specials-images/imageserve/5faada47bf0dba8d4b34f82b/Best-Animal-Photos-Agora-Contest--a-wild--Icelandic--horse/960x0.jpg?fit=bounds&format=jpg&width=960'),
('Mrs. Fly', 'https://imageio.forbes.com/specials-images/imageserve/5faadab7bf69f224a8e5b876/Best-Animal-Photos-Agora-Contest--colorful-fly-resting-on-a-cactus-/960x0.jpg?fit=bounds&format=jpg&width=960');

INSERT INTO movies_genre(genre, title, thumbnail, year, synopsis, duration, favorite, users_id)VALUES
('Action', 'Creed', 'https://i.imgur.com/NQTuLtb.mp4', 2015, 'The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.', 133, 1, 1),
('Action', 'Furious 7', 'https://i.imgur.com/7ax74eb.mp4', 2015, 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.', 137, 3, 2),
('Action', 'Guardians of the Galaxy', 'https://i.imgur.com/AylKL2G.mp4', 2014, 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.', 121, 4, 3),
('Action', 'Suicide Squad', 'https://i.imgur.com/hwUzoyu.mp4', 2016, 'A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.', 123, 5, 4),
('Anime', 'Gundam 00','https://i.imgur.com/BR9EUGh.mp4', 2007, 'In the distant future, mankind has used up all of its fossil fuels, forcing them to turn to Solar Power as an alternate energy source. As a result, this causes a rift to form between richer and poorer nations, eventually leading to war. In the midst of this conflict, a mysterious military group known as Celestial Being aims to use force to bring peace to the world, by using special humanoid weapons known as Gundams.', 100, 7, 5),
('Anime', 'Dragon Ball Super','https://i.imgur.com/6u0PCQK.mp4', 2015, 'Six months after the defeat of Majin Buu, The mighty Saiyan Son Goku continues his quest on becoming stronger.',100, 0, 6),
('Anime','Attack on Titan', 'https://i.imgur.com/LItJ5qS.mp4', 2013, 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.', 100, 3, 7),
('Anime', 'Bleach4', 'https://i.imgur.com/W3fTtFS.mp4', 2004, 'High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from ''Hollows''.', 100, 8, 8),
('Award-Winning', 'Forest Gump', 'https://i.imgur.com/V6WMXYx.mp4', 1994, 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.', 142, 9, 9),
('Award-Winning','The Matrix','https://i.imgur.com/QzJe4nJ.mp4', 1999, 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.', 136, 5, 10),
('Award-Winning', 'Pulp Fiction', 'https://i.imgur.com/8xf630M.mp4' , 1994, 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 154, 7, 11),
('Award-Winning', 'Mia Madre', 'https://i.imgur.com/mRz7x3g.mp4', 2015, 'Margherita, a director in the middle of an existential crisis, has to deal with the inevitable and still unacceptable loss of her mother.', 106, 9, 12),
('Children & Family', 'Finding Nemo', 'https://i.imgur.com/HtjzC5p.mp4', 2003, 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.', 100, 1, 13);


INSERT INTO comments(comment, movies_genre_id) VALUES
('Great Movie',1),
('Amzing Movie and actors',2),
('Nice graphics',2),
('One of my favarite action movies',3),
('My favorite Anime',5),
('One of the best Anime',6),
('My childhood!!!', 7),
('Such an amazing Anime', 8),
('Ichigo!!!', 9),
('Nice Movie',10),
('The Matrix <3', 11),
('Deserved the award', 12),
('I havent seend this movie',13);
