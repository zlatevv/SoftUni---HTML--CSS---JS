function solve() {
    const text = document.getElementById("text").value;
    const typeCase = document.getElementById("naming-convention").value;
    const result = document.getElementById("result");

    result.textContent = "";

    switch (typeCase) {
        case "Camel Case":
            {
                const words = text.split(" ");
                let tempResult = "";

                for (let i = 0; i < words.length; i++) {
                    let word = words[i].toLowerCase();
                    if (word === "") continue;

                    if (i !== 0) {
                        word = word[0].toUpperCase() + word.slice(1);
                    }
                    tempResult += word;
                }

                result.textContent = tempResult;
            }
            break;

        case "Pascal Case":
            {
                const words = text.split(" ");
                let tempResult = "";

                for (let word of words) {
                    word = word.toLowerCase();
                    if (word === "") continue;

                    tempResult += word[0].toUpperCase() + word.slice(1);
                }

                result.textContent = tempResult;
            }
            break;

        default:
            result.textContent = "Error!";
    }
}
