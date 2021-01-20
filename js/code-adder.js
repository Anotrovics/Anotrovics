ranArray =[]
for (i=0; i < 5; i++){
  ranArray[i] = i + 1
}
i = ranArray.length

while (i--) {
  ran = Math.floor(Math.random() * (i+1));
  // swap randomly chosen element with current element
  char = ranArray[i];
  ranArray[i] = ranArray[ran];
  ranArray[ran] = char;
  console.log(array[i]);
}

function FileUpload() {
  // GET THE FILE INPUT.
  var fi = document.getElementById('file');

  // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
  if (fi.files.length > 0) {

    // THE TOTAL FILE COUNT.
    document.getElementById('fp').innerHTML =
    'Total Files: <b>' + fi.files.length + '</b></br >';

    // RUN A LOOP TO CHECK EACH SELECTED FILE.
    for (var i = 0; i <= fi.files.length - 1; i++) {

      var fname = fi.files.item(i).name;      // THE NAME OF THE FILE.
      var fsize = fi.files.item(i).size;      // THE SIZE OF THE FILE.

            // SHOW THE EXTRACTED DETAILS OF THE FILE.
            document.getElementById('fp').innerHTML =
                document.getElementById('fp').innerHTML + '<br /> ' +
                    fname + ' (<b>' + fsize + '</b> bytes)';
        }
    }
    else {
        alert('Please select a file.')
    }
}
