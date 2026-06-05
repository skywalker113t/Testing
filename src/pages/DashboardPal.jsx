import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const palQuotes = {
  "/": [
    "Welcome back to EduConnect! Ready to smash some goals today? 💪",
    "Your weekly goal is looking sharp. Let's push it closer to 100%! 📊",
    "New cohort discussions are popping off. Go check them out! 🤝",
  ],
  "/achievements": [
    "8 badges earned? Absolute flex. 🔥",
    "That Python badge looks clean on you. 🐍",
    "Don't look now, but you're only 2 tasks away from the Top Learner title! ⚡",
    "A 5-day learning streak? Keep cooking! 🎯",
  ],
  "/learning": [
    "Back to the grind! Which module are we crushing next? 📚",
    "Consistency beats intensity. Just 15 minutes today makes a difference! 🧠",
  ],
  "/project": [
    "First project draft submitted? Let's check for peer reviews! 📦",
    "Code, test, refine, repeat. You've got this layout handled! 💻",
  ],
  "/groups": [
    "Your cohort group is active! Time to network and collaborate. 🤝",
  ],
  "/profile": ["Looking good! Your stats speak for themselves. 📈"],
  "/settings": [
    "Changing secrets, are we? 👀",
    "That dark mode setup looks incredibly crisp. Excellent design choice. 🌙",
  ],
  "/notifications": ["Let's see who's interacting with your project drops! 🔔"],
  "/username": ["Claiming your custom handle? Make it iconic. 🏷️"],
  default: [
    "Just hovering around, keeping you company. 👾",
    "Let's get this learning bread! 🍞",
    "Click me again if you want more elite commentary.",
  ],
};

// FIXED: Destructures currentPath right here in the function arguments
export default function DashboardPal({ currentPath = "/" }) {
  const [position, setPosition] = useState(() => {
    try {
      const saved = localStorage.getItem("pal-position");
      return saved
        ? JSON.parse(saved)
        : { x: window.innerWidth - 100, y: window.innerHeight - 150 };
    } catch (e) {
      return { x: 200, y: 400 };
    }
  });

  const [isDragging, setIsDragging] = useState(false);
  const [speech, setSpeech] = useState("");
  const [showBubble, setShowBubble] = useState(false);

  const dragRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  // FIXED: Listens directly to the currentPath prop from App.jsx to change text
  useEffect(() => {
    const quotes = palQuotes[currentPath] || palQuotes["default"];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    setSpeech(randomQuote);
    setShowBubble(true);

    const timer = setTimeout(() => setShowBubble(false), 6000);
    return () => clearTimeout(timer);
  }, [currentPath]);

  const handlePalClick = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isDragging) return;

    const quotes = palQuotes[currentPath] || palQuotes["default"];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    setSpeech(randomQuote);
    setShowBubble(true);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const newX = Math.max(
        20,
        Math.min(e.clientX - offsetRef.current.x, window.innerWidth - 80)
      );
      const newY = Math.max(
        20,
        Math.min(e.clientY - offsetRef.current.y, window.innerHeight - 80)
      );

      const newPos = { x: newX, y: newY };
      setPosition(newPos);
      localStorage.setItem("pal-position", JSON.stringify(newPos));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={dragRef}
      className="floating-pal-wrapper"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 99999,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
    >
      {showBubble && (
        <div className="pal-speech-bubble">
          <p style={{ margin: 0 }}>{speech}</p>
          <button
            className="close-bubble-btn"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowBubble(false);
            }}
          >
            <X size={12} />
          </button>
          <div className="bubble-arrow"></div>
        </div>
      )}

      <div
        className={`pal-avatar-body ${isDragging ? "dragging" : ""}`}
        onClick={handlePalClick}
      >
        <div className="pal-face">
          <div className="pal-eyes">
            <span className="eye"></span>
            <span className="eye"></span>
          </div>
          <div className="pal-mouth"></div>
        </div>
      </div>
    </div>
  );
}
