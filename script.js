const textArea = document.querySelector("textarea"),
  fileNameInput = document.querySelector(".file-name input"),
  selectmenu = document.querySelector(".save-as select"),
  saveBtn = document.querySelector(".save-btn");

selectmenu.addEventListener("change", () => {
  let selectedOption = selectmenu.options[selectmenu.selectedIndex].text;
  saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textArea.value], { type: selectmenu.value });
  const fileUrl = URL.createObjectURL(blob);
  console.log(fileUrl);
  const link = document.createElement("a");
  link.download = fileNameInput.value;
  link.href = fileUrl;
  link.click();
});
