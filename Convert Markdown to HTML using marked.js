const htmlContent = marked(markdownText);
            markdownOutput.innerHTML = htmlContent;
        } catch (error) {
            console.error('Error converting markdown:', error);
            alert('An error occurred while converting markdown. Please try again.');
        }
    }

    // Event listener for the convert button
    convertButton.addEventListener('click', convertMarkdown);
});

<!-- input.md -->
This is a test
---
This is a test of the Markdown to HTML converter.

### Explanation of Key Functionality
1. **HTML Structure**: The HTML file includes a responsive layout using Bootstrap 5. It has a textarea for input and a div for output.
2. **CSS Styling**: Basic styles are applied to enhance the appearance of the application.
3. **JavaScript Functionality**: The JavaScript file handles the conversion of Markdown to HTML using the `marked` library. It includes error handling for empty input and logs errors to the console if conversion fails.
4. **Accessibility**: Labels are associated with input fields for better accessibility.
5. **Responsive Design**: The use of Bootstrap ensures that the application is responsive across different devices.

### How to Run the Application
1. Create a folder named `markdown-converter`.
2. Inside this folder, create the files as shown above and copy the respective code into each file.
3. Open `index.html` in a web browser to view and use the Markdown converter.