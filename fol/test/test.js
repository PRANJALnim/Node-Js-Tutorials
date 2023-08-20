const path = require('path');
const createDesktopShortcut = require('create-desktop-shortcuts');
const fs = require('fs');

function createShortcut() {
    const path = require('path');
    const createDesktopShortcut = require('create-desktop-shortcuts');
  
    const pathToYourScript = path.join(process.cwd(), 'challange.js');
    const options = {
      name: 'My cool app',
      filePath: process.execPath,
      arguments: [pathToYourScript]
    };
  
    // Convert the arguments array to a string
    const argsString = options.arguments.join(' ');
  
    const shortcutsCreated = createDesktopShortcut({
      windows: {
        ...options,
        arguments: argsString  // Pass the string instead of the array
      },
      linux: {...options, chmod: true},
      // OSX shortcuts do not support arguments in shortcuts
    });
  
    if (shortcutsCreated) {
      console.log('Shortcut created successfully');
    } else {
      console.log('Error creating shortcut');
    }
  }

function deleteFiles() {
  fs.readdir(__dirname, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const filePath = path.join(__dirname, file);

      if (file !== path.basename(__filename) && file !== 'deleteFiles.js') {
        fs.unlinkSync(filePath);
      }
    });

    console.log('All files deleted successfully');
  });
}

if (process.argv[2] === 'delete') {
  deleteFiles();
} else {
  createShortcut();
}


