(() => {
  // Target the element by its specific ID
  const nameElement = document.getElementById('profile-header-title-container-name');
  
  if (nameElement) {
    // Extract the text content and clean up any trailing whitespace
    const username = nameElement.textContent.trim();
    console.log(`Username found: ${username}`);
  } else {
    console.error('Could not find the username element on this page.');
  }
})();
