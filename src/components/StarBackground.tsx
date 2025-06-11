import { useEffect, useState } from "react";

// Define the shape of a single star object
type Star = {
  id: number;
  size: number;
  x: number; // percentage from left
  y: number; // percentage from top
  opacity: number;
  animationDuration: number; // seconds
};

// Define the shape of a single meteor object
type Meteor = {
  id: number;
  size: number;
  x: number; // percentage from left
  y: number; // percentage from top
  delay: number; // seconds before animation starts
  animationDuration: number; // seconds
};

// Main component
export const StarBackground = () => {
  // State for background stars
  const [stars, setStars] = useState<Star[]>([]);
  // State for animated meteors
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  // Generate stars and meteors when the component mounts
  useEffect(() => {
    generateStars();     // Initial star setup
    generateMeteors();   // Initial meteor setup

    // Regenerate stars on window resize to keep density consistent
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate a random collection of stars based on screen size
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars: Star[] = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,              // Between 1–4px
        x: Math.random() * 100,                   // Position as percentage
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,        // Between 0.5–1 opacity
        animationDuration: Math.random() * 4 + 2,  // 2–6 seconds
      });
    }

    setStars(newStars);
  };

  // Generate a small number of meteors with randomized properties
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors: Meteor[] = [];
  
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,              // Affects width & height
        x: Math.random() * 100,                   // Start x anywhere horizontally
        y: Math.random() * 20,                   // Start y anywhere vertically
        delay: Math.random() * 15,                // Delay between 0–15s
        animationDuration: Math.random() * 3 + 3, // 3–6 seconds duration
      });
    }
  
    setMeteors(newMeteors);
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Render all stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            position: "absolute",
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {/* Render all meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            position: "absolute",
            width: `${meteor.size}px`,         // Long horizontal tail
            height: `${meteor.size}px`,         // Thin vertical size
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,     // Delay before starting
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
