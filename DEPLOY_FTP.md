# Deployment Guide - IR Productions

## FTP Deployment with lftp

### Prerequisites
```bash
# Install lftp
sudo apt install lftp

# Or on macOS
brew install lftp
```

### Connection Configuration

Create a `.lftp` configuration file in your home directory:
```bash
cat > ~/.lftp/irproductions.conf << 'EOF'
set ftp:ssl-allow yes
set ftp:ssl-force yes
set ssl:verify-certificate no
set net:timeout 60
set net:max-retries 3
set xfer:log yes
set xfer:log-file ~/lftp_transfer.log
EOF
```

### Interactive Session
```bash
# Connect to FTP server
lftp ftp.yourhosting.com -u username,password

# Navigate to public_html or www directory
cd /public_html

# Mirror entire local build to remote
mirror -R ./frontend/dist /

# Or mirror specific files
mirror -R ./portfolio-download.html /

# Exit
quit
```

### Automated Script (Non-Interactive)
```bash
#!/bin/bash
# deploy.sh - Run from project root

FTP_HOST="ftp.yourhosting.com"
FTP_USER="your_username"
FTP_PASS="your_password"
FTP_PATH="/public_html"

echo "Starting deployment..."

lftp -c "
open -u $FTP_USER,$FTP_PASS ftp://$FTP_HOST;
cd $FTP_PATH;
mirror -R --verbose --delete ./frontend/dist ./;
mirror -R --verbose --delete ./portfolio-download.html ./;
close;
quit;
"

echo "Deployment complete!"
```

### Selective File Upload
```bash
# Connect and upload specific files
lftp ftp.yourhosting.com -u username,password << 'ENDLFTP'
cd /public_html
put ./frontend/dist/index.html
put ./portfolio-download.html
mput ./frontend/dist/assets/*.js
mput ./frontend/dist/assets/*.css
mput ./frontend/dist/assets/*.png
mput ./frontend/dist/assets/*.jpg
mput ./frontend/dist/assets/*.svg
bye
ENDLFTP
```

## Manual Build & Deploy

### 1. Build the React App
```bash
cd /mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main/frontend
npm run build
```

### 2. Copy static files
```bash
# Copy portfolio-download.html to dist
cp ../portfolio-download.html ./dist/

# Copy _redirects for Netlify-style routing
cp _redirects ./dist/ 2>/dev/null || true
```

### 3. Upload contents of `./dist/` to your hosting's public directory

## Recommended Directory Structure on Hosting

```
/public_html/
├── index.html
├── portfolio-download.html
├── _redirects
└── assets/
    ├── *.js
    ├── *.css
    └── images...
```

## Troubleshooting

### SSL Certificate Errors
```bash
# Disable SSL verification (not recommended for production)
set ssl:verify-certificate no
```

### Connection Timeout
```bash
# Increase timeout
set net:timeout 120
```

### Upload Errors
```bash
# Use passive mode
set ftp:passive-mode true

# Or force active mode
set ftp:passive-mode false
```

### Verify Upload
```bash
# Compare local and remote file counts
lftp ftp.yourhosting.com -u username,password -c "
cd /public_html
glob -a echo *
" | wc -l
```

## Current Dev Server
- URL: http://100.93.134.33:8082/
- Portfolio: http://100.93.134.33:8082/portfolio
- Brochure: http://100.93.134.33:8082/portfolio-download.html

## Production URL
- www.MasterLukasMoyano.com