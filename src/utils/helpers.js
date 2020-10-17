export function generateID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function parseQuote(text) {
  return text.replace(/&quot;/g, '"');
}
