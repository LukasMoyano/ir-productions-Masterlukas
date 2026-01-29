#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const ftpConfig = {
  host: process.env.FTP_HOST || process.env.SFTP_HOST,
  user: process.env.FTP_USER || process.env.SFTP_USER,
  password: process.env.FTP_PASSWORD || process.env.SFTP_PASSWORD,
  port: parseInt(process.env.FTP_PORT) || parseInt(process.env.SFTP_PORT) || 21,
  remotePath: process.env.FTP_REMOTE_PATH || process.env.SFTP_REMOTE_PATH || '/',
};

// Check if required environment variables are set
if (!ftpConfig.host || !ftpConfig.user || !ftpConfig.password) {
  console.error('Error: Missing required FTP/SFTP configuration in environment variables.');
  console.error('Please set FTP_HOST/FTP_USER/FTP_PASSWORD or SFTP_HOST/SFTP_USER/SFTP_PASSWORD in your .env file.');
  process.exit(1);
}

// Determine if using SFTP or FTP
const isSFTP = process.env.SFTP_HOST ? true : false;

async function deploy() {
  console.log(`Starting ${isSFTP ? 'SFTP' : 'FTP'} deployment...`);
  
  // Build the project first
  console.log('Building project...');
  const { spawn } = require('child_process');
  
  const buildProcess = spawn('bun', ['run', 'build']);
  
  buildProcess.stdout.on('data', (data) => {
    console.log(`Build: ${data}`);
  });
  
  buildProcess.stderr.on('data', (data) => {
    console.error(`Build Error: ${data}`);
  });
  
  await new Promise((resolve, reject) => {
    buildProcess.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Build failed with code ${code}`));
      } else {
        console.log('Build completed successfully');
        resolve();
      }
    });
  });

  // Upload files to server
  if (isSFTP) {
    await uploadViaSFTP();
  } else {
    await uploadViaFTP();
  }
  
  console.log('Deployment completed successfully!');
}

async function uploadViaSFTP() {
  console.log('Uploading files via SFTP...');
  
  const Client = require('ssh2-sftp-client');
  const sftp = new Client();
  
  try {
    await sftp.connect({
      host: ftpConfig.host,
      port: ftpConfig.port,
      username: ftpConfig.user,
      password: ftpConfig.password
    });
    
    console.log('Connected to SFTP server');
    
    // Upload dist folder contents
    const distPath = path.join(__dirname, 'dist');
    if (!fs.existsSync(distPath)) {
      throw new Error('Build directory (dist) does not exist. Please run build first.');
    }
    
    await uploadDirectory(sftp, distPath, ftpConfig.remotePath);
    
    console.log('Files uploaded successfully via SFTP');
  } catch (err) {
    console.error('SFTP Error:', err);
    throw err;
  } finally {
    await sftp.end();
  }
}

async function uploadViaFTP() {
  console.log('Uploading files via FTP...');
  
  const Client = require('ftp');
  const client = new Client();
  
  return new Promise((resolve, reject) => {
    client.on('ready', async () => {
      console.log('Connected to FTP server');
      
      try {
        const distPath = path.join(__dirname, 'dist');
        if (!fs.existsSync(distPath)) {
          throw new Error('Build directory (dist) does not exist. Please run build first.');
        }
        
        await uploadDirectoryFTP(client, distPath, ftpConfig.remotePath);
        console.log('Files uploaded successfully via FTP');
        client.end();
        resolve();
      } catch (err) {
        console.error('FTP Upload Error:', err);
        client.end();
        reject(err);
      }
    });
    
    client.on('error', (err) => {
      console.error('FTP Connection Error:', err);
      reject(err);
    });
    
    client.connect({
      host: ftpConfig.host,
      port: ftpConfig.port,
      user: ftpConfig.user,
      password: ftpConfig.password
    });
  });
}

async function uploadDirectory(sftp, localDir, remoteDir) {
  const items = fs.readdirSync(localDir);
  
  for (const item of items) {
    const localPath = path.join(localDir, item);
    const remotePath = path.posix.join(remoteDir, item);
    
    const stats = fs.statSync(localPath);
    
    if (stats.isDirectory()) {
      // Create directory if it doesn't exist
      try {
        await sftp.mkdir(remotePath, true);
      } catch (err) {
        // Directory might already exist, which is fine
      }
      
      // Recursively upload directory contents
      await uploadDirectory(sftp, localPath, remotePath);
    } else {
      // Upload file
      console.log(`Uploading ${localPath} to ${remotePath}`);
      await sftp.put(localPath, remotePath);
    }
  }
}

async function uploadDirectoryFTP(client, localDir, remoteDir) {
  // Ensure remote directory exists
  await new Promise((resolve, reject) => {
    client.mkdir(remoteDir, true, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
  
  const items = fs.readdirSync(localDir);
  
  for (const item of items) {
    const localPath = path.join(localDir, item);
    const remotePath = path.posix.join(remoteDir, item);
    
    const stats = fs.statSync(localPath);
    
    if (stats.isDirectory()) {
      // Recursively upload directory contents
      await uploadDirectoryFTP(client, localPath, remotePath);
    } else {
      // Upload file
      console.log(`Uploading ${localPath} to ${remotePath}`);
      await new Promise((resolve, reject) => {
        client.put(localPath, remotePath, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }
  }
}

// Run deployment
deploy().catch(err => {
  console.error('Deployment failed:', err);
  process.exit(1);
});