function extractAndConvertToUpper(text) {
  const words = text.match(/\w+/g) || [];
  const upperWords = words.map(word => word.toUpperCase());
  console.log(upperWords.join(", "));
}