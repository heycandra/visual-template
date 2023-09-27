console.log("hallo");

// Navbar Responsive

// const navbarToggler = document.querySelector(".nav-btn-responsive");

// navbarToggler.addEventListener("click", function () {
//     document.querySelector(".nav-menu-responsive").classList.toggle("active");
// });

// logic respondsive

const btnRes = document.querySelector(".nav-btn-responsive");
const menu = document.querySelector(".nav-item-menu");

btnRes.addEventListener("click", () => {
    menu.classList.toggle("active");
    btnRes.classList.toggle("cross");
});

// logic copy clipboard

const copyButtonLabel = "Components";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");

        button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });
    }
});

async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerText = "Code Copied!";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
}
