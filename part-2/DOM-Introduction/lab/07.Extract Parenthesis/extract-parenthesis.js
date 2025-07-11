function extract(targetElId) {
    const targetEl = document.getElementById(targetElId);

    const content = targetEl.textContent;
    const pattern = /\(.+?\)/g;

    const matches = content.match(pattern)
    const formattedMatches = matches.filter(m => m.substring(1, m.length - 1))

    return formattedMatches.join("; ")
}
