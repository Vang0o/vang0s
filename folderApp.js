const folderButton = document.getElementById("folderIcon");

folderButton.addEventListener("click", function() {
  const folderApp = document.createElement("div");
  folderApp.classList.add("folder");
  folderApp.innerHTML = "<h2>Folder App</h2><p>This should be a folder</p>";
  document.getElementById("folderApp").appendChild(folderApp);

  document.getElementById("folderApp").style.display = "block"; // Show the folder app
  dragElement(folderApp); 

});
