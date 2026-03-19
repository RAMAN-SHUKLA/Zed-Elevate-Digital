import * as git from 'isomorphic-git';
import * as fs from 'fs';
import path from 'path';

const dir = 'c:\\Users\\Aman\\Desktop\\zedelevatedigital';

async function run() {
  try {
    await git.init({ fs, dir });
    console.log('Initialized repository');
    
    // Stage all files (excluding node_modules and .git)
    const files = await fs.promises.readdir(dir);
    for (const file of files) {
      if (file !== 'node_modules' && file !== '.git') {
        await git.add({ fs, dir, filepath: file });
        console.log(`Added: ${file}`);
      }
    }
    
    // Commit
    const sha = await git.commit({
      fs,
      dir,
      author: {
        name: 'Antigravity',
        email: 'antigravity@google.com',
      },
      message: 'Final project updates: pricing, Calendly links, and Founders section',
    });
    console.log(`Committed: ${sha}`);
    
  } catch (err) {
    console.error('Error during git operations:', err);
  }
}

run();
