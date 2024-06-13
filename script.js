function sayYes() {
    document.getElementById("content").innerHTML = `
      <p>Great! Here's a rose for you 🌹</p>
      <p>Why don't we celebrate with some jokes?</p>
      <p>Why did the scarecrow win an award? Because he was outstanding in his field!</p>
      
    `;
    document.getElementById("rose-container").style.display = "block";
    document.getElementById("crush-photo").innerHTML = '<img src="./IMG_20240609_014507_704.jpg" alt="Crush Photo">';
    document.getElementById("crush-photo").style.display = "block";
  }
  
  function sayNo() {
    document.getElementById("content").innerHTML = `babe please don't do this ........! motki`;
    document.getElementById("rose-container").style.display = "none";
    document.getElementById("crush-photo").style.display = "none";
  }
  