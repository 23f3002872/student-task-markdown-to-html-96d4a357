document.addEventListener("DOMContentLoaded", function() {
    const markdownInput = `This is a test\n---`;
    const htmlContent = marked(markdownInput);
    document.getElementById('markdown-output').innerHTML = htmlContent;
    hljs.highlightAll();
});