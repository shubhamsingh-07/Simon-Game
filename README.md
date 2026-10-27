# Simon Game

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A browser-based memory game built with **HTML, CSS, JavaScript, and jQuery**. Watch the sequence of colored buttons and repeat it in the same order. Each successful round adds another color to the sequence.

## Features

- Four colored game buttons: green, red, yellow, and blue.
- Randomly extends the sequence as the player advances through levels.
- Plays a sound for each color and a separate sound when the player makes a mistake.
- Uses visual button feedback to show the active color.
- Tracks the current level and resets the game after an incorrect input.
- Displays the game state in the page heading.

## Tech Stack

- **HTML5** — game layout and interactive color panels.
- **CSS3** — button styles, color states, and pressed/game-over feedback.
- **JavaScript** — sequence generation, input tracking, and answer checking.
- **jQuery 3.7.1** — DOM selection, events, and class manipulation.
- **HTML Audio API** — playback of the local sound files.

## Play Locally

This project is a static front-end app. No Node.js server or build step is required.

1. Clone or download the repository.
2. Open the project folder in your code editor.
3. Open `index.html` in a modern browser, or use VS Code's Live Server extension.
4. Press a key to start the game.
5. Watch the color and sound sequence, then click the buttons in the same order.
6. Each successful round adds one more color to remember. One incorrect selection ends the round; press a key to restart.

The page loads jQuery from Google's CDN, so an internet connection is required for that script unless you change the project to serve jQuery locally.

## Project Structure

```text
Simon-Game/
├── index.html       # Game interface and jQuery CDN script
├── game.js          # Sequence logic, input checking, and sound playback
├── styles.css       # Layout and visual states
└── sounds/
    ├── blue.mp3
    ├── green.mp3
    ├── red.mp3
    ├── yellow.mp3
    └── wrong.mp3
```

## How It Works

1. The page listens for a keypress to begin a new game.
2. `nextSequence()` increments the level, selects a random color, and appends it to `gamePattern`.
3. The selected color is animated and its sound is played.
4. When the player clicks a colored panel, the color is added to `userClickedPattern`, animated, and played.
5. `checkAnswer()` compares the latest player input to the corresponding entry in the game sequence.
6. Once the complete sequence for the current level is entered correctly, the player-input array is cleared and the next level starts after a short delay.
7. On an incorrect input, the wrong sound plays, a game-over message appears, and the game state is reset.

## Concepts Practiced

- Maintaining game state with arrays and variables.
- Generating random sequence elements.
- Handling keyboard and click events.
- Comparing the player's input against an expected sequence.
- Updating the DOM through jQuery.
- Using timeouts for short visual feedback and level transitions.
- Playing local audio assets in the browser.

## Potential Improvements

- Ignore clicks until the game has started and while the next sequence is being shown.
- Make keyboard handling and restart behavior more explicit.
- Improve accessibility with semantic buttons, focus styles, and accessible labels.
- Load jQuery locally or use vanilla JavaScript to remove the external CDN dependency.
- Add automated checks for sequence progression and game-over/reset behavior.

## License

**MIT License** — see [`LICENSE`](LICENSE) for the full terms.

The repository includes MP3 sound files whose source and redistribution terms are not identified in the project files. Verify their licensing before redistribution; do not assume the MIT license overrides separate third-party rights. The Press Start 2P font is loaded from Google Fonts and is subject to its own license terms.

## Author

**Shubham Singh** · [GitHub Profile](https://github.com/shubhamsingh-07)
