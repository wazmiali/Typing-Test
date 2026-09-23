# ⌨️ TypingWazmi — Typing Speed Test

A modern, fast, and customizable **typing speed test web application** built with pure **HTML, CSS, and JavaScript**.

TypingWazmi allows users to practice typing and measure their **Words Per Minute (WPM), accuracy, consistency, mistakes, and typing performance** through different test modes and durations.

The application runs entirely in the browser and does not require a backend or database. User settings, test history, personal bests, and leaderboard data are stored locally using the browser's **Local Storage**.

---

## 🌐 Live Project

**Web Application**
https://wazmiali.github.io/Typing-Test/

---

## ✨ Features

### ⌨️ Multiple Typing Modes

The application provides several typing modes:

* **Time Mode** — Type for a selected amount of time.
* **Words Mode** — Type a fixed number of words.
* **Quote Mode** — Practice using predefined quotes.
* **Zen Mode** — Type freely without a fixed target.
* **Numbers Mode** — Practice typing numbers and numeric patterns.
* **Code Mode** — Practice typing programming-related tokens.
* **Custom Text Mode** — Type your own custom text.

---
<img width="1891" height="847" alt="image" src="https://github.com/user-attachments/assets/f7d64b14-d3e5-4be9-a514-eee04b8f0d30" />

<img width="1917" height="850" alt="image" src="https://github.com/user-attachments/assets/02478e34-1eae-4ade-9721-82f90ab60602" />

## ⏱️ Custom Test Durations

Time mode supports multiple durations:

* 15 seconds
* 30 seconds
* 60 seconds
* 2 minutes
* 5 minutes
* 10 minutes

This makes the application useful for both quick typing practice and longer typing sessions.

---

## 📊 Real-Time Statistics

During a test, the application can display live performance information including:

* **WPM (Words Per Minute)**
* **Accuracy**
* **Timer**
* **Typing progress**
* **Mistakes**
* **Backspaces**
* **Consistency**

The typing engine checks characters individually and visually indicates whether the entered character is correct or incorrect.

---

## 📈 Results

After completing a test, the application provides a detailed result screen containing:

* Net WPM
* Raw WPM
* Accuracy
* Consistency
* Mistakes
* Characters typed
* Test duration
* Performance graph
* Personal-best information

The application calculates Net WPM using the standard five-characters-per-word approach:

```text
Net WPM = (Correct Characters ÷ 5) ÷ Minutes Elapsed
```

Accuracy is calculated from the number of correct characters compared with the total characters typed.

---

## 🏆 Personal Bests

The application automatically keeps track of personal best results.

Personal-best records can be maintained for different test configurations, allowing users to compare their current performance with their previous best performance.

---

## 📚 Test History

Completed tests can be stored in the browser.

The statistics section can use this information to show previous performance and typing progress.

---

## 🏅 Local Leaderboard

TypingWazmi includes a local leaderboard.

The leaderboard provides:

* Rank
* Username
* WPM
* Accuracy
* Test mode
* Test date

Leaderboard results can be filtered for different test configurations such as:

* 15-second test
* 30-second test
* 60-second test
* 120-second test
* 10-word test
* 25-word test
* 50-word test
* 100-word test

### Important

The leaderboard is currently **local to the user's browser/device**. It is not a global online leaderboard.

A real multi-user leaderboard would require a backend server and database.

---

## 🎨 Themes

The application includes multiple visual themes:

* Dark
* Light
* Midnight
* Ocean
* Forest
* Sunset
* Minimal

Themes can be changed from the Settings section.

---

## 🔤 Font Customization

Users can choose different typing fonts:

* JetBrains Mono
* Fira Code
* Roboto Mono
* Courier Prime
* System Mono

Font sizes can also be customized.

---

## ⚙️ Settings

The Settings section provides several customization options.

Users can configure:

* Theme
* Typing font
* Font size
* Sound effects
* Caret style
* Live WPM display
* Live accuracy display
* Default test mode
* Punctuation
* Numbers
* Difficulty level

The selected settings are saved locally so they can be restored when the application is opened again.

---

## 🔊 Sound Effects

The application includes optional typing sound effects using the browser's **Web Audio API**.

Sound can be enabled or disabled from Settings.

---

## 🎯 Difficulty Levels

Typing content can be generated using different difficulty levels:

* Easy
* Medium
* Hard

The difficulty setting changes the word pool used for generated typing content.

---

## 🔢 Number Practice

Numbers mode generates numeric typing challenges.

It can include:

* Normal numbers
* Decimal values
* Number ranges/patterns

This provides additional practice beyond normal word typing.

---

## 💻 Code Typing Mode

Code mode generates programming-related content using common programming keywords, operators, symbols, and identifiers.

Examples of content categories include:

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

This mode can be useful for developers who want to practice typing programming syntax.

---

## ✍️ Punctuation Support

The application can add punctuation to generated text.

Supported punctuation includes:

```text
,
.
!
?
;
:
```

When enabled, generated text can also include capitalization and sentence-ending punctuation.

---

## 🧠 Typing Engine

The application contains a custom JavaScript typing engine.

The typing engine:

1. Generates the target text.
2. Displays each character separately.
3. Captures keyboard input through a hidden input element.
4. Compares typed characters with the target text.
5. Marks characters as correct or incorrect.
6. Tracks mistakes and backspaces.
7. Updates WPM and accuracy.
8. Updates the cursor position.
9. Controls the timer.
10. Finishes the test when the required condition is reached.

The character states include:

```text
correct
incorrect
pending
current
```

This provides immediate visual feedback while typing.

---

## 💾 Local Storage

The project does not require a database.

Browser Local Storage is used to save application data.

The application stores information such as:

```text
ks_settings
ks_user
ks_history
ks_bests
ks_leaderboard
```

This allows settings and typing results to remain available after refreshing or reopening the browser.

---

## 🔐 Privacy

The current application is designed to work locally in the browser.

Typing content and statistics are stored in the browser's local storage rather than being sent to an external server.

Because there is currently no backend synchronization, the stored data is specific to the browser/device where the application is being used.

---

## 🛠️ Tech Stack

| Technology        | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| HTML5             | Application structure                          |
| CSS3              | Styling, layouts, themes and responsive design |
| JavaScript        | Typing engine and application logic            |
| Local Storage API | Saving settings and statistics                 |
| Web Audio API     | Optional typing sounds                         |
| Canvas API        | Performance graph                              |
| Google Fonts      | Typing and interface fonts                     |

The application is intentionally built without a frontend framework such as React or Vue.

---

## 📁 Project Structure

The current repository has a simple structure:

```text
Typing-Test/
│
└── TypingTestApp.html
```

The main file contains:

```text
HTML
├── Application structure
├── Navigation
├── Test interface
├── Statistics
├── Leaderboard
├── Settings
└── About section

CSS
├── Layout
├── Responsive design
├── Themes
├── Buttons
├── Typing interface
├── Result cards
└── Settings interface

JavaScript
├── Application state
├── Local Storage
├── Test configuration
├── Text generation
├── Typing engine
├── Timer
├── WPM calculation
├── Accuracy calculation
├── Statistics
├── Personal bests
├── Leaderboard
├── Settings
└── Theme management
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/wazmiali/Typing-Test.git
```

### 2. Open the project

```bash
cd Typing-Test
```

### 3. Run the application

Since this project is a client-side HTML application, you can simply open:

```text
TypingTestApp.html
```

in a modern web browser.

No Python, Node.js, PHP, MySQL, or other backend server is required for the current version.

---

## 🌐 Browser Support

The application is designed for modern browsers that support:

* HTML5
* CSS3
* JavaScript
* Local Storage
* Web Audio API
* Canvas

Recommended browsers include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes.

The CSS includes responsive layouts for smaller screens, including mobile-friendly adjustments to:

* Navigation
* Typing text size
* Result statistics
* Settings layout
* Cards and grids

---

## 📐 Performance Graph

After completing a suitable test, the application can display a performance graph.

The graph uses the browser's **Canvas API** to visualize typing performance over the test.

For very short tests, there may not be enough samples to produce a meaningful graph.

---

## 👤 Profile / Guest Mode

The application supports a simple local user profile.

User information is stored locally in the browser.

The leaderboard can use the saved username, while users who do not create a profile can participate as a guest.

This is currently a local browser-based profile rather than a server-side authentication system.

---

## 🧹 Reset Data

The Settings section provides an option to reset local application data.

Resetting the data removes locally stored:

* Settings
* Test history
* Personal bests
* Leaderboard entries
* User information

The reset operation reloads the application after clearing the browser's stored data.

---

## 🔒 Current Limitations

The current version is a **client-side application**, so some features are intentionally local.

### No real online accounts

User accounts are stored locally rather than being managed by a backend authentication system.

### No global leaderboard

Leaderboard results are stored on the user's device and are not shared between users.

### No cloud synchronization

Typing history and settings are not synchronized between different browsers or devices.

### Static application

The current project is contained in a single HTML file, making it easy to run but less modular for a large production application.

---

## 🔮 Future Improvements

Possible future improvements include:

* 🌐 Global online leaderboard
* 👤 Real user authentication
* ☁️ Cloud synchronization
* 🗄️ Backend database
* 📊 Advanced performance analytics
* 📅 Daily/weekly/monthly statistics
* 🏆 Achievements and badges
* 🔥 Typing streaks
* 👥 Multiplayer typing races
* 📱 Progressive Web App support
* 🌍 Multiple languages
* ⌨️ Keyboard heatmap
* 📈 More detailed WPM graphs
* 🔄 Account-based history synchronization

A production version could use a backend such as **FastAPI** with a database for authentication, cloud history, and a real global leaderboard.

---

## 🎓 Project Purpose

This project was created as a practical web-development project to build a complete interactive typing application using browser technologies.

It demonstrates concepts such as:

* DOM manipulation
* JavaScript event handling
* State management
* Timers
* Keyboard input handling
* Real-time calculations
* Local Storage
* Responsive CSS
* Theme systems
* Canvas graphics
* Browser APIs
* Client-side application design

---

## 📌 Key Learning Areas

Through this project, developers can learn how to build:

```text
Interactive UI
      ↓
Keyboard Event Handling
      ↓
Real-Time Validation
      ↓
Timer Management
      ↓
Performance Calculation
      ↓
Result Processing
      ↓
Local Data Storage
      ↓
Statistics & Visualization
```

---

## 🤝 Contributing

Contributions and improvements are welcome.

To contribute:

```bash
git clone https://github.com/wazmiali/Typing-Test.git
```

Create a new branch:

```bash
git checkout -b feature/your-feature
```

Make your changes, commit them, and push the branch:

```bash
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

Then open a Pull Request on GitHub.

---

## 📄 License

This project does not currently specify a license in the repository.

If you want others to freely use, modify, and distribute the project, consider adding an appropriate open-source license.

---

## 👨‍💻 Author

**Wazmi Ali**

GitHub:
https://github.com/wazmiali

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

**Repository:**
https://github.com/wazmiali/Typing-Test

---

## 📸 Screenshots

Add screenshots of the application here:

```text
screenshots/
├── typing-test.png
├── results.png
├── statistics.png
├── leaderboard.png
└── settings.png
```

Example Markdown:

```markdown
![Typing Test](screenshots/typing-test.png)
```

---

### 🚀 Built with HTML, CSS & JavaScript

**TypingWazmi — Practice. Type. Improve.**
