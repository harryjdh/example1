const speechBubble = document.getElementById("speechBubble");
const userText = document.getElementById("userText");
const speakButton = document.getElementById("speakButton");

const updateSpeech = () => {
  const message = userText.value.trim();
  if (!message) {
    speechBubble.textContent = "무슨 말을 하고 싶은지 알려줘!";
    userText.focus();
    return;
  }

  speechBubble.textContent = message;

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "ko-KR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
};

speakButton.addEventListener("click", updateSpeech);
userText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    updateSpeech();
  }
});
