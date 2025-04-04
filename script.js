document.getElementById('downloadBtn').addEventListener('click', function() {
    const button = this;
    
    // Add loading state
    button.classList.add('loading');
    button.querySelector('.download-icon i').classList.remove('fa-download');
    button.querySelector('.download-icon i').classList.add('fa-spinner');
    button.querySelector('.button-text').textContent = 'Downloading...';

    // Create a link element
    const link = document.createElement('a');
    link.href = 'Disha_Resume.pdf'; // Path to your PDF file
    link.download = 'Disha_Resume.pdf'; // Name for downloaded file

    // Append link to document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset button state after a short delay
    setTimeout(() => {
        button.classList.remove('loading');
        button.querySelector('.download-icon i').classList.remove('fa-spinner');
        button.querySelector('.download-icon i').classList.add('fa-download');
        button.querySelector('.button-text').textContent = 'Download Resume';
    }, 1000);
});