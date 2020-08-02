console.log("Client-side code running");
var buzzwords = "";

const button = document.getElementById("generateButton");
button.addEventListener("click", function(e) {
  console.log("button was clicked");
});

async function getData() {
  try {
    await axios
      .get("https://corporatebs-generator.sameerkumar.website/")
      .then(res => {
        // return res.data.phrase;
        console.log(res.data);
        buzzwords = res.data.phrase;
      });
  } catch (e) {
    console.log(e);
  }
}
