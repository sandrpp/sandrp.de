
const JitterText = ({ text }: { text: string }) => {
    const words = text.split(" ");
    let charCounter = 0;

    return (
        <span className="inline">
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {word.split("").map((char) => {
                        const index = charCounter++;
                        return (
                            <span
                                key={index}
                                className="inline-block animate-jitter"
                                style={{
                                    animationDelay: `${(index % 10) * 0.1}s`,
                                }}
                            >
                                {char}
                            </span>
                        );
                    })}
                    {wordIndex < words.length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </span>
            ))}
        </span>
    );
};

export default JitterText;