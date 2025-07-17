function deleteByEmail() {
    const emails = document.querySelectorAll("tbody tr td:nth-child(2)");
    const input = document.querySelector("input[name='email']").value.trim();
    const result = document.getElementById("result");

    let isFound = false;

    for (const email of emails) {
        if (email.textContent === input) {
            const row = email.parentElement;
            row.remove();
            isFound = true;
            result.textContent = "Deleted.";
            break;
        }
    }

    if (!isFound) {
        result.textContent = "Not found.";
    }
}
