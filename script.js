function sayYes() {
    document.getElementById("content").innerHTML = `
      <p>Great! Here's a rose for you 🌹</p>
      <p>Why don't we celebrate with some jokes?</p>
      <p> Why did the scarecrow win an award? Because he was outstanding in his field!</p>

    `;
    document.getElementById("rose-container").style.display = "block";
  }
  
  function sayNo() {
    document.getElementById("content").innerHTML = `<p>Please go back and press "Yes" to accept.</p>`;
    document.getElementById("rose-container").style.display = "none";
  }
  