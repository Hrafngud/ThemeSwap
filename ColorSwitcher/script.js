let theme = false;
function toggleTheme() {
  colorSwitch(theme);
  theme = !theme
}

function colorSwitch(theme) {
  if ( theme === false) {
    document.getElementById('container').style.setProperty('--container', 'white');
    document.getElementById('container').style.setProperty('--text', 'black');
    
  } else {
    document.getElementById('container').style.setProperty('--container', 'black');
    document.getElementById('container').style.setProperty('--text', 'white');
  };
}