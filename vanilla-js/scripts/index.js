import { getCompletions } from "./actions/getCompletions.action.js";

const promptForm = document.getElementById("prompt-form");
const prompt = document.getElementById("prompt");
const output = document.getElementById("output");
const clearBTN = document.getElementById("clear-btn");

if(promptForm) {
    promptForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const outputResponse =  await getCompletions({prompt: prompt.value});
        if(outputResponse.length > 0){
            output.innerText = outputResponse;
        }
        if(clearBTN) {
            clearBTN.classList.toggle("hidden");
        }
    })
}

if(clearBTN) {
    clearBTN.addEventListener("click", () => {
        clearBTN.classList.toggle("hidden");
        prompt.value = "";
        output.innerText = "";
    })
}