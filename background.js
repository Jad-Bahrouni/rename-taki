chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  try {
    // Only act on downloads from the target site
    if (item.url.startsWith("https://app.takiacademy.com/sessions")) {
      const originalName = item.filename.split('/').pop(); // get just the file name
      const underscoreIndex = originalName.indexOf("_");

      if (underscoreIndex !== -1) {
        const newName = originalName.substring(underscoreIndex + 1);
        suggest({ filename: newName });
      } else {
        // If no underscore, keep original
        suggest({ filename: originalName });
      }
    }
  } catch (err) {
    console.error("Error renaming file:", err);
    suggest(); // fallback to default
  }
});
