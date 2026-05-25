import React from 'react';

const WavyText = ({ text }: { text: string }) => {
    return (
        <span className="inline-flex">
      {text.split("").map((char, index) => (
          <span
              key={index}
              className="inline-block animate-wobble"
              style={{
                  animationDelay: `${index * 0.1}s`,
                  whiteSpace: char === " " ? "pre" : "normal"
              }}
          >
          {char}
        </span>
      ))}
    </span>
    );
};

export default WavyText;