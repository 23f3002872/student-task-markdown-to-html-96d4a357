document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.getElementById('convert-btn');
    const markdownInput = document.getElementById('markdown-input');
    const markdownOutput = document.getElementById('markdown-output');

    // Function to convert Markdown to HTML
    function convertMarkdown() {
        const markdownText = markdownInput.value.trim();

        // Error handling for empty input
        if (!markdownText) {
            alert('Please enter some markdown text to convert.');
            return;
        }

        try {