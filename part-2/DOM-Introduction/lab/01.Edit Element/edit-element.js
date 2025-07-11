function editElement(pEL, word, replacement) {
    let text = pEL.textContent
    text = text.replaceAll(word, replacement);
    
    pEL.textContent = text
    
}