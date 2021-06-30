const checkWinner = [
    {
        name: "scissors",
        beats: ["paper", "lizard"],
        defeat: ["rock", "spock"]
    },
    {
        name: "paper",
        beats: ["rock", "spock"],
        defeat: ["scissors", "lizard"]
    },
    {
        name: "rock",
        beats: ["scissors", "lizard"],
        defeat: ["spock", "paper"]
    },
    {
        name: "spock",
        beats: ["scissors", "rock"],
        defeat: ["paper", "lizard"]
    },
    {
        name: "lizard",
        beats: ["paper", "spock"],
        defeat: ["rock", "scissors"]
    },
];

export default checkWinner;