function s() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('card');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h5")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function searchFuntion() {
  array =[]
  for (i=0; i < 5; i++){
    array[i] = i + 1
  }
  i = array.length

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    // swap randomly chosen element with current element
    char = array[i];
    array[i] = array[j];
    array[j] = char;
  }
  window.alert(array)
}
