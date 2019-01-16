// Define constants
const appContainer = document.getElementById('appContainer');
const editor = document.getElementById('editor');
const previewContainer = document.getElementById('previewContainer');
const previewButton = document.getElementById('previewButton');
const previewIcon = document.getElementById('previewIcon');

// Define global funcs
function updatePreview(){
  previewContainer.innerHTML =  md.render(editor.value);
}

function togglePreview(){
  previewButton.classList.toggle('active');
  previewIcon.classList.toggle('active');
  editor.classList.toggle('hide');
  previewContainer.classList.toggle('md-show');
}

// Listen for events
previewButton.addEventListener('click', function() {
  togglePreview();
});

editor.addEventListener('input', function (event) {
  updatePreview();
});

// Set default markdown
editor.value =
  '# DocHub\n\n' + 
  'A web app for writing markdown.\n\n' +
  '# Heading 1\n' +
  '## Heading 2\n' +
  '### Heading 3\n' +
  '#### Heading 4\n' +
  '##### Heading 5\n' +
  '###### Heading 6\n\n' +
  'Type `*Italic*` to get *Italic*\n\n' +
  'Type `**Bold**` to get **Bold**\n\n' +
  'Type `[Link](http://a.com)` to get a [Link](http://a.com)\n\n' +
  'Type `![Image](http://url/a.png)` to get ![Image](http://url/a.png)\n\n' +
  'Type `> Blockquote` to get:\n> Blockquote\n\n' +
  '* List\n* List\n* List\n\n' +
  '1. List\n2. List\n3. List\n\n';

// Initialize app
const md = window.markdownit();
updatePreview();