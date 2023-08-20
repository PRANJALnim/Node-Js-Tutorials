// function createShortcut () {
//     const path = require('path');
//     const createDesktopShortcut = require('create-desktop-shortcuts');
  
//     const pathToYourScript = path.join(process.cwd(), 'challange');
//     const options = {
//       name: 'My cool script',
//       filePath: 'node',
//       arguments: '"' + pathToYourScript + '"'
//     };
  
//     const shortcutsCreated = createDesktopShortcut({
//       windows: options,
//       linux: options
//       // OSX shortcuts do not support arguments in shortcuts
//     });
  
//     if (shortcutsCreated) {
//       console.log(console.log('Script path:', pathToYourScript));
//     } else {
//       console.log('Could not create the icon or set its permissions (in Linux if "chmod" is set to true, or not set)');
//     }
//   }
//   createShortcut();






// const { spawn } = require('child_process');

// function createShortcut() {
//   const path = require('path');
//   const createDesktopShortcut = require('create-desktop-shortcuts');

//   const pathToYourScript = path.join(process.cwd(), 'challange.js');
//   const options = {
//     name: 'My cool app',
//     filePath: process.execPath,
//     arguments: [pathToYourScript]
//   };

//   const shortcutsCreated = createDesktopShortcut({
//     windows: options,
//     linux: {...options, chmod: true},
//     // OSX shortcuts do not support arguments in shortcuts
//   });

//   if (shortcutsCreated) {
//     console.log('Shortcut created successfully');
//   } else {
//     console.log('Error creating shortcut');
//   }
// }

// function runApp() {
//   const path = require('path');
//   const scriptPath = path.join(process.cwd(), 'challange.js');

//   // Spawn a new Node.js process to run your app
//   const child = spawn(process.execPath, [scriptPath]);

//   // Print any output from the child process to the console
//   child.stdout.on('data', (data) => {
//     console.log(data.toString());
//   });

//   child.stderr.on('data', (data) => {
//     console.error(data.toString());
//   });
// }

// // Uncomment this line to create the shortcut
// // createShortcut();

// // Call the runApp function to start your app
// runApp();







const { spawn } = require('child_process');

function createShortcut() {
  const path = require('path');
  const createDesktopShortcut = require('create-desktop-shortcuts');

  const pathToYourScript = path.join(process.cwd(), 'challange.js');
  const options = {
    name: 'My cool app',
    filePath: process.execPath,
    arguments: [pathToYourScript]
  };

  const shortcutsCreated = createDesktopShortcut({
    windows: options,
    linux: {...options, chmod: true},
    // OSX shortcuts do not support arguments in shortcuts
  });

  if (shortcutsCreated) {
    console.log('Shortcut created successfully');
  } else {
    console.log('Error creating shortcut');
  }
}

function runApp() {
  const path = require('path');
  const scriptPath = path.join(process.cwd(), 'challange.js');

  // Spawn a new Node.js process to run your app
  const child = spawn(process.execPath, [scriptPath]);

  // Print any output from the child process to the console
  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  child.stderr.on('data', (data) => {
    console.error(data.toString());
  });
}

// Uncomment this line to create the shortcut
createShortcut();

// Call the runApp function to start your app
runApp();
