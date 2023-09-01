function showContent(contentId) {
    // Hide all content divs
    const contentDivs = document.querySelectorAll('.container');
    contentDivs.forEach(div => {
        div.style.display = 'none';
    });

    // Show the selected content div
    const selectedContent = document.getElementById(`${contentId}-content`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}
