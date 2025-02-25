const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const text_input = document.getElementById("text-input");

text_input.addEventListener("input", (e) => {
  e.preventDefault();
  const val = e.currentTarget.value;
  let ar = val.match(/\S+/g);

  wordCount.innerText = ar.length;
  charCount.innerText = ar.join(" ").length;
  console.log(ar);
});
