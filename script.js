(function () {
  "use strict";

  /* ---------------------------------------------------------
         DATA: word lists, quotes
      --------------------------------------------------------- */
  const WORDS_EASY = [
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "at",
    "be",
    "this",
    "from",
    "have",
    "or",
    "by",
    "one",
    "had",
    "not",
    "word",
    "but",
    "what",
    "some",
    "we",
    "can",
    "out",
    "other",
    "were",
    "all",
    "there",
    "when",
    "up",
    "use",
    "your",
    "how",
    "said",
    "an",
    "each",
    "she",
    "which",
    "do",
    "their",
    "time",
    "if",
    "will",
    "way",
    "about",
    "many",
    "then",
    "them",
    "write",
    "would",
    "like",
    "so",
    "these",
    "her",
    "long",
    "make",
    "thing",
    "see",
    "him",
    "two",
    "has",
    "look",
    "more",
    "day",
    "could",
    "go",
    "come",
    "did",
    "number",
    "sound",
    "no",
    "most",
    "people",
    "my",
    "over",
    "know",
    "water",
    "than",
    "call",
    "first",
    "who",
    "may",
    "down",
    "side",
    "been",
    "now",
    "find",
    "any",
    "new",
    "work",
    "part",
    "take",
    "get",
    "place",
    "made",
    "live",
    "where",
    "after",
    "back",
    "little",
    "only",
    "round",
    "man",
    "year",
    "came",
    "show",
    "every",
    "good",
    "me",
    "give",
    "our",
    "under",
    "name",
  ];
  const WORDS_MEDIUM = [
    "system",
    "computer",
    "keyboard",
    "program",
    "develop",
    "future",
    "design",
    "language",
    "practice",
    "because",
    "between",
    "country",
    "example",
    "through",
    "picture",
    "against",
    "pattern",
    "special",
    "general",
    "student",
    "subject",
    "complete",
    "problem",
    "product",
    "service",
    "business",
    "science",
    "history",
    "chapter",
    "natural",
    "article",
    "however",
    "project",
    "control",
    "central",
    "machine",
    "material",
    "possible",
    "children",
    "together",
    "remember",
    "building",
    "movement",
    "interest",
    "increase",
    "continue",
    "american",
    "especially",
    "training",
    "function",
    "strategy",
    "standard",
    "platform",
    "engineer",
    "progress",
    "approach",
    "response",
    "frequency",
    "quantity",
    "resource",
    "keyboard",
    "hardware",
    "software",
    "internet",
    "download",
    "upload",
    "network",
    "browser",
    "database",
    "variable",
    "function",
    "constant",
    "boolean",
    "syntax",
    "runtime",
    "compiler",
    "terminal",
    "interface",
    "protocol",
    "algorithm",
    "structure",
    "component",
    "deploy",
    "container",
    "gateway",
    "endpoint",
    "session",
    "token",
    "cache",
    "cluster",
    "pipeline",
    "register",
    "backend",
    "frontend",
    "framework",
    "library",
    "module",
    "package",
    "version",
    "release",
    "feature",
    "request",
    "response",
    "payload",
    "header",
    "footer",
    "sidebar",
    "toolbar",
    "widget",
    "layout",
    "render",
    "update",
    "delete",
    "create",
    "insert",
    "query",
  ];
  const WORDS_HARD = [
    "asymmetric",
    "bureaucracy",
    "chrysanthemum",
    "disproportionate",
    "entrepreneurship",
    "fluorescent",
    "gargantuan",
    "hypothesis",
    "idiosyncratic",
    "juxtaposition",
    "kaleidoscope",
    "labyrinthine",
    "metamorphosis",
    "nonchalant",
    "onomatopoeia",
    "perpendicular",
    "quintessential",
    "reconnaissance",
    "surreptitious",
    "tempestuous",
    "ubiquitous",
    "vulnerability",
    "whimsical",
    "xenophobia",
    "yesteryear",
    "zealotry",
    "anachronism",
    "bibliography",
    "circumnavigate",
    "deteriorate",
    "exacerbate",
    "facetious",
    "gregarious",
    "hegemony",
    "incontrovertible",
    "juxtapose",
    "kinesthetic",
    "legitimacy",
    "magnanimous",
    "nomenclature",
    "obfuscate",
    "paradigm",
    "quixotic",
    "reciprocity",
    "substantiate",
    "tantamount",
    "unequivocal",
    "vicissitude",
    "wherewithal",
    "abnegation",
    "capitulate",
  ];

  const QUOTES = {
    short: [
      "Small steps taken daily lead to distances few ever imagine.",
      "The quiet keyboard hides the loudest ideas waiting to be typed.",
      "Practice is the bridge between confusion and confidence.",
    ],
    medium: [
      "Every skilled typist began as someone who could barely find the right keys, and improved only by returning to the keyboard again and again, one imperfect sentence at a time.",
      "Speed without accuracy is just fast guessing, and accuracy without speed rarely finishes anything on time, so the real craft is learning to trust your fingers and your eyes together.",
    ],
    long: [
      "There is a particular kind of focus that appears only after the first few seconds of a fast, quiet task — the noise of the room fades, the cursor becomes the only thing that matters, and for a short while the only conversation happening is between your hands and the page in front of you. That state is worth chasing, not because typing quickly is glamorous, but because the discipline of getting there carries over into everything else you build.",
      "A well-designed practice session rarely feels dramatic while it is happening. It is ordinary, even a little boring: the same motions repeated with slightly more precision each time, small errors corrected before they become habits, and a gradual, almost invisible climb in both speed and control. Months later, when someone asks how you got so fast, the honest answer is rarely a single breakthrough — it is simply that you kept showing up.",
    ],
  };

  const CODE_TOKENS = [
    "function",
    "return",
    "const",
    "let",
    "var",
    "if",
    "else",
    "for",
    "while",
    "import",
    "export",
    "from",
    "class",
    "interface",
    "async",
    "await",
    "true",
    "false",
    "null",
    "undefined",
    "print",
    "console.log",
    "def",
    "self",
    "public",
    "static",
    "void",
    "new",
    "this",
    "try",
    "catch",
    "throw",
    "break",
    "continue",
    "switch",
    "case",
    "default",
    "typeof",
    "instanceof",
    "extends",
    "implements",
    "yield",
    "=>",
    "==",
    "===",
    "!=",
    "!==",
    "&&",
    "||",
    "+=",
    "-=",
    "*=",
    "/=",
    "{",
    "}",
    "(",
    ")",
    "[",
    "]",
    ";",
    ":",
    "=",
    "+",
    "-",
    "*",
    "/",
    "<",
    ">",
    "<=",
    ">=",
    "x",
    "y",
    "i",
    "j",
    "n",
    "arr",
    "obj",
    "data",
    "index",
    "value",
    "result",
    "total",
    "count",
    "item",
    "key",
    "name",
    "id",
    "list",
    "map",
    "filter",
    "reduce",
  ];
  const PUNCT_MARKS = [",", ".", "!", "?", ";", ":"];
  function maybeCapitalize(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }

  /* ---------------------------------------------------------
         STATE / STORAGE
      --------------------------------------------------------- */
  const LS = {
    get(k, d) {
      try {
        const v = localStorage.getItem(k);
        return v === null ? d : JSON.parse(v);
      } catch (e) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, JSON.stringify(v));
      } catch (e) {}
    },
  };

  let settings = LS.get("ks_settings", {
    theme: "dark",
    font: "jb",
    fontSize: "md",
    sound: false,
    caret: false,
    liveWpm: true,
    liveAcc: true,
    defaultMode: "time",
    punctuation: false,
    numbers: false,
    difficulty: "medium",
  });
  let user = LS.get("ks_user", null); // {username, email, joined}
  let history = LS.get("ks_history", []); // array of test result objects
  let personalBests = LS.get("ks_bests", {}); // key -> {wpm, accuracy, consistency, date}
  let leaderboard = LS.get("ks_leaderboard", []); // {name, wpm, accuracy, mode, key, date}

  function saveAll() {
    LS.set("ks_settings", settings);
    LS.set("ks_user", user);
    LS.set("ks_history", history);
    LS.set("ks_bests", personalBests);
    LS.set("ks_leaderboard", leaderboard);
  }

  /* ---------------------------------------------------------
         DOM refs
      --------------------------------------------------------- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const body = document.body;
  const views = {
    test: $("#view-test"),
    results: $("#view-results"),
    stats: $("#view-stats"),
    leaderboard: $("#view-leaderboard"),
    settings: $("#view-settings"),
    auth: $("#view-auth"),
    about: $("#view-about"),
  };
  const navBtns = $$("#nav button");

  function showView(name) {
    Object.values(views).forEach((v) => v.classList.remove("active"));
    views[name].classList.add("active");
    navBtns.forEach((b) =>
      b.classList.toggle("active", b.dataset.view === name),
    );
    if (name === "stats") renderStats();
    if (name === "leaderboard") renderLeaderboard();
    if (name === "auth") renderAuth();
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  navBtns.forEach((b) =>
    b.addEventListener("click", () => showView(b.dataset.view)),
  );
  $("#profileBtn").addEventListener("click", () => showView("auth"));

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------------------------------------------------------
         THEME / FONT / SETTINGS APPLICATION
      --------------------------------------------------------- */
  const THEMES = [
    "dark",
    "light",
    "midnight",
    "ocean",
    "forest",
    "sunset",
    "minimal",
  ];
  const FONT_MAP = {
    jb: "ui-monospace,'SF Mono','Cascadia Code','Fira Code','JetBrains Mono',Consolas,'Liberation Mono',monospace",
    fira: "ui-monospace,'SF Mono','Cascadia Code','Fira Code',Consolas,'Liberation Mono',monospace",
    roboto: "ui-monospace,'SF Mono','Cascadia Code',Consolas,'Liberation Mono',monospace",
    courier: "'Courier Prime',ui-monospace,'SF Mono',Consolas,'Liberation Mono',monospace",
    system: "ui-monospace,'SF Mono','Cascadia Code',Consolas,'Liberation Mono',monospace",
  };
  const SIZE_MAP = { sm: "19px", md: "26px", lg: "32px", xl: "40px" };

  function applySettings() {
    body.setAttribute("data-theme", settings.theme);
    document.documentElement.style.setProperty(
      "--font-type",
      FONT_MAP[settings.font],
    );
    $("#wordsEl").style.fontSize = SIZE_MAP[settings.fontSize];
    $("#wordsWrap").classList.toggle("caret-smooth", settings.caret);
    $("#soundToggle").checked = settings.sound;
    $("#caretToggle").checked = settings.caret;
    $("#liveWpmToggle").checked = settings.liveWpm;
    $("#liveAccToggle").checked = settings.liveAcc;
    $("#fontSelect").value = settings.font;
    $("#fontSizeSelect").value = settings.fontSize;
    $("#defModeSelect").value = settings.defaultMode;
    $("#punctToggle").checked = settings.punctuation;
    $("#numToggle").checked = settings.numbers;
    $("#punctPill").classList.toggle("on", settings.punctuation);
    $("#numPill").classList.toggle("on", settings.numbers);
    $("#difficultySelect").value = settings.difficulty;
    renderThemeSwatches();
  }
  function renderThemeSwatches() {
    const wrap = $("#themeSwatches");
    wrap.innerHTML = "";
    THEMES.forEach((t) => {
      const el = document.createElement("div");
      el.className = "swatch" + (settings.theme === t ? " active" : "");
      el.title = t;
      el.setAttribute("role", "button");
      el.tabIndex = 0;
      el.setAttribute("aria-label", "Theme " + t);
      const colors = {
        dark: "#0b0c0e",
        light: "#f5f4f1",
        midnight: "#05070f",
        ocean: "#061b1f",
        forest: "#0e130d",
        sunset: "#170d10",
        minimal: "#111111",
      };
      const accents = {
        dark: "#e8b04b",
        light: "#b8791f",
        midnight: "#7c9cff",
        ocean: "#3ecfb2",
        forest: "#9bc53d",
        sunset: "#ff8552",
        minimal: "#ffffff",
      };
      el.style.background = `linear-gradient(135deg, ${colors[t]} 55%, ${accents[t]} 55%)`;
      el.addEventListener("click", () => {
        settings.theme = t;
        saveAll();
        applySettings();
      });
      wrap.appendChild(el);
    });
  }
  $("#fontSelect").addEventListener("change", (e) => {
    settings.font = e.target.value;
    saveAll();
    applySettings();
  });
  $("#fontSizeSelect").addEventListener("change", (e) => {
    settings.fontSize = e.target.value;
    saveAll();
    applySettings();
  });
  $("#defModeSelect").addEventListener("change", (e) => {
    settings.defaultMode = e.target.value;
    saveAll();
  });
  $("#soundToggle").addEventListener("change", (e) => {
    settings.sound = e.target.checked;
    saveAll();
  });
  $("#caretToggle").addEventListener("change", (e) => {
    settings.caret = e.target.checked;
    saveAll();
    applySettings();
  });
  $("#liveWpmToggle").addEventListener("change", (e) => {
    settings.liveWpm = e.target.checked;
    saveAll();
  });
  $("#liveAccToggle").addEventListener("change", (e) => {
    settings.liveAcc = e.target.checked;
    saveAll();
  });
  $("#resetDataBtn").addEventListener("click", () => {
    if (
      confirm(
        "Clear all local Keystride data? This removes history, bests, leaderboard entries and settings on this device.",
      )
    ) {
      localStorage.clear();
      location.reload();
    }
  });

  /* ---------------------------------------------------------
         SOUND (WebAudio, tiny beeps)
      --------------------------------------------------------- */
  let actx;
  function beep(freq, dur) {
    if (!settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator();
      const g = actx.createGain();
      o.frequency.value = freq;
      o.type = "sine";
      g.gain.setValueAtTime(0.06, actx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
      o.connect(g);
      g.connect(actx.destination);
      o.start();
      o.stop(actx.currentTime + dur);
    } catch (e) {}
  }

  /* ---------------------------------------------------------
         TEST CONFIG
      --------------------------------------------------------- */
  let config = {
    mode: settings.defaultMode || "time",
    time: 30,
    wordCount: 25,
    quoteLen: "medium",
    customText: "",
  };

  const PARAMS = {
    time: [15, 30, 60, 120, 300, 600],
    words: [10, 25, 50, 100],
    quote: ["short", "medium", "long"],
    numbers: [10, 25, 50, 100],
    code: [10, 25, 50, 100],
    zen: [],
    custom: [],
  };
  function formatDuration(v) {
    return v >= 60 ? Math.round(v / 60) + "m" : v + "s";
  }
  function formatClock(totalSeconds) {
    totalSeconds = Math.max(0, Math.round(totalSeconds));
    if (totalSeconds < 60) return totalSeconds + "s";
    const m = Math.floor(totalSeconds / 60),
      s = totalSeconds % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function renderParamGroup() {
    const g = $("#paramGroup");
    g.innerHTML = "";
    if (config.mode === "custom") {
      const btn = document.createElement("button");
      btn.textContent = "Edit text";
      btn.className = "active";
      btn.addEventListener("click", openCustomModal);
      g.appendChild(btn);
      return;
    }
    if (config.mode === "zen") {
      const span = document.createElement("span");
      span.style.cssText =
        "padding:6px 11px; color:var(--muted); font-size:13.5px;";
      span.textContent = "Type freely — press Esc when done";
      g.appendChild(span);
      return;
    }
    PARAMS[config.mode].forEach((v) => {
      const btn = document.createElement("button");
      btn.textContent =
        config.mode === "time"
          ? formatDuration(v)
          : config.mode === "quote"
            ? v.charAt(0).toUpperCase() + v.slice(1)
            : v;
      const cur =
        config.mode === "time"
          ? config.time
          : config.mode === "words" ||
              config.mode === "numbers" ||
              config.mode === "code"
            ? config.wordCount
            : config.quoteLen;
      if (cur === v) btn.classList.add("active");
      btn.addEventListener("click", () => {
        if (config.mode === "time") config.time = v;
        else if (
          config.mode === "words" ||
          config.mode === "numbers" ||
          config.mode === "code"
        )
          config.wordCount = v;
        else if (config.mode === "quote") config.quoteLen = v;
        renderParamGroup();
        resetTest();
      });
      g.appendChild(btn);
    });
  }
  $("#modeGroup").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-mode]");
    if (!b) return;
    $$("#modeGroup button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    config.mode = b.dataset.mode;
    if (config.mode === "custom") openCustomModal();
    renderParamGroup();
    resetTest();
  });
  $("#punctToggle").addEventListener("change", (e) => {
    settings.punctuation = e.target.checked;
    $("#punctPill").classList.toggle("on", e.target.checked);
    saveAll();
    resetTest();
  });
  $("#numToggle").addEventListener("change", (e) => {
    settings.numbers = e.target.checked;
    $("#numPill").classList.toggle("on", e.target.checked);
    saveAll();
    resetTest();
  });
  $("#difficultySelect").addEventListener("change", (e) => {
    settings.difficulty = e.target.value;
    saveAll();
    resetTest();
  });

  /* Custom text modal */
  const customModal = $("#customModal");
  function openCustomModal() {
    $("#customText").value = config.customText;
    customModal.classList.add("show");
    $("#customText").focus();
  }
  $("#customCancel").addEventListener("click", () => {
    customModal.classList.remove("show");
    if (!config.customText) {
      config.mode = "time";
      $$("#modeGroup button").forEach((x) =>
        x.classList.toggle("active", x.dataset.mode === "time"),
      );
      renderParamGroup();
    }
  });
  $("#customApply").addEventListener("click", () => {
    const txt = $("#customText").value.trim();
    if (!txt) {
      toast("Enter some text first");
      return;
    }
    config.customText = txt;
    customModal.classList.remove("show");
    resetTest();
  });

  /* ---------------------------------------------------------
         WORD / TEXT GENERATION
      --------------------------------------------------------- */
  function pickPool() {
    return settings.difficulty === "easy"
      ? WORDS_EASY
      : settings.difficulty === "hard"
        ? WORDS_HARD
        : WORDS_MEDIUM;
  }
  function genWords(n) {
    const pool = pickPool();
    let out = [];
    let last = null;
    for (let i = 0; i < n; i++) {
      let w;
      do {
        w = pool[Math.floor(Math.random() * pool.length)];
      } while (w === last && pool.length > 1);
      last = w;
      if (settings.numbers && Math.random() < 0.12) {
        w = String(Math.floor(Math.random() * 9000) + 10);
      }
      out.push(w);
    }
    if (settings.punctuation) {
      out = out.map((w, i) => {
        if (i > 0 && i % 7 === 0 && Math.random() < 0.6) {
          w = w + PUNCT_MARKS[Math.floor(Math.random() * PUNCT_MARKS.length)];
        }
        return w;
      });
      // capitalize after sentence-ending punctuation and first word
      let capNext = true;
      out = out.map((w) => {
        if (capNext) {
          w = maybeCapitalize(w);
          capNext = false;
        }
        if (/[.!?]$/.test(w)) capNext = true;
        return w;
      });
      if (!/[.!?]$/.test(out[out.length - 1])) out[out.length - 1] += ".";
    }
    return out.join(" ");
  }
  function genNumbers(n) {
    const out = [];
    for (let i = 0; i < n; i++) {
      const r = Math.random();
      if (r < 0.15) {
        out.push(
          String(Math.floor(Math.random() * 90) + 10) +
            "-" +
            String(Math.floor(Math.random() * 90) + 10),
        );
      } else if (r < 0.3) {
        out.push((Math.floor(Math.random() * 900) / 100).toFixed(2));
      } else {
        out.push(String(Math.floor(Math.random() * 9000) + 10));
      }
    }
    return out.join(" ");
  }
  function genCode(n) {
    const out = [];
    let last = null;
    for (let i = 0; i < n; i++) {
      let t;
      do {
        t = CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)];
      } while (t === last && CODE_TOKENS.length > 1);
      last = t;
      out.push(t);
    }
    return out.join(" ");
  }
  function buildText() {
    if (config.mode === "time")
      return genWords(Math.max(60, Math.ceil((config.time / 60) * 130) + 20));
    if (config.mode === "words") return genWords(config.wordCount);
    if (config.mode === "quote") {
      const arr = QUOTES[config.quoteLen];
      return arr[Math.floor(Math.random() * arr.length)];
    }
    if (config.mode === "numbers") return genNumbers(config.wordCount);
    if (config.mode === "code") return genCode(config.wordCount);
    if (config.mode === "zen") return genWords(300);
    if (config.mode === "custom") return config.customText || genWords(25);
    return genWords(30);
  }

  /* ---------------------------------------------------------
         TYPING ENGINE
      --------------------------------------------------------- */
  let targetText = "";
  let typedChars = []; // per-char: 'correct' | 'incorrect' (index-aligned to targetText, only up to typed length)
  let testState = "idle"; // idle | running | finished
  let startTime = null;
  let tickHandle = null;
  let elapsedMs = 0;
  let mistakesCount = 0;
  let backspaceCount = 0;
  let wpmSamples = []; // {t, wpm, acc}
  let correctCount = 0,
    incorrectCount = 0;

  const wordsEl = $("#wordsEl");
  const wordsWrap = $("#wordsWrap");
  const hiddenInput = $("#hiddenInput");
  const timerDisplay = $("#timerDisplay");
  const liveStatsEl = $("#liveStats");

  function renderTargetText() {
    wordsEl.innerHTML = "";
    const frag = document.createDocumentFragment();
    for (let i = 0; i < targetText.length; i++) {
      const span = document.createElement("span");
      span.className = "ch pending";
      span.textContent = targetText[i];
      span.dataset.i = i;
      frag.appendChild(span);
    }
    wordsEl.appendChild(frag);
    updateCaretPosition(0);
  }
  function updateCaretPosition(idx) {
    $$(".ch.cur").forEach((el) => el.classList.remove("cur"));
    const spans = wordsEl.children;
    const caret = spans[idx];
    if (caret) {
      caret.classList.add("cur");
      ensureCaretVisible(caret);
    }
  }

  /*
   * Keep the current typing line visible without scrolling the whole page.
   * The scroll happens only inside .words-wrap. As soon as the caret moves
   * to a new visual line, that line is snapped to the top of the visible
   * area (minus a small padding), so the words the user is about to type
   * are always the ones on screen.
   */
  let lastCaretLine = -1;

  function getLineHeight() {
    const style = getComputedStyle(wordsEl);
    let lh = parseFloat(style.lineHeight);
    if (!lh || Number.isNaN(lh)) {
      // 'normal' or unresolved line-height: fall back to the CSS ratio (1.7x font-size)
      const fs = parseFloat(style.fontSize) || 26;
      lh = fs * 1.7;
    }
    return lh;
  }

  function ensureCaretVisible(caret, force) {
    if (!caret || !wordsWrap) return;

    const wrapRect = wordsWrap.getBoundingClientRect();
    // Wrap isn't laid out yet (e.g. view not visible) — nothing to scroll.
    if (wrapRect.height === 0) return;

    const caretRect = caret.getBoundingClientRect();
    const lineHeight = getLineHeight();

    // Calculate the actual visual line from the caret's screen position.
    // This avoids offsetTop errors with inline character spans and wrapped text.
    const relativeTop = caretRect.top - wrapRect.top + wordsWrap.scrollTop;
    const visualLine = Math.round(relativeTop / lineHeight);

    // Only move the internal scroll when the caret enters a different visual
    // line (or when forced, e.g. right after a resize / view change).
    if (!force && visualLine === lastCaretLine) return;
    lastCaretLine = visualLine;

    const topPad = lineHeight * 0.5;
    const currentScroll = wordsWrap.scrollTop;
    const maxScroll = Math.max(
      0,
      wordsWrap.scrollHeight - wordsWrap.clientHeight,
    );

    // Line's own scroll position within the full text block.
    const lineTop = visualLine * lineHeight;
    let targetScroll = currentScroll;

    if (lineTop - topPad < currentScroll) {
      // Caret's line is above the visible area (or too close to the top edge).
      targetScroll = Math.max(0, lineTop - topPad);
    } else if (
      lineTop + lineHeight >
      currentScroll + wrapRect.height - topPad
    ) {
      // Caret's line is below the visible area — bring it to the top instead
      // of only nudging, so the next lines are immediately visible too.
      targetScroll = Math.max(0, lineTop - topPad);
    }

    targetScroll = Math.min(targetScroll, maxScroll);

    // IMPORTANT: direct scrolling only. No smooth animation, so there is no
    // queued up/down animation fighting with the next keystroke.
    if (Math.abs(targetScroll - currentScroll) > 0.5) {
      wordsWrap.scrollTop = targetScroll;
    }
  }

  function resetTest() {
    testState = "idle";
    targetText = buildText();
    typedChars = [];
    hiddenInput.value = "";
    processInput._lastLen = 0;
    elapsedMs = 0;
    mistakesCount = 0;
    backspaceCount = 0;
    correctCount = 0;
    incorrectCount = 0;
    wpmSamples = [];
    clearInterval(tickHandle);
    tickHandle = null;
    renderTargetText();
    lastCaretLine = -1;
    wordsWrap.scrollTop = 0;
    liveStatsEl.classList.remove("show");
    timerDisplay.classList.remove("show");
    timerDisplay.textContent =
      config.mode === "time" ? formatClock(config.time) : "0";
    showView("test");
    wordsWrap.classList.add("blurred");
    focusInput();
  }

  function beginTest() {
    if (testState !== "idle") return;
    testState = "running";
    startTime = performance.now();
    wordsWrap.classList.remove("blurred");
    if (settings.liveWpm || settings.liveAcc) liveStatsEl.classList.add("show");
    timerDisplay.classList.add("show");
    tickHandle = setInterval(tick, 100);
  }

  function tick() {
    elapsedMs = performance.now() - startTime;
    const secs = elapsedMs / 1000;
    if (config.mode === "time") {
      const remaining = Math.max(0, config.time - secs);
      timerDisplay.textContent = formatClock(remaining);
      if (remaining <= 0) {
        finishTest();
        return;
      }
    } else {
      timerDisplay.textContent = formatClock(secs);
    }
    // sample every ~1s
    if (Math.floor(secs) > wpmSamples.length) {
      const mins = Math.max(secs / 60, 1 / 600);
      const wpm = Math.round(correctCount / 5 / mins);
      const acc =
        correctCount + incorrectCount > 0
          ? Math.round((correctCount / (correctCount + incorrectCount)) * 100)
          : 100;
      wpmSamples.push({ t: Math.floor(secs), wpm: Math.max(0, wpm), acc });
    }
    if (settings.liveWpm) {
      const mins = Math.max(secs / 60, 1 / 600);
      $("#liveWpm").textContent = Math.max(
        0,
        Math.round(correctCount / 5 / mins),
      );
    }
    if (settings.liveAcc) {
      const tot = correctCount + incorrectCount;
      $("#liveAcc").textContent =
        (tot > 0 ? Math.round((correctCount / tot) * 100) : 100) + "%";
    }
  }

  function processInput() {
    const val = hiddenInput.value;
    if (testState === "idle" && val.length > 0) beginTest();
    if (testState !== "running") return;

    const prevLen = processInput._lastLen || 0;
    if (val.length > prevLen) {
      for (let i = prevLen; i < val.length && i < targetText.length; i++) {
        if (val[i] !== targetText[i]) mistakesCount++;
      }
    }

    // recompute char-by-char
    correctCount = 0;
    incorrectCount = 0;
    const spans = wordsEl.children;
    for (let i = 0; i < targetText.length; i++) {
      const span = spans[i];
      if (i < val.length) {
        const ok = val[i] === targetText[i];
        span.className = "ch " + (ok ? "correct" : "incorrect");
        if (ok) correctCount++;
        else incorrectCount++;
      } else {
        span.className = "ch pending";
      }
    }
    updateCaretPosition(Math.min(val.length, targetText.length));

    const wordsTyped = (val.match(/ /g) || []).length;
    $("#liveWords").textContent = wordsTyped;
    $("#liveMistakes").textContent = mistakesCount;

    if (val.length >= targetText.length) {
      finishTest();
      return;
    }
    if (val.length > prevLen) beep(700, 0.02);
    processInput._lastLen = val.length;
  }

  hiddenInput.addEventListener("input", processInput);
  function handleEscape(e) {
    e.preventDefault();
    if (config.mode === "zen" && testState === "running") {
      finishTest();
    } else {
      resetTest();
    }
  }
  hiddenInput.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") backspaceCount++;
    if (e.key === "Tab") {
      e.preventDefault();
      resetTest();
      focusInput();
    } else if (e.key === "Escape") {
      handleEscape(e);
    } else if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      resetTest();
      focusInput();
    }
  });
  function focusInput() {
    hiddenInput.focus({ preventScroll: true });
  }
  wordsWrap.addEventListener("click", focusInput);
  hiddenInput.addEventListener("focus", () =>
    wordsWrap.classList.remove("blurred"),
  );
  hiddenInput.addEventListener("blur", () => {
    if (testState !== "running") wordsWrap.classList.add("blurred");
  });
  document.addEventListener("keydown", (e) => {
    if (
      views.test.classList.contains("active") &&
      document.activeElement !== hiddenInput &&
      document.activeElement !== $("#aiChatInput") &&
      !$("#aiChatPanel").classList.contains("show")
    ) {
      if (e.key === "Tab") {
        e.preventDefault();
        resetTest();
        focusInput();
        return;
      }
      if (e.key === "Escape") {
        handleEscape(e);
        return;
      }
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        resetTest();
        focusInput();
        return;
      }
      if (e.key.length === 1) focusInput();
    }
  });
  $("#restartBtn").addEventListener("click", () => {
    resetTest();
    focusInput();
  });
  $("#newTestBtn").addEventListener("click", () => {
    resetTest();
    focusInput();
  });

  function finishTest() {
    testState = "finished";
    clearInterval(tickHandle);
    tickHandle = null;
    const secs = Math.max(elapsedMs / 1000, 0.1);
    const mins = secs / 60;
    const totalTyped = correctCount + incorrectCount;
    const missed = Math.max(0, targetText.length - totalTyped);
    const netWpm = Math.round(correctCount / 5 / mins);
    const rawWpm = Math.round(totalTyped / 5 / mins);
    const accuracy =
      totalTyped > 0
        ? Math.round((correctCount / totalTyped) * 1000) / 10
        : 100;
    const consistency = computeConsistency();
    const wordsTyped =
      (hiddenInput.value.match(/ /g) || []).length +
      (hiddenInput.value.trim().length > 0 && !/ $/.test(hiddenInput.value)
        ? 1
        : 0);
    beep(500, 0.08);

    const result = {
      mode: config.mode,
      param:
        config.mode === "time"
          ? config.time
          : config.mode === "words" ||
              config.mode === "numbers" ||
              config.mode === "code"
            ? config.wordCount
            : config.mode === "quote"
              ? config.quoteLen
              : config.mode === "zen"
                ? "zen"
                : "custom",
      wpm: netWpm,
      rawWpm,
      accuracy,
      consistency,
      correct: correctCount,
      incorrect: incorrectCount,
      missed,
      mistakes: mistakesCount,
      wordsTyped,
      duration: Math.round(secs),
      backspaces: backspaceCount,
      date: new Date().toISOString(),
      samples: wpmSamples.slice(),
    };
    history.unshift(result);
    history = history.slice(0, 200);

    const key = config.mode + "-" + result.param;
    const prevBest = personalBests[key];
    const isNewBest = !prevBest || netWpm > prevBest.wpm;
    if (isNewBest)
      personalBests[key] = {
        wpm: netWpm,
        accuracy,
        consistency,
        date: result.date,
      };

    const name = (user && user.username) || "Guest";
    leaderboard.push({
      name,
      wpm: netWpm,
      accuracy,
      mode: config.mode,
      param: result.param,
      key,
      date: result.date,
    });
    leaderboard = leaderboard.sort((a, b) => b.wpm - a.wpm).slice(0, 500);

    saveAll();
    renderResults(result, isNewBest);
    showView("results");
  }

  function computeConsistency() {
    if (wpmSamples.length < 2) return 100;
    const vals = wpmSamples.map((s) => s.wpm).filter((v) => v >= 0);
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    if (mean === 0) return 100;
    const variance =
      vals.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / vals.length;
    const sd = Math.sqrt(variance);
    const cv = sd / mean;
    return Math.max(0, Math.min(100, Math.round((1 - cv) * 100)));
  }

  /* ---------------------------------------------------------
         RESULTS RENDER + GRAPH
      --------------------------------------------------------- */
  function renderResults(r, isNewBest) {
    $("#resWpm").textContent = r.wpm;
    $("#resAcc").textContent = r.accuracy + "%";
    $("#resRaw").textContent = r.rawWpm;
    $("#resCons").textContent = r.consistency + "%";
    $("#resTime").textContent = r.duration + "s";
    $("#resWords").textContent = r.wordsTyped;
    $("#resCorrect").textContent = r.correct;
    $("#resMistakes").textContent = r.mistakes;
    $("#newBestBadge").innerHTML = isNewBest
      ? '<div class="new-best">New personal best</div>'
      : "";
    drawGraph($("#resGraph"), r.samples);
    $("#resShareBtn").onclick = () => shareResult(r);
  }
  $("#resRestartBtn").addEventListener("click", () => {
    resetTest();
    showView("test");
    wordsWrap.focus();
  });
  $("#resNewBtn").addEventListener("click", () => {
    resetTest();
    showView("test");
    wordsWrap.focus();
  });

  function shareResult(r) {
    const text = `I just typed ${r.wpm} WPM with ${r.accuracy}% accuracy on Keystride!`;
    if (navigator.share) {
      navigator.share({ text }).catch(() => copyFallback(text));
      return;
    }
    copyFallback(text);
  }
  function copyFallback(text) {
    if (
      window.isSecureContext &&
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      navigator.clipboard
        .writeText(text)
        .then(() => toast("Copied to clipboard"))
        .catch(() => legacyCopy(text));
    } else {
      legacyCopy(text);
    }
  }
  function legacyCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed; top:0; left:0; opacity:0;";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) {
        toast("Copied to clipboard");
        return;
      }
    } catch (e) {
      /* fall through */
    }
    window.prompt("Copy your result:", text);
  }

  function drawGraph(canvas, samples) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 600,
      h = canvas.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.height = h + "px";
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    if (!samples || samples.length < 2) {
      ctx.fillStyle = getComputedStyle(body).getPropertyValue("--muted");
      ctx.font = "13px Inter";
      ctx.fillText(
        "Not enough data for a graph on this short test.",
        12,
        h / 2,
      );
      return;
    }
    const pad = { l: 34, r: 14, t: 14, b: 24 };
    const maxWpm = Math.max(...samples.map((s) => s.wpm), 10);
    const accent = getComputedStyle(body).getPropertyValue("--accent").trim();
    const muted = getComputedStyle(body).getPropertyValue("--muted").trim();
    const border = getComputedStyle(body).getPropertyValue("--border").trim();

    ctx.strokeStyle = border;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.t + (h - pad.t - pad.b) * (i / 4);
      ctx.beginPath();
      ctx.moveTo(pad.l, y);
      ctx.lineTo(w - pad.r, y);
      ctx.stroke();
      ctx.fillStyle = muted;
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.fillText(Math.round(maxWpm * (1 - i / 4)), 4, y + 3);
    }
    const xstep = (w - pad.l - pad.r) / Math.max(1, samples.length - 1);
    ctx.beginPath();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 2.2;
    ctx.lineJoin = "round";
    samples.forEach((s, i) => {
      const x = pad.l + i * xstep;
      const y = pad.t + (h - pad.t - pad.b) * (1 - s.wpm / maxWpm);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.fillStyle = accent;
    samples.forEach((s, i) => {
      const x = pad.l + i * xstep;
      const y = pad.t + (h - pad.t - pad.b) * (1 - s.wpm / maxWpm);
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, 7);
      ctx.fill();
    });
    ctx.fillStyle = muted;
    ctx.font = "10px Inter";
    ctx.fillText("WPM over time", pad.l, h - 6);
  }

  /* ---------------------------------------------------------
         STATS VIEW
      --------------------------------------------------------- */
  function renderStats() {
    const overview = $("#statsOverview");
    if (history.length === 0) {
      overview.innerHTML = "";
      $("#statsHistory").innerHTML =
        '<div class="empty-state">No tests yet — complete a typing test to see your statistics here.</div>';
      drawGraph($("#statsGraph"), []);
      return;
    }
    const avgWpm = Math.round(
      history.reduce((a, h) => a + h.wpm, 0) / history.length,
    );
    const bestWpm = Math.max(...history.map((h) => h.wpm));
    const avgAcc = Math.round(
      history.reduce((a, h) => a + h.accuracy, 0) / history.length,
    );
    const bestAcc = Math.max(...history.map((h) => h.accuracy));
    const totalTime = history.reduce((a, h) => a + h.duration, 0);
    const cards = [
      ["Tests completed", history.length],
      ["Average WPM", avgWpm],
      ["Best WPM", bestWpm],
      ["Average Accuracy", avgAcc + "%"],
      ["Best Accuracy", bestAcc + "%"],
      ["Total time typed", Math.round(totalTime / 60) + " min"],
    ];
    overview.innerHTML = cards
      .map(
        (c) =>
          `<div class="card"><div class="v">${c[1]}</div><div class="l">${c[0]}</div></div>`,
      )
      .join("");

    const recent = history.slice(0, 30).reverse();
    const samples = recent.map((h, i) => ({
      t: i,
      wpm: h.wpm,
      acc: h.accuracy,
    }));
    drawGraph($("#statsGraph"), samples.length > 1 ? samples : []);

    const rows = history
      .slice(0, 20)
      .map((h) => {
        const d = new Date(h.date);
        return `<tr><td>${d.toLocaleDateString()}</td><td>${h.mode}</td><td>${h.param}${h.mode === "time" ? "s" : ""}</td><td>${h.wpm}</td><td>${h.accuracy}%</td></tr>`;
      })
      .join("");
    $("#statsHistory").innerHTML =
      `<div class="table-scroll"><table class="history"><thead><tr><th>Date</th><th>Mode</th><th>Setting</th><th>WPM</th><th>Accuracy</th></tr></thead><tbody>${rows}</tbody></table></div>`;

    // personal bests block, injected above history if available
    const bestKeys = Object.keys(personalBests);
    if (bestKeys.length) {
      const html =
        '<div class="section-title">Personal Bests</div><div class="grid-cards">' +
        bestKeys
          .map(
            (k) =>
              `<div class="card"><div class="v">${personalBests[k].wpm}</div><div class="l">${k.replace("-", " ")} wpm</div></div>`,
          )
          .join("") +
        "</div>";
      overview.insertAdjacentHTML("afterend", html);
    }
  }

  /* ---------------------------------------------------------
         LEADERBOARD VIEW
      --------------------------------------------------------- */
  let lbFilter = "time-30";
  function renderLeaderboard() {
    const filters = [
      "time-15",
      "time-30",
      "time-60",
      "time-120",
      "words-10",
      "words-25",
      "words-50",
      "words-100",
    ];
    $("#lbFilters").innerHTML = filters
      .map((f) => {
        const label =
          f.replace("time-", "").replace("words-", "") +
          (f.startsWith("time") ? "s" : " words");
        return `<button class="btn ghost lbf" data-f="${f}" style="padding:6px 12px; ${f === lbFilter ? "border-color:var(--accent);color:var(--accent);" : ""}">${label}</button>`;
      })
      .join("");
    $$(".lbf").forEach((b) =>
      b.addEventListener("click", () => {
        lbFilter = b.dataset.f;
        renderLeaderboard();
      }),
    );

    const entries = leaderboard
      .filter((e) => e.key === lbFilter)
      .sort((a, b) => b.wpm - a.wpm)
      .slice(0, 50);
    if (entries.length === 0) {
      $("#lbBody").innerHTML = "";
      $("#lbEmpty").innerHTML =
        '<div class="empty-state">No results yet for this mode. Complete a test to appear on the board.</div>';
      return;
    }
    $("#lbEmpty").innerHTML = "";
    $("#lbBody").innerHTML = entries
      .map((e, i) => {
        const d = new Date(e.date);
        return `<tr><td><span class="rank ${i < 3 ? "top" : ""}">${i + 1}</span></td><td>${e.name}</td><td>${e.wpm}</td><td>${e.accuracy}%</td><td>${e.mode}</td><td>${d.toLocaleDateString()}</td></tr>`;
      })
      .join("");
  }

  /* ---------------------------------------------------------
         AUTH (local-only simulated accounts)
      --------------------------------------------------------- */
  let authMode = "login";
  function renderAuth() {
    const box = $("#authBox");
    if (user) {
      const userTests = history; // in this local model all history belongs to current profile
      const avgWpm = userTests.length
        ? Math.round(
            userTests.reduce((a, h) => a + h.wpm, 0) / userTests.length,
          )
        : 0;
      const bestWpm = userTests.length
        ? Math.max(...userTests.map((h) => h.wpm))
        : 0;
      box.innerHTML = `
      <h2>${user.username}</h2>
      <p style="color:var(--muted); font-size:13px; margin-top:-8px;">Member since ${new Date(user.joined).toLocaleDateString()}</p>
      <div class="grid-cards" style="margin-top:18px;">
        <div class="card"><div class="v">${userTests.length}</div><div class="l">Tests completed</div></div>
        <div class="card"><div class="v">${avgWpm}</div><div class="l">Average WPM</div></div>
        <div class="card"><div class="v">${bestWpm}</div><div class="l">Best WPM</div></div>
      </div>
      <button class="btn ghost" id="logoutBtn" style="width:100%; justify-content:center; margin-top:10px;">Log out</button>
    `;
      $("#logoutBtn").addEventListener("click", () => {
        user = null;
        saveAll();
        renderAuth();
        toast("Logged out");
      });
      return;
    }
    if (authMode === "login") {
      box.innerHTML = `
      <h2>Log in</h2>
      <form id="loginForm">
        <div class="field"><label>Email or username</label><input required id="loginId" placeholder="you@example.com"></div>
        <div class="field"><label>Password</label><input required type="password" id="loginPw" minlength="6" placeholder="••••••••"></div>
        <label class="toggle-pill" style="margin-bottom:12px; display:inline-flex;"><input type="checkbox" id="rememberMe"> Remember me</label>
        <div id="loginMsg"></div>
        <button class="btn primary" type="submit" style="width:100%; justify-content:center;">Log in</button>
      </form>
      <p class="switch-auth">No account? <a id="toRegister">Register</a> &middot; <a id="forgotPw">Forgot password?</a></p>
    `;
      $("#loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const id = $("#loginId").value.trim();
        const stored = LS.get("ks_accounts", {});
        const acct = stored[id.toLowerCase()];
        if (!acct) {
          $("#loginMsg").innerHTML =
            '<div class="form-msg error">No account found for that email/username.</div>';
          return;
        }
        if (acct.password !== $("#loginPw").value) {
          $("#loginMsg").innerHTML =
            '<div class="form-msg error">Incorrect password.</div>';
          return;
        }
        user = {
          username: acct.username,
          email: acct.email,
          joined: acct.joined,
        };
        saveAll();
        renderAuth();
        toast("Welcome back, " + user.username);
      });
      $("#toRegister").addEventListener("click", () => {
        authMode = "register";
        renderAuth();
      });
      $("#forgotPw").addEventListener("click", (e) => {
        e.preventDefault();
        toast(
          "Password reset isn't wired to an email service in this local build.",
        );
      });
    } else {
      box.innerHTML = `
      <h2>Create account</h2>
      <form id="regForm">
        <div class="field"><label>Username</label><input required id="regUser" minlength="3" placeholder="typist99"></div>
        <div class="field"><label>Email</label><input required type="email" id="regEmail" placeholder="you@example.com"></div>
        <div class="field"><label>Password</label><input required type="password" id="regPw" minlength="6" placeholder="At least 6 characters"></div>
        <div class="field"><label>Confirm password</label><input required type="password" id="regPw2" placeholder="Repeat password"></div>
        <div id="regMsg"></div>
        <button class="btn primary" type="submit" style="width:100%; justify-content:center;">Register</button>
      </form>
      <p class="switch-auth">Already have an account? <a id="toLogin">Log in</a></p>
    `;
      $("#regForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const uname = $("#regUser").value.trim();
        const email = $("#regEmail").value.trim().toLowerCase();
        const pw = $("#regPw").value,
          pw2 = $("#regPw2").value;
        const accounts = LS.get("ks_accounts", {});
        if (pw !== pw2) {
          $("#regMsg").innerHTML =
            '<div class="form-msg error">Passwords do not match.</div>';
          return;
        }
        if (accounts[email] || accounts[uname.toLowerCase()]) {
          $("#regMsg").innerHTML =
            '<div class="form-msg error">That username or email is already registered.</div>';
          return;
        }
        const acct = {
          username: uname,
          email,
          password: pw,
          joined: new Date().toISOString(),
        };
        accounts[email.toLowerCase()] = acct;
        accounts[uname.toLowerCase()] = acct;
        LS.set("ks_accounts", accounts);
        user = { username: uname, email, joined: acct.joined };
        saveAll();
        renderAuth();
        toast("Account created — welcome, " + uname);
      });
      $("#toLogin").addEventListener("click", () => {
        authMode = "login";
        renderAuth();
      });
    }
  }

  /* ---------------------------------------------------------
          OFFLINE TYPING COACH (chat)
          Fully local knowledge engine � no network, no AI API.
          Matches user questions against a typed-topic knowledge
          base using keyword scoring, then returns the best-matching
          answer. Falls back to a curated fallback list.
       --------------------------------------------------------- */
  var TYPING_KNOWLEDGE = [
    {
      topic: "home row finger placement",
      keywords: ["home row", "finger placement", "where to put fingers", "hand position", "basic finger position", "starting position", "home keys"],
      answer: "Place your left hand on A, S, D, F and your right hand on J, K, L, semicolon. Your index fingers rest on F and J � those keys usually have small raised bumps to help you find them without looking. Your pinkies rest on A and semicolon. Thumbs hover over the spacebar. This is the home row: every finger returns here after each keystroke."
    },
    {
      topic: "touch typing",
      keywords: ["touch type", "touch typing", "how to touch type", "learn touch typing", "touch typing method", "typed without looking"],
      answer: "Touch typing means typing without looking at the keyboard. You memorize where each key is and use the correct finger for each key. Start with the home row, practice each finger's territory, and gradually increase speed. Never look down at the keyboard while typing � your eyes should stay on the screen or text."
    },
    {
      topic: "how to type faster",
      keywords: ["type faster", "increase speed", "speed up", "faster typing", "improve wpm", "how to go faster", "boost speed", "typing faster"],
      answer: "To type faster: use all ten fingers, never look at the keyboard, keep a steady rhythm, and practice daily for 15-20 minutes. Focus on accuracy first � speed follows naturally. Use common letter pairs and words as practice material, not random characters. Try decreasing the difficulty setting slightly so you can focus on flow, then raise it as you improve."
    },
    {
      topic: "improve accuracy",
      keywords: ["accuracy", "improve accuracy", "make fewer mistakes", "reduce errors", "more accurate", "typing accurately", "less mistakes"],
      answer: "To improve accuracy: slow down slightly and focus on hitting the right key, use proper finger assignments (each finger has specific keys), and never rush. Turn on punctuation in settings to practice real-world text. If you keep making the same mistake on one key, that key's assigned finger may be wrong � check a finger chart and retrain that key slowly."
    },
    {
      topic: "posture",
      keywords: ["posture", "sit", "back pain", "neck pain", "shoulder", "body position", "ergonomics", "comfortable position", "how to sit"],
      answer: "Sit up straight with your feet flat on the floor. Keep your elbows at about 90 degrees and your forearms parallel to the desk. The monitor should be at eye level about an arm's length away. Keep your wrists straight or slightly lowered � never bent upward. Take a break every 30 minutes to stand and stretch."
    },
    {
      topic: "RSI",
      keywords: ["rsi", "repetitive strain", "carpal tunnel", "wrist pain", "hand pain", "injury", "pain", "sore", "strain"],
      answer: "Repetitive Strain Injury comes from prolonged, repeated motions. To prevent it: take a 5-minute break every 25-30 minutes, stretch your fingers and wrists, keep wrists neutral, use a wrist rest for support (not while typing), and reduce force � press keys gently. If pain persists, see a doctor. The 20-20-20 rule helps too: every 20 minutes, look at something 20 feet away for 20 seconds."
    },
    {
      topic: "keyboard types",
      keywords: ["keyboard", "mechanical", "membrane", "switch", "key feel", "keyboard type", "best keyboard", "key press", "clicky", "quiet keyboard"],
      answer: "Keyboards fall into two main types: Mechanical (each key has a dedicated switch � Cherry MX Red for light presses, Blue for clicky feedback, Brown for a balanced feel) and Membrane (dome-shaped contacts under each key � quieter and cheaper). Mechanical keyboards last longer and feel more precise, while membrane keyboards are lighter and more affordable. For typing practice, any keyboard works � start with what you have."
    },
    {
      topic: "WPM explained",
      keywords: ["wpm", "words per minute", "how wpm is calculated", "what is wpm", "wpm formula", "net wpm", "typing speed"],
      answer: "WPM (Words Per Minute) = (correct characters / 5) / minutes elapsed. The 5 comes from the average English word length. Net WPM subtracts errors; Raw WPM counts all keystrokes. A typical beginner types 20-30 WPM, an intermediate typer 40-60 WPM, and professionals often exceed 80-100 WPM. World records exceed 200 WPM."
    },
    {
      topic: "accuracy explained",
      keywords: ["accuracy", "accuracy percentage", "how accuracy is calculated", "accuracy formula", "what is accuracy"],
      answer: "Accuracy = (correct characters / total characters typed) x 100. Perfect accuracy is 100%. Most typists aim for 95-99%. If your accuracy is below 90%, slow down and focus on correct fingering rather than speed. The app shows accuracy in real time so you can track it."
    },
    {
      topic: "warm up",
      keywords: ["warm up", "warmup", "warm up fingers", "before typing", "prepare", "how to warm up", "fingers exercise", "stretching"],
      answer: "Warm up before typing: spread and stretch your fingers for 10 seconds, make slow fists and release, rotate your wrists, and type the home row slowly 5-10 times. Then try short 15-second bursts of increasing speed. This primes your muscles and improves early-test accuracy."
    },
    {
      topic: "practice routine",
      keywords: ["practice", "routine", "how to practice", "drill", "daily practice", "training", "exercise", "how to improve"],
      answer: "A good practice routine: 5 minutes warm-up, 10 minutes focused typing (choose a mode that matches your level, aiming for accuracy over speed), 5 minutes on problem keys (any key you keep hitting incorrectly). Practice 15-20 minutes daily. Track progress via Statistics � look for steady WPM improvement over weeks."
    },
    {
      topic: "problem keys",
      keywords: ["problem keys", "hard keys", "troublesome", "weak fingers", "which fingers", "finger weakness", "stumbling", "stuck on a key"],
      answer: "Identify keys you mistype often � these are your problem keys. Common ones are the left pinky (Tab, Caps Lock, Shift, A), right pinky (Enter, Shift, semicolon), and the ring fingers. Practice them in isolation by typing just that key repeatedly, then in common letter combinations that use it."
    },
    {
      topic: "shift keys",
      keywords: ["shift", "capital", "uppercase", "capital letter", "shift key", "how to use shift", "holding shift"],
      answer: "Use the opposite-hand pinky for Shift: left Shift is pressed by the left pinky, right Shift by the right pinky. Avoid reaching across your body for the far Shift key. If you often mistype capitals, practice common uppercase words (I, A, S, D, F words). Some typists prefer right Shift for all capitals because the reach is shorter."
    },
    {
      topic: "typing history",
      keywords: ["history of typing", "typing history", "typewriter", "who invented", "when typing started", "origin", "first keyboard", "first typewriter"],
      answer: "The first typewriter patent was filed in 1868 by Christopher Latham Sholes. The QWERTY layout was designed in 1873 to prevent mechanical jamming � it separated common letter pairs. Touch typing was developed in the 1880s. The Dvorak layout (1936) aimed to be more efficient but QWERTY remained dominant due to market inertia."
    },
    {
      topic: "QWERTY",
      keywords: ["qwerty", "dvorak", "keyboard layout", "layout", "layout difference", "alternate layout", "best layout"],
      answer: "QWERTY is the standard keyboard layout, designed to prevent typewriter jams. Dvorak is an alternative optimized for speed � common letters fall on the home row and alternate hands. Colemak is a newer alternative that keeps QWERTY's shortcuts while improving flow. Switching requires retraining but can yield 10-20% speed gains for dedicated typists."
    },
    {
      topic: "world record",
      keywords: ["world record", "fastest typer", "record", "guinness", "fastest", "top speed"],
      answer: "The fastest typing speed recorded on standard tests is around 212-216 WPM. Stella Pajunas set an early record at 216 WPM in 1946. On modern computers, typists regularly surpass 170-180 WPM in competition. World records can change � they depend on the test method and keyboard used."
    },
    {
      topic: "common mistakes",
      keywords: ["mistakes", "common mistakes", "errors", "wrong keys", "hunting and pecking", "look at keyboard", "bad habits"],
      answer: "Common typing mistakes: looking at the keyboard, using wrong fingers for keys, pressing too hard, not using all fingers, and poor posture. The biggest one is hunting and pecking (typing two or two keys at a time). Break this by learning proper finger placement and practicing slowly until correct habits become automatic."
    },
    {
      topic: "breathing",
      keywords: ["breathing", "breathe", "breath", "oxygen", "focus", "concentration"],
      answer: "Breathe steadily while typing � many beginners hold their breath during intense typing, which causes tension and fatigue. Keep a natural breathing rhythm. If you feel tense, take a deep breath, exhale slowly, and consciously relax your shoulders and hands."
    },
    {
      topic: "numbers typing",
      keywords: ["numbers", "number row", "typing numbers", "number pad", "numpad", "numeric entry"],
      answer: "For the number row (top of keyboard): use the same fingers that type the home row keys above them (e.g., right index types 6 and 7, right middle types 8). For large-scale number entry, a numpad (10-key) is faster � most typists reach 80-120 WPM on a dedicated numpad. Practice the Numbers mode in this app."
    },
    {
      topic: "code typing",
      keywords: ["code", "programming", "coding", "symbols", "symbols typing", "brackets", "semicolons", "special characters"],
      answer: "Coding requires frequent symbol use � brackets, semicolons, operators. Touch typing for code means keeping your right pinky on semicolon/colon, using both hands for brackets, and practicing common patterns like (), {}, [], ->, and =>. The Code mode in this app drills exactly these symbols."
    },
    {
      topic: "shortcuts",
      keywords: ["shortcut", "keyboard shortcut", "tab", "escape", "ctrl", "key shortcut", "hotkey"],
      answer: "In this app: Tab restarts the test, Escape stops/resets, Ctrl+Enter starts a new test. In general computing: Ctrl+C/V/Z/X are universal, Ctrl+A selects all, Ctrl+F finds, Alt+Tab switches windows, and Windows+D shows desktop."
    },
    {
      topic: "typing styles",
      keywords: ["hunt and peck", "hunting", "pecking", "two finger", "two-finger", "hybrid", "style", "typing method"],
      answer: "Hunt-and-peck uses two fingers and looks at the keyboard � slow and tiring. Two-finger typing is a step up but still inefficient. Hybrid typing mixes both approaches. True touch typing uses all ten fingers without looking. The switch is worth it: touch typists are typically 2-3 times faster and far less fatigued."
    },
    {
      topic: "left hand fingers",
      keywords: ["left hand", "left fingers", "left pinky", "left ring", "left middle", "left index", "pinky", "which finger"],
      answer: "Left hand fingers: pinky = Q, A, Z, 1; ring = W, S, X, 2; middle = E, D, C, 3; index = R, F, V, T, G, B, 4, 5. Your left index also covers 4 and 5 on the number row. Strong left-hand fingers come from regular practice since the left hand does more work in English typing."
    },
    {
      topic: "right hand fingers",
      keywords: ["right hand", "right fingers", "right pinky", "right ring", "right middle", "right index", "right hand keys"],
      answer: "Right hand fingers: pinky = P, semicolon, slash, period, 0, dash, equals; ring = O, L, K, 9; middle = I, comma, 8; index = U, H, N, Y, J, M, 6, 7. Right pinky is the busiest � pressing Enter, Shift, and many punctuation keys."
    },
    {
      topic: "quote test",
      keywords: ["quote", "quote mode", "typing quotes", "practice quotes", "meaningful text", "sentences"],
      answer: "Quote mode gives you real quotes to type. It helps practice punctuation, capitalization, and sentence flow � more realistic than random words. It's great for building accuracy because each word matters to the sentence's meaning."
    },
    {
      topic: "zen mode",
      keywords: ["zen", "zen mode", "free type", "no timer", "relaxed", "practice freely", "no pressure"],
      answer: "Zen mode has no timer, targets, or scoring � you type freely to build muscle memory without pressure. Great for warm-ups, relaxation, or when you want to practice without the stress of the clock. Press Escape to finish and see your stats."
    },
    {
      topic: "custom text",
      keywords: ["custom", "custom text", "paste text", "my own text", "practice specific", "specific words", "words practice"],
      answer: "Custom mode lets you paste any text to practice. Click the Custom mode button, paste your text, and use it. Great for practicing specific vocabulary like medical terms, legal words, or code."
    },
    {
      topic: "difficulty levels",
      keywords: ["difficulty", "easy", "medium", "hard", "hard words", "difficult words", "word difficulty", "level"],
      answer: "Difficulty levels affect the word list: Easy uses common short words (3-5 letters), Medium uses everyday longer words (5-8 letters), Hard uses complex multi-syllable words (9+ letters). Beginners should start at Easy/Medium and work up. Hard mode is great for competition practice."
    },
    {
      topic: "punctuation",
      keywords: ["punctuation", "period", "comma", "full stop", "period key", "comma key", "symbol keys", "toggle punctuation"],
      answer: "Punctuation is off by default to avoid frustration for beginners. Turn it on when you're comfortable with the home row � it adds periods, commas, question marks, etc. every few words, with correct capitalization after sentences. Toggle it from the Punctuation pill on the test config bar."
    },
    {
      topic: "numbers toggle",
      keywords: ["numbers toggle", "numbers on", "include numbers", "number key", "toggle numbers"],
      answer: "The Numbers toggle injects random numbers into the word text. It's a separate practice layer � good for building familiarity with the number row. Toggle it from the Numbers pill next to Punctuation."
    },
    {
      topic: "settings",
      keywords: ["settings", "theme", "font", "font size", "sound", "caret", "live wpm", "live accuracy", "change setting"],
      answer: "Settings are under the Settings tab: choose theme (dark/light/midnight/ocean/forest/sunset/minimal), font (JetBrains Mono, Fira Code, Roboto Mono, Courier Prime, System Mono), font size, sound effects, smooth caret, live WPM/accuracy display, and default test mode."
    },
    {
      topic: "statistics",
      keywords: ["statistics", "stats", "history", "personal best", "past tests", "previous results", "how many tests", "track record", "wpm history"],
      answer: "The Statistics tab shows your overview (tests completed, average/best WPM and accuracy, total time), a WPM history graph, recent tests table, and personal bests by mode. All data is stored locally in your browser � nothing leaves your device."
    },
    {
      topic: "leaderboard",
      keywords: ["leaderboard", "rank", "ranking", "score", "high score", "compare", "best scores"],
      answer: "The Leaderboard shows the top 50 results for each mode/time setting. It's stored locally on your device (guest mode) � no server is needed. Filter by 15s/30s/60s/120s or word count modes."
    },
    {
      topic: "consistency",
      keywords: ["consistency", "steady", "inconsistent", "fluctuate", "wpm variation", "bad consistency"],
      answer: "Consistency measures how steady your WPM was during the test (100% = perfectly even pace). High consistency means you maintained speed throughout; low consistency usually means you started fast and faded, or had bursts with pauses. Build consistency by practicing at a sustainable pace."
    },
    {
      topic: "keyboard cleaning",
      keywords: ["clean", "keyboard cleaning", "dust", "debris", "stuck key", "key not working", "maintenance"],
      answer: "To clean your keyboard: turn it upside down and gently shake, use compressed air between keys, wipe surfaces with a microfiber cloth slightly dampened with isopropyl alcohol. For mechanical keyboards, keycaps can be removed with a puller for deep cleaning. Clean monthly for best performance."
    },
    {
      topic: "typing for kids",
      keywords: ["kids", "children", "child", "teach", "learn typing", "kids typing", "beginner child"],
      answer: "For kids: start with short 10-minute sessions, use Easy difficulty, make it fun with game-like goals, and celebrate milestones. Use programs designed for their age. Most children can learn touch typing basics within a few weeks of regular practice."
    },
    {
      topic: "typing for programming",
      keywords: ["programming", "coding", "developer", "software", "code typing", "developer typing"],
      answer: "Programmers benefit from code typing mode, which drills common symbols and keywords. Set Custom mode to paste code you write often. Aim for 70-90 WPM with 95%+ accuracy for productive coding. Touch typing frees your eyes for logic instead of hunting keys."
    },
    {
      topic: "right shift",
      keywords: ["right shift", "right shift key", "enter hand", "which shift", "use right shift"],
      answer: "The right Shift key is generally preferred by touch typists because your right pinky is already positioned near Enter, semicolon, and other right-side keys. Using right Shift reduces the stretch compared to the left Shift key."
    },
    {
      topic: "backspace",
      keywords: ["backspace", "backspace key", "correct mistake", "undo key", "how to correct"],
      answer: "The backspace key is one of the most-used keys � even touch typists use it constantly. In this app, backspace count is tracked. Too many backspaces usually mean slow key recognition or wrong finger placement. Focus on accuracy over speed and the backspace count will drop."
    },
    {
      topic: "typing with music",
      keywords: ["music", "background", "background music", "sound", "with music", "listen to music"],
      answer: "Some typists find background music helpful for focus, but avoid lyrics � they compete with the words on screen. Instrumental music, lo-fi beats, or ambient sounds work well. In this app, turn on sound effects in Settings for typing feedback."
    },
    {
      topic: "typing speed chart",
      keywords: ["speed chart", "wpm level", "beginner", "intermediate", "advanced", "professional", "slow", "fast", "what is good wpm", "average wpm"],
      answer: "Typing speed ranges: Below 20 WPM = beginner, 20-40 WPM = novice, 40-60 WPM = intermediate, 60-80 WPM = advanced, 80-100 WPM = professional, above 100 WPM = expert. World-class typists exceed 150 WPM. Average office worker types around 40-50 WPM."
    },

    {
      topic: "Wazmi Ali",
      keywords: ["wazmi", "wazmi ali", "who is wazmi", "creator", "about the app", "who made", "what is typingwazmi", "what is keystride", "Owner of TypingWazmi", "Owner of KeyStride"],
      answer: "Wazmi Ali is a passionate Artificial Intelligence and Machine Learning student with a strong interest in full-stack development, cloud technologies, and practical software engineering. With a background in B.Tech in Artificial Intelligence & Machine Learning and a Diploma in Computer Science & Engineering, Wazmi has developed a diverse technical skill set spanning web development, data processing, machine learning, and API development. Through hands-on projects such as the Heart Disease Prediction System and responsive web applications, Wazmi demonstrates a strong commitment to continuous learning and applying modern technologies to solve real-world problems. Wazmi Ali is the owner of TypingWazmi and KeyStride."
    },


    {
      topic: "privacy",
      keywords: ["privacy", "private", "data", "safe", "where is data stored", "local storage", "who sees my data", "is data shared"],
      answer: "Privacy: nothing you type or any of your statistics leaves this browser. Everything is stored locally in your browser's local storage on this device only. No server, no cloud, no account required. Use the Clear all local data button in Settings if you want to reset everything."
    },
    {
      topic: "thank you",
      keywords: ["thank", "thanks", "great", "love", "good", "appreciate", "awesome", "nice"],
      answer: "Happy typing! If you have questions about technique, the app, or anything typing-related, just ask � everything I know about typing is stored right here in this chat and works fully offline."
    },
    {
      topic: "greeting",
      keywords: ["hello", "hi", "hey", "how are you", "what's up", "greetings", "good morning", "good afternoon", "good evening"],
      answer: "Hey! I'm your typing coach. Ask me about typing techniques, how to improve speed, keyboard posture, WPM calculation, or anything typing-related. I'm fully offline and always ready to help."
    },
    {
      topic: "what can you do",
      keywords: ["what can you", "what do you", "help me", "what help", "can you", "capabilities", "who you", "how can you help"],
      answer: "I'm your offline typing coach. I can help with: typing technique, finger placement, improving speed and accuracy, posture tips, keyboard advice, understanding WPM/accuracy, practice routines, typing history and records, and explaining this app's features. Ask me anything about typing!"
    },
    {
      topic: "goodbye",
      keywords: ["bye", "goodbye", "see you", "farewell", "later", "good night", "done", "finished", "thank you"],
      answer: "Happy typing! Remember to sit straight, use all ten fingers, and keep your eyes on the screen. Ask me anything next time you need typing tips!"
    },
  ];

  function findBestAnswer(question) {
    var q = question.toLowerCase().trim();
    var tokens = q.split(/[^a-z0-9]+/).filter(function(w) { return w.length > 1; });

    var scoredTopics = TYPING_KNOWLEDGE.map(function(entry) {
      var score = 0;
      entry.keywords.forEach(function(kw) {
        if (q.indexOf(kw) >= 0) {
          score += kw.split(/[^a-z0-9]+/).filter(function(w) { return w.length > 1; }).length;
        }
      });
      tokens.forEach(function(tok) {
        entry.keywords.forEach(function(kw) {
          if (kw.indexOf(tok) >= 0) {
            score += 0.5;
          }
        });
      });
      return { entry: entry, score: score };
    });

    scoredTopics.sort(function(a, b) { return b.score - a.score; });
    if (scoredTopics[0] && scoredTopics[0].score > 0) {
      return scoredTopics[0].entry;
    }
    return null;
  }

  var FALLBACK_REPLIES = [
    "I'm not sure I understand. Try asking about typing techniques, how to improve speed, posture, keyboard advice, WPM, accuracy, or anything typing-related. I work fully offline right here.",
    "Good question � I don't have that covered yet. Try asking about finger placement, typing speed, accuracy, posture, or warm-ups. I know a lot about typing!",
    "I'm a typing coach, not a general knowledge bot. Try asking me something like 'how do I type faster?' or 'what is proper posture?' and I'll give you a detailed answer.",
    "I couldn't match that to a typing topic. Ask me about: typing technique, speed tips, accuracy, posture, keyboards, WPM, or practice routines.",
  ];

  function initAIChat() {
    var fab = $("#aiFabBtn");
    var panel = $("#aiChatPanel");
    var closeBtn = $("#aiChatClose");
    var messagesEl = $("#aiChatMessages");
    var form = $("#aiChatForm");
    var input = $("#aiChatInput");
    var sendBtn = form.querySelector("button");
    var note = $("#aiChatNote");
    var suggestions = $("#aiChatSuggestions");
    if (!fab || !panel || !form) return;

    note.textContent = "Fully offline typing coach - no internet needed.";

    function addMessage(role, text) {
      var div = document.createElement("div");
      div.className = "ai-msg " + role;
      div.textContent = text;
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return div;
    }

    function openPanel() {
      panel.classList.add("show");
      fab.classList.add("hide");
      fab.setAttribute("aria-expanded", "true");
      input.focus();
    }
    function closePanel() {
      panel.classList.remove("show");
      fab.classList.remove("hide");
      fab.setAttribute("aria-expanded", "false");
    }

    fab.addEventListener("click", function() {
      panel.classList.contains("show") ? closePanel() : openPanel();
    });
    closeBtn.addEventListener("click", closePanel);
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && panel.classList.contains("show")) closePanel();
    });

    function respond(question) {
      var botDiv = addMessage("bot", "");
      input.value = "";

      try {
        var answer = findBestAnswer(question);
        if (answer) {
          botDiv.textContent = answer.answer;
        } else {
          botDiv.textContent = FALLBACK_REPLIES[Math.floor(Math.random() * FALLBACK_REPLIES.length)];
        }
      } catch (err) {
        botDiv.textContent = "Sorry, something went wrong. Try asking another question.";
      }
      messagesEl.scrollTop = messagesEl.scrollHeight;
      input.disabled = false;
      sendBtn.disabled = false;
      input.focus();
    }

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var q = input.value.trim();
      if (!q) return;
      addMessage("user", q);
      input.disabled = true;
      sendBtn.disabled = true;
      respond(q);
    });

    suggestions.addEventListener("click", function(e) {
      var chip = e.target.closest(".chip");
      if (!chip || chip.disabled) return;
      var q = chip.textContent;
      addMessage("user", q);
      input.disabled = true;
      sendBtn.disabled = true;
      respond(q);
    });

    addMessage("bot", "Hi! I'm your offline typing coach. Ask me about technique, speed tips, accuracy, posture, or how this app works - everything runs locally, no internet needed.");
  }


/* ---------------------------------------------------------
         INIT
      --------------------------------------------------------- */
  function init() {
    applySettings();
    config.mode = settings.defaultMode || "time";
    $$("#modeGroup button").forEach((b) =>
      b.classList.toggle("active", b.dataset.mode === config.mode),
    );
    renderParamGroup();
    resetTest();
    initAIChat();
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      if (views.results.classList.contains("active"))
        drawGraph($("#resGraph"), history[0] ? history[0].samples : []);
      if (views.stats.classList.contains("active")) renderStats();
      // Re-sync the caret's scroll position after any viewport/orientation
      // change (font sizes and line wrapping can shift), instead of waiting
      // for the next keystroke to notice the caret is off-screen.
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const cur = wordsEl.querySelector(".ch.cur");
        if (cur) ensureCaretVisible(cur, true);
      }, 120);
    });
  }
  init();
})();
