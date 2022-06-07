const fileInput = document.querySelector("input"),

downBtn = document.querySelector("button");
downBtn.addEventListener("click", e => {

	e.preventDefault();
	downBtn.innerText = "Downloading File...";
	fetchFile(fileInput.value);
});


//fetch file and get back responce as blob
function fetchFile(url){


  fetch(url).then(res => res.blob()).then(file => {

  	let tempUrl = URL.createObjectURL(file);
  	let aTag = document.createElement("a");
  	aTag.href = tempUrl;
  	aTag.download = url.replace(/^.*[\\\/]/, '');
  	document.body.appendChild(aTag);
  	aTag.click();//click to download file
  	aTag.remove();//remove file download
  	URL.revokeObjectURL(tempUrl);
  	downBtn.innerText = "Downloading File";
  }).catch(() => {

  	downBtn.innerText = "Downloading File";
  	alert("Failed to download file!");
  });
}