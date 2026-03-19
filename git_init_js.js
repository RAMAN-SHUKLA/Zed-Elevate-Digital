const git = require('isomorphic-git');
const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Aman\\Desktop\\zedelevatedigital';

async function run() {
  try {
    await git.init({ fs, dir });
    console.log('Initialized repository');
    
    // Status check
    const status = await git.statusMatrix({ fs, dir });
    console.log(`Found ${status.length} files`);
    
  } catch (err) {
    console.error(err);
  }
}

run();
