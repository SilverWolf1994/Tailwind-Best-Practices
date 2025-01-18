import './App.css'
import { VideoGame } from './models/video-game';
import VideoGameGrid from './VideoGames/VideoGameGrid';

function App() {

  const games: VideoGame[] = [
    {
      id: 1,
      title: "The Last of Us Part II",
      subtitle: "Survival Horror (2020)",
      description: "A brutal yet emotional journey of revenge set in a post-apocalyptic United States.",
      image: "https://wallpapers.com/images/high/the-last-of-us-2-wallpaper-sn85pj515vrgk4r5.webp"
    },
    {
      id: 2,
      title: "Cyberpunk 2077",
      subtitle: "Action RPG (2020)",
      description: "An open-world adventure in the megalopolis of Night City, where power, glamour, and body modification are everything.",
      image: "https://wallpapers.com/images/high/cyberpunk-2077-hd-cfcibcbf2z755wi3.webp"
    },
    {
      id: 3,
      title: "Elden Ring",
      subtitle: "Action RPG (2022)",
      description: "An epic adventure through the Lands Between, created by FromSoftware and George R.R. Martin.",
      image: "https://wallpapers.com/images/high/elden-ring-background-zlqxmp7hl6bvxrzh.webp"
    },
    {
      id: 4,
      title: "God of War Ragnarök",
      subtitle: "Action-Adventure (2022)",
      description: "Kratos and Atreus embark on a mythic journey facing Norse gods and monsters.",
      image: "https://wallpapers.com/images/high/god-of-war-kratos-ragnarok-4aiwryfubx7pdhga.webp"
    },
    {
      id: 5,
      title: "Horizon Forbidden West",
      subtitle: "Action RPG (2022)",
      description: "Aloy explores a majestic but dangerous frontier hiding mysterious new threats.",
      image: "https://wallpapers.com/images/high/horizon-forbidden-west-d3bw9hr51xzd4183.webp"
    },
    {
      id: 6,
      title: "Red Dead Redemption 2",
      subtitle: "Action-Adventure (2020)",
      description: "An epic tale of honor and loyalty in the dawn of the modern age.",
      image: "https://wallpapers.com/images/high/black-and-red-gaming-red-dead-redemption-2-x4untal3zx63600v.webp"
    },
    {
      id: 7,
      title: "Starfield",
      subtitle: "Space RPG (2023)",
      description: "Bethesda's epic space saga allowing players to explore hundreds of solar systems.",
      image: "https://wallpapers.com/images/high/starfield-characters-in-space-4t9bbfeweugkkxb5.webp"
    },
    {
      id: 8,
      title: "Spider-Man 2",
      subtitle: "Action-Adventure (2023)",
      description: "Peter Parker and Miles Morales join forces in this thrilling superhero adventure.",
      image: "https://wallpapers.com/images/high/marvel-hero-spiderman-5120-x-1440-1dsb62xrruvzmy3n.webp"
    },
    {
      id: 9,
      title: "Final Fantasy XVI",
      subtitle: "Action RPG (2023)",
      description: "A dark fantasy epic set in the realm of Valisthea, where Eikons determine the fate of the world.",
      image: "https://wallpapers.com/images/hd/final-fantasy-vii-remake-4k-ultra-hd-wallpaper-background-m5u06ivctihnxdj6.webp"
    },
    {
      id: 10,
      title: "Resident Evil 4 Remake",
      subtitle: "Survival Horror (2023)",
      description: "A complete reimagining of the 2005 classic with modern graphics and gameplay.",
      image: "https://wallpapers.com/images/hd/resident-evil-2-2019-4k-hd-games-4k-wallpaper-image-gg6rxtneiqx4xqag.webp"
    }
  ];

  return (
    <>
      <VideoGameGrid videoGames={games} />
    </>
  );
}

export default App
