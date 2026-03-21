export type Project = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  status?: "live" | "wip" | "experiment";
  image?: string; // path in /public or external URL
};

export const projects: Project[] = [
  {
    name: "Kona's SF Adventure",
    description:
      "A pixel-art platformer where Kona — our goofy Australian Shepherd — races through the streets of San Francisco to get home before sunset.",
    url: "/games/konas-sf-adventure",
    tags: ["game", "pixel art", "platformer"],
    status: "live",
    image: "/konassfadventure.png",
  },
  {
    name: "Galing Studio",
    description:
      "A curated editorial platform spotlighting Filipino-owned brands doing extraordinary things — stories behind the brands we love.",
    url: "https://www.galingstudio.com",
    tags: ["editorial", "filipino brands", "discovery"],
    status: "live",
    image: "/galingstudio.png",
  },
];
