function display() {
    let response = document.getElementById("response");
    let data = JSON.parse(this.responseText);
  
    let formattedOutput = JSON.stringify(data, null, 2);
    response.innerHTML = "<pre>" + formattedOutput + "</pre>";

    let preFormattedOutput = response.querySelector("pre");
    if (preFormattedOutput.childNodes.length !== 0) {
      preFormattedOutput.style.padding = "1rem";
    }
}

export{display};