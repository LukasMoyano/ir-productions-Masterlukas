# Deployment Guide

This guide explains how to deploy your application to a production server using FTP or SFTP.

## Prerequisites

Before deploying, you need to set up your FTP/SFTP credentials in a `.env` file.

## Setting Up Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit the `.env` file with your FTP/SFTP credentials:

For FTP:
```env
FTP_HOST=your-ftp-server.com
FTP_USER=your-username
FTP_PASSWORD=your-password
FTP_PORT=21
FTP_REMOTE_PATH=/public_html/
```

For SFTP (recommended for security):
```env
SFTP_HOST=your-sftp-server.com
SFTP_USER=your-username
SFTP_PASSWORD=your-password
SFTP_PORT=22
SFTP_REMOTE_PATH=/public_html/
```

Note: Use either FTP or SFTP configuration, not both. SFTP is recommended for better security.

## Deploying Your Application

To build and deploy your application, run:

```bash
bun run deploy
```

This command will:
1. Build your React application using `vite build`
2. Upload all built files to your server via FTP/SFTP

## Manual Deployment Steps

If you prefer to do the steps manually:

1. Build your application:
```bash
bun run build
```

2. Run the deployment script:
```bash
node deploy.js
```

## SSL Certificate Files

This project includes SSL certificate files:
- `domain.csr` - Certificate Signing Request for your domain
- `masterlukasmoyano.com.csr` - Certificate Signing Request for masterlukasmoyano.com
- `masterlukasmoyano.com.key` - Private key for the SSL certificate

These files are used for SSL certificate setup on your hosting server.

## Troubleshooting

- Make sure your FTP/SFTP server allows connections from your IP address
- Verify that the remote path exists and you have write permissions
- Check that your credentials are correct
- Ensure your firewall allows the FTP/SFTP ports (21 for FTP, 22 for SFTP)

## Security Notes

- Never commit your `.env` file to version control
- Keep your SSL private key secure (`masterlukasmoyano.com.key`)
- Consider using SSH keys instead of passwords for SFTP when possible