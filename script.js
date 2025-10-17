const markdownInput = document.getElementById('markdown-input');
const wordCountDisplay = document.getElementById('markdown-word-count');

function updateWordCount() {
    const text = markdownInput.value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const formattedCount = new Intl.NumberFormat().format(words);
    wordCountDisplay.textContent = `Word Count: ${formattedCount}`;
}

markdownInput.addEventListener('input', updateWordCount);