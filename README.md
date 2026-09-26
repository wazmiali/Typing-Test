# ⌨️ TypingWazmi — Typing Speed Test

> A modern, browser-based typing practice and performance tracking application built with **HTML, CSS, and vanilla JavaScript**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-2ea44f?style=for-the-badge)](https://wazmiali.github.io/Typing-Test/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-222?style=flat-square&logo=github)](https://pages.github.com/)

TypingWazmi is a client-side typing application designed to help users **practice typing, measure performance, and track improvement** directly in a web browser.

The current project is intentionally lightweight: the application is contained in a single HTML file and does not require a backend, database, build system, package manager, or framework.

---

## 🌐 Live Demo

**Try the application:**  
https://wazmiali.github.io/Typing-Test/

**Repository:**  
https://github.com/wazmiali/Typing-Test

---

## 📌 Project Overview

TypingWazmi combines a typing engine, configurable test modes, live statistics, result analysis, settings, themes, history, personal-best tracking, and a local leaderboard in one browser application.

The application can be used for:

- Daily typing practice
- WPM measurement
- Accuracy improvement
- Long typing sessions
- Number typing practice
- Programming/code typing practice
- Custom-text practice
- Reviewing previous typing performance
- Comparing current results with personal bests

Because the application is client-side, user data is stored locally in the browser rather than in a remote database.

---

# ✨ Features

## ⌨️ Typing Test Modes

TypingWazmi supports multiple ways to practice.

### 1. Time Mode

The user types for a selected amount of time.

Available durations:

- 15 seconds
- 30 seconds
- 60 seconds
- 2 minutes
- 5 minutes
- 10 minutes

This mode is useful for both short speed tests and longer practice sessions.

### 2. Words Mode

The test can be configured around a target number of words.

Supported configurations include:

- 10 words
- 25 words
- 50 words
- 100 words

The test ends when the configured word target is reached.

### 3. Quote Mode

Quote mode provides predefined text for users who want to practice with sentence-like content instead of only isolated words.

### 4. Zen Mode

Zen mode provides a freer typing experience without the same fixed target used by normal timed or word-count tests.

### 5. Numbers Mode

Numbers mode generates numeric typing challenges.

It can contain:

- Normal numbers
- Decimal values
- Number patterns/ranges

This is useful for practicing typing beyond ordinary alphabetic text.

### 6. Code Mode

Code mode generates programming-oriented typing content.

The content can contain programming keywords, identifiers, operators, brackets, and symbols such as:

```text
function
return
const
let
class
async
await
if
else
for
while
==
===
&&
||
{}
[]
()
```

This mode is especially useful for developers who want to practice typing common programming syntax.

### 7. Custom Text Mode

Custom Text mode allows the user to practice with their own text instead of only generated or predefined content.

---

# ⏱️ Test Durations

Time-based tests support:

| Duration | Use case |
|---|---|
| 15 seconds | Very short speed check |
| 30 seconds | Quick practice |
| 60 seconds | Standard typing test |
| 2 minutes | Extended practice |
| 5 minutes | Long practice |
| 10 minutes | Full typing session |

The 10-minute option is useful for users who want a longer typing session rather than a short benchmark.

---

# 📊 Real-Time Statistics

During a test, the application can update typing statistics while the user types.

The interface can display:

- **WPM** — Words Per Minute
- **Accuracy**
- **Timer**
- **Typing progress**
- **Mistakes**
- **Backspaces**
- **Consistency**

The typing engine processes the input character by character and provides immediate visual feedback.

---

# 🎯 Character-Level Typing Feedback

The typing interface tracks the state of individual characters.

Character states include:

```text
correct
incorrect
pending
current
```

Conceptually, the typing process works like this:

```text
Target Text
    ↓
Split / display characters
    ↓
Read keyboard input
    ↓
Compare typed character with target character
    ↓
Mark character state
    ↓
Update cursor
    ↓
Update statistics
```

This gives the user immediate visual information about their current typing position and errors.

---

# 🧮 WPM Calculation

TypingWazmi uses the common **five-characters-per-word** convention.

The basic Net WPM calculation is:

```text
Net WPM = (Correct Characters ÷ 5) ÷ Minutes Elapsed
```

For example, if a user types 300 correct characters in 1 minute:

```text
300 ÷ 5 = 60 WPM
```

The actual result also depends on the elapsed test time and the application's handling of correct/incorrect input.

---

# 🎯 Accuracy

Accuracy represents how much of the typed content is correct.

The application tracks correct and incorrect characters while the test is running and uses this information in the displayed performance statistics.

Accuracy is important because a high typing speed with many mistakes does not represent the same performance as accurate typing.

---

# ❌ Mistakes and Backspaces

The typing engine tracks typing errors and backspace activity.

This allows the application to report:

- Mistakes
- Backspaces
- Correct characters
- Incorrect characters
- Overall accuracy

Backspace support also allows users to correct their input during a test.

---

# 📈 Test Results

After a test is completed, TypingWazmi can display a detailed result screen.

Result information includes:

- Net WPM
- Raw WPM
- Accuracy
- Consistency
- Mistakes
- Characters typed
- Test duration
- Performance graph
- Personal-best information

The result screen gives the user a summary of the completed session instead of only showing a single WPM number.

---

# 📉 Performance Graph

The application can visualize typing performance using the browser's **Canvas API**.

The graph can be used to understand how typing performance changes throughout a test.

For very short tests, the available data may be limited, so the graph may contain fewer meaningful samples.

---

# 🏆 Personal Bests

TypingWazmi keeps track of personal-best performance locally.

Personal-best records can be maintained for different test configurations so users can compare new results with their previous best results.

Examples of configurations can include:

- Test mode
- Test duration
- Word count
- Other applicable test settings

---

# 📚 Test History

Completed tests can be stored locally in the browser.

The history system allows the application to retain previous typing results so they can be used for performance tracking and statistics.

Because the data is stored locally, history is associated with the browser/device where the application is being used.

---

# 🏅 Local Leaderboard

TypingWazmi includes a browser-local leaderboard.

Leaderboard information can include:

| Field | Description |
|---|---|
| Rank | Position in the local leaderboard |
| Username | Saved local username |
| WPM | Typing speed |
| Accuracy | Typing accuracy |
| Test Mode | Mode used for the test |
| Test Date | Date associated with the result |

Leaderboard configurations include examples such as:

- 15-second test
- 30-second test
- 60-second test
- 120-second test
- 10-word test
- 25-word test
- 50-word test
- 100-word test

### Important: Local Only

The leaderboard is **not an online/global leaderboard**.

It uses data stored in the current browser/device.

That means:

```text
Browser A
   ↓
Local Storage
   ↓
Local Leaderboard
```

It does not automatically synchronize with:

```text
Browser B
Other users
Other devices
Cloud servers
```

A global leaderboard would require a backend and database.

---

# 🎨 Themes

TypingWazmi provides multiple visual themes.

Available themes include:

- Dark
- Light
- Midnight
- Ocean
- Forest
- Sunset
- Minimal

The selected theme can be changed from Settings.

---

# 🔤 Font Customization

Users can customize the typing font.

Available typing fonts include:

- JetBrains Mono
- Fira Code
- Roboto Mono
- Courier Prime
- System Mono

Font size can also be customized.

This allows users to adjust the typing interface to their preferred visual style.

---

# ⚙️ Settings

The Settings section provides configuration options for the application.

Available settings include:

- Theme
- Typing font
- Font size
- Sound effects
- Caret style
- Live WPM display
- Live accuracy display
- Default test mode
- Punctuation
- Numbers
- Difficulty level

Settings are stored locally so they can persist after the page is refreshed or reopened.

---

# 🔊 Sound Effects

TypingWazmi can provide optional typing sounds through the browser's **Web Audio API**.

Sound effects can be enabled or disabled from Settings.

No external audio server is required for the browser-side sound functionality.

---

# 🎚️ Difficulty Levels

Generated typing content can use different difficulty levels:

- Easy
- Medium
- Hard

The difficulty setting changes the word/content pool used for generated typing material.

This allows the application to support different practice levels.

---

# 🔢 Number Practice

Numbers mode provides additional typing challenges using numeric content.

Possible content includes:

```text
123
4567
98.25
1000
25000
42.75
```

The exact generated content depends on the application's number-generation logic and selected configuration.

---

# 💻 Code Typing

Code mode focuses on common programming syntax.

Typical content categories include:

### Keywords

```text
function
return
const
let
var
class
async
await
if
else
for
while
```

### Operators

```text
=
==
===
!=
&&
||
+
-
*
/
```

### Symbols

```text
{}
[]
()
<>
;
:
```

This makes the mode useful for practicing the symbols and keywords frequently used while programming.

---

# ✍️ Punctuation

The application supports punctuation in generated typing content.

Supported punctuation includes:

```text
,
.
!
?
;
:
```

When punctuation is enabled, generated content can also include capitalization and sentence-ending punctuation.

---

# 🧠 Typing Engine Architecture

The core typing functionality is implemented in JavaScript inside the main HTML application.

At a high level, the engine follows this process:

```text
1. Select test configuration
        ↓
2. Generate/select target text
        ↓
3. Render target characters
        ↓
4. Wait for keyboard input
        ↓
5. Start timer when typing begins
        ↓
6. Compare typed input with target text
        ↓
7. Mark character as correct/incorrect
        ↓
8. Track mistakes/backspaces
        ↓
9. Update WPM and accuracy
        ↓
10. Update cursor and progress
        ↓
11. Detect test completion
        ↓
12. Generate result
        ↓
13. Save applicable data locally
```

---

# ⌨️ Input Handling

The application captures keyboard input through its browser-side JavaScript typing interface.

The input system is responsible for:

- Detecting typed characters
- Comparing input against target text
- Handling spaces
- Handling backspaces
- Tracking mistakes
- Moving the caret
- Updating character states
- Updating statistics
- Detecting completion

The application does not need a server to process keystrokes.

---

# ⏲️ Timer System

The timer controls time-based tests.

General flow:

```text
Waiting
  ↓
First typing input
  ↓
Timer starts
  ↓
Timer updates
  ↓
Time reaches configured limit
  ↓
Test ends
  ↓
Results are calculated
```

For word-based tests, completion can instead be triggered when the configured word target is reached.

---

# 💾 Local Storage

TypingWazmi uses the browser's **Local Storage API** instead of a remote database.

The current application uses storage keys including:

```text
ks_settings
ks_user
ks_history
ks_bests
ks_leaderboard
```

### `ks_settings`

Stores application preferences such as selected settings.

### `ks_user`

Stores local user/profile information.

### `ks_history`

Stores completed typing-test history.

### `ks_bests`

Stores personal-best results.

### `ks_leaderboard`

Stores local leaderboard entries.

The exact data format is managed by the application's JavaScript code.

---

# 🔐 Privacy

The current architecture is browser-based.

Typing statistics and application information are stored locally rather than being sent to a project backend.

This means:

- No project database is required
- No server-side account system is required
- Local results remain associated with the current browser/device
- Clearing browser/site data can remove locally stored information

Because there is no cloud synchronization in the current architecture, local data does not automatically follow the user to another browser or device.

---

# 👤 Local Profile / Guest Usage

The application supports a simple browser-local user profile.

A saved username can be used by the local leaderboard.

Users can also use the application without a server-side account.

This is **not** traditional authentication.

There is currently no backend login system managing:

- Passwords
- Sessions
- Server-side accounts
- Cloud profiles

---

# 🧹 Reset Application Data

The Settings section provides a reset option for locally stored application data.

Depending on the application state, resetting data can remove:

- Settings
- Test history
- Personal bests
- Leaderboard entries
- User information

The application can then reload with its default/local initial state.

---

# 🛠️ Technology Stack

| Technology / API | Purpose |
|---|---|
| HTML5 | Application structure and interface |
| CSS3 | Layout, styling, themes, responsive design |
| JavaScript | Typing engine and application logic |
| Local Storage API | Settings, history, bests and leaderboard persistence |
| Web Audio API | Optional typing sounds |
| Canvas API | Performance graph |
| Google Fonts | Font resources |

### No frontend framework

The project does not depend on:

- React
- Vue
- Angular
- Next.js
- Bootstrap as an application framework
- Node.js
- PHP
- MySQL

The current application is implemented as a standalone browser application.

---

# 📁 Project Structure

The current GitHub repository is intentionally simple.

```text
Typing-Test/
│
└── TypingTestApp.html
```

`TypingTestApp.html` contains the application's:

```text
HTML
├── Page structure
├── Navigation
├── Typing interface
├── Statistics interface
├── Results
├── Leaderboard
├── Settings
└── About content

CSS
├── Layout
├── Responsive styling
├── Themes
├── Buttons
├── Typing interface
├── Cards
├── Statistics
└── Settings UI

JavaScript
├── Application state
├── Test configuration
├── Text generation
├── Typing engine
├── Timer
├── WPM calculation
├── Accuracy calculation
├── Mistake tracking
├── History
├── Personal bests
├── Leaderboard
├── Local Storage
├── Settings
├── Theme management
└── Result processing
```

GitHub currently shows the main application file as approximately **2,179 lines / 1,960 lines of code** and about **77.8 KB**. The repository currently contains one application file. 

---

# 🔄 Application Data Flow

The application can be understood as a browser-side data flow:

```text
User
 │
 ├── Select Mode
 │
 ├── Select Duration / Word Count
 │
 ├── Select Settings
 │
 ▼
Test Configuration
 │
 ▼
Text Generation / Selection
 │
 ▼
Typing Engine
 │
 ├── Keyboard Input
 │
 ├── Character Comparison
 │
 ├── Mistakes
 │
 ├── Backspaces
 │
 └── Cursor Position
 │
 ▼
Live Statistics
 │
 ├── WPM
 ├── Accuracy
 ├── Progress
 └── Timer
 │
 ▼
Test Completion
 │
 ▼
Result Processing
 │
 ├── WPM
 ├── Accuracy
 ├── Consistency
 ├── Mistakes
 ├── Characters
 └── Performance Graph
 │
 ▼
Local Storage
 │
 ├── History
 ├── Personal Best
 ├── Leaderboard
 ├── User
 └── Settings
```

---

# 🚀 Getting Started

## Requirements

You only need:

- A modern web browser
- Git, if cloning the repository

No backend runtime is required.

---

## 1. Clone the Repository

```bash
git clone https://github.com/wazmiali/Typing-Test.git
```

---

## 2. Enter the Project Directory

```bash
cd Typing-Test
```

---

## 3. Open the Application

The main file is:

```text
TypingTestApp.html
```

You can open it directly in a modern browser.

For local development, you can also use a simple local server such as the VS Code Live Server extension.

No package installation is required for the current project.

---

# 🌐 GitHub Pages Deployment

The application is suitable for static hosting because it runs in the browser.

The project is currently available through GitHub Pages at:

https://wazmiali.github.io/Typing-Test/

A static deployment does not require:

- Python server
- Node.js server
- PHP server
- MySQL database
- API server

The browser loads the HTML application and executes its CSS/JavaScript locally.

---

# 🌍 Browser Support

The application is intended for modern browsers that support:

- HTML5
- CSS3
- JavaScript
- Local Storage
- Web Audio API
- Canvas API

Common supported browsers include:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Browser behavior can vary depending on device and browser version.

---

# 📱 Responsive Design

The application includes responsive styling intended to adapt the interface to different screen sizes.

Responsive areas include:

- Navigation
- Typing text
- Statistics
- Result cards
- Settings
- Layout grids
- Controls

The application can therefore be used on desktop and smaller screens, although typing behavior can naturally feel different between physical keyboards and mobile keyboards.

---

# 🖥️ User Workflow

A typical session works like this:

```text
Open TypingWazmi
      ↓
Choose a test mode
      ↓
Choose duration / word count
      ↓
Adjust settings if required
      ↓
Start typing
      ↓
Timer starts for applicable tests
      ↓
Receive live feedback
      ↓
Complete the test
      ↓
View result
      ↓
Compare with personal best
      ↓
Save result locally
      ↓
Review history/statistics later
```

---

# 📊 What the Project Demonstrates

This project demonstrates several important frontend development concepts.

## DOM Manipulation

JavaScript dynamically updates the typing interface, statistics, results, and settings.

## Keyboard Event Handling

The application responds to keyboard input and uses it to drive the typing engine.

## State Management

The application maintains the current test configuration, typing progress, timer state, results, and user settings.

## Timers

Time-based typing tests require browser-side timer management.

## Real-Time Calculations

WPM, accuracy, progress, mistakes, and other statistics can change while the user types.

## Local Persistence

Local Storage allows the application to retain data between browser sessions.

## Responsive CSS

CSS media/layout rules allow the UI to adapt to different screen sizes.

## Theme Systems

The application provides multiple visual themes and saves the selected configuration locally.

## Canvas Graphics

Canvas is used for the performance graph.

## Browser APIs

The project demonstrates practical use of browser APIs such as:

```text
Local Storage API
Web Audio API
Canvas API
Keyboard/Input Events
DOM APIs
```

---

# 🧩 Why a Single HTML File?

The current project intentionally keeps the application in one file.

### Advantages

- Very easy to run
- No build process
- No dependency installation
- Easy static deployment
- Simple project structure
- Easy to share
- Works directly in a browser

### Trade-offs

As the application becomes larger, a single file can become harder to maintain.

A future modular architecture could separate:

```text
index.html
css/
    style.css
js/
    app.js
    typing-engine.js
    statistics.js
    storage.js
    settings.js
    leaderboard.js
    text-generator.js
assets/
```

The current single-file structure is therefore simple and convenient, but not necessarily the ideal structure for a much larger production application.

---

# ⚠️ Current Limitations

## No Server-Side Accounts

User information is stored locally.

There is no backend authentication system.

## No Global Leaderboard

The leaderboard is local to the browser/device.

Users cannot currently compete through a shared server leaderboard.

## No Cloud Synchronization

History, settings, and personal bests are not synchronized between devices.

## No Remote Database

There is currently no project database for storing results.

## Single-File Architecture

Most application logic is contained in one HTML file, which can make future maintenance more difficult as the project grows.

---

# 🔮 Future Improvements

Possible future development directions include:

### Backend

- FastAPI backend
- REST API
- Database integration
- Server-side user accounts
- Cloud result storage

### Accounts

- Registration
- Login
- User profiles
- Password-protected accounts
- Cloud synchronization

### Statistics

- Daily statistics
- Weekly statistics
- Monthly statistics
- Long-term WPM trends
- More detailed performance graphs
- Personal analytics dashboard

### Social / Competitive Features

- Global leaderboard
- Friends leaderboard
- Multiplayer typing races
- Public profiles
- Achievements
- Badges
- Typing streaks

### Typing Features

- More languages
- Keyboard heatmap
- More text categories
- Better custom-text tools
- More difficulty levels
- More detailed error analysis

### Application Improvements

- Progressive Web App support
- Installable mobile experience
- Modular JavaScript architecture
- Automated testing
- Accessibility improvements
- Better offline support

These are future possibilities, not claims about features already implemented in the current version.

---

# 🧪 Testing Checklist

When making changes to the application, test the following areas:

### Typing

- [ ] Correct characters
- [ ] Incorrect characters
- [ ] Backspace
- [ ] Spaces
- [ ] Cursor movement
- [ ] End-of-test behavior

### Timer

- [ ] Test starts correctly
- [ ] Timer counts down/up correctly
- [ ] Test stops at configured duration
- [ ] Restart resets timer

### Statistics

- [ ] WPM
- [ ] Raw WPM
- [ ] Accuracy
- [ ] Mistakes
- [ ] Backspaces
- [ ] Consistency
- [ ] Character count

### Modes

- [ ] Time mode
- [ ] Words mode
- [ ] Quote mode
- [ ] Zen mode
- [ ] Numbers mode
- [ ] Code mode
- [ ] Custom text mode

### Settings

- [ ] Theme
- [ ] Font
- [ ] Font size
- [ ] Sounds
- [ ] Caret
- [ ] Punctuation
- [ ] Numbers
- [ ] Difficulty

### Persistence

- [ ] Settings survive refresh
- [ ] History is saved
- [ ] Best scores are saved
- [ ] Leaderboard is saved
- [ ] User data is saved
- [ ] Reset works

### Responsive UI

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile
- [ ] Long text
- [ ] Long test
- [ ] Result screen
- [ ] Settings screen

---

# 🤝 Contributing

Contributions and improvements are welcome.

## Fork the repository

```bash
git clone https://github.com/wazmiali/Typing-Test.git
cd Typing-Test
```

## Create a feature branch

```bash
git checkout -b feature/your-feature
```

## Make your changes

Test the application in a modern browser.

## Commit

```bash
git add .
git commit -m "Add your feature"
```

## Push

```bash
git push origin feature/your-feature
```

Then open a Pull Request on GitHub.

---

# 📄 License

The current repository does not specify an open-source license.

If you want other developers to have explicit permission to use, modify, and distribute the project, add a license file such as an appropriate MIT license after deciding on the licensing terms.

---

# 👨‍💻 Author

**Wazmi Ali**

GitHub:  
https://github.com/wazmiali

Project:  
https://github.com/wazmiali/Typing-Test

Live Demo:  
https://wazmiali.github.io/Typing-Test/

---

# ⭐ Support the Project

If you find TypingWazmi useful:

- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest improvements
- 🔧 Submit pull requests
- 📢 Share the project

Repository:

https://github.com/wazmiali/Typing-Test

---

# 📸 Screenshots

Add screenshots to the repository if you want the README to display the application's interface.

Recommended structure:

```text
screenshots/
├── home.png
├── typing-test.png
├── results.png
├── statistics.png
├── leaderboard.png
└── settings.png
```

Then add them to the README with:

```markdown
## Screenshots

### Typing Test

![Typing Test](screenshots/typing-test.png)

### Results

![Results](screenshots/results.png)

### Statistics

![Statistics](screenshots/statistics.png)

### Leaderboard

![Leaderboard](screenshots/leaderboard.png)

### Settings

![Settings](screenshots/settings.png)
```

---

# 🗂️ Quick Reference

| Area | Current Implementation |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Framework | Vanilla JavaScript |
| Backend | None |
| Database | None |
| Storage | Browser Local Storage |
| Hosting | GitHub Pages |
| Typing Engine | Client-side JavaScript |
| Graph | Canvas API |
| Sounds | Web Audio API |
| Accounts | Local profile only |
| Leaderboard | Local only |
| Cloud Sync | Not available |
| Build Tool | Not required |
| Package Manager | Not required |
| Main File | `TypingTestApp.html` |

---

# 🧠 Technical Summary

TypingWazmi is a **single-page client-side typing application**.

Its main architecture can be summarized as:

```text
HTML
  ↓
UI Structure
  ↓
CSS
  ↓
Visual Design + Responsive Layout
  ↓
JavaScript
  ↓
Application State
  ↓
Typing Engine
  ↓
Statistics + Results
  ↓
Local Storage
```

The project demonstrates how a relatively complete interactive web application can be built using standard browser technologies without requiring a backend framework.

---

# 📚 Main Concepts Used

```text
HTML5
CSS3
JavaScript
DOM Manipulation
Event Handling
Keyboard Input
Timers
State Management
Local Storage
Web Audio API
Canvas API
Responsive Design
Theme Management
Text Generation
Performance Calculation
Data Persistence
Client-Side Application Architecture
```

---

# 🏁 Conclusion

TypingWazmi is a browser-based typing platform focused on **speed, accuracy, customization, and progress tracking**.

The current version provides a broad set of typing modes and performance features while keeping the technical architecture simple and dependency-free.

The project is also a practical demonstration of how **HTML, CSS, JavaScript, browser APIs, Local Storage, and Canvas** can be combined to build a complete interactive application.

---

## 🚀 Built with HTML, CSS & JavaScript

**TypingWazmi — Practice. Type. Improve.** ⌨️
