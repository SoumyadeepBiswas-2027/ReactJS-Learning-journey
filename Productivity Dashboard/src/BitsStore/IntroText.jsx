import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const IntroText = () => {
  const text = "LET'S MAKE A PRODUCTIVE DAY !!";  // All text in one string

  return (
    <div className="introText">
      <BlurText
        text={text}
        delay={290}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl"
      />
    </div>
  );
};

export default IntroText;
