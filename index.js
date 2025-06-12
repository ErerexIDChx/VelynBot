const { spawn } = require('child_process');
const path = require('path');

// The file that you want to run (e.g., 'main.js')
const file = 'main.js';

function start() {
   const args = [path.join(__dirname, file), "--pairing-code"];
   //Ini Kalo Pairing Ya
   
   //const args = [path.join(__dirname, file)];
   //Ini Kalo Scan Ya
   
   // Log the arguments that will be passed to the child process
   console.log([process.argv[0], ...args].join(' '));

   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc'] // Standard I/O and IPC for inter-process communication
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...');
            p.kill(); // Kill the current process
            start();  // Restart the process
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code);
         
         // Restart the process only if the exit code is 1 or 0
         if (code === 1 || code === 0) {
            start();
         }
      });
}

start();
