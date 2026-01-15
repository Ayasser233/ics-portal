#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Angular deployment process...${NC}"

# Step 1: Install dependencies
echo -e "${YELLOW}Step 1: Installing dependencies...${NC}"
npm ci
if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to install dependencies${NC}"
    exit 1
fi

# Step 2: Build the application
echo -e "${YELLOW}Step 2: Building Angular application for production...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed${NC}"
    exit 1
fi

# Step 3: Copy to nginx directory
echo -e "${YELLOW}Step 3: Deploying to nginx...${NC}"
NGINX_DIR="/usr/share/nginx/html"
BUILD_DIR="dist/ics-frontend/browser"

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}Build directory not found: $BUILD_DIR${NC}"
    exit 1
fi

# Create backup of current deployment (if exists)
if [ -d "$NGINX_DIR" ] && [ "$(ls -A $NGINX_DIR)" ]; then
    BACKUP_DIR="/tmp/nginx-backup-$(date +%Y%m%d-%H%M%S)"
    echo -e "${YELLOW}Creating backup at $BACKUP_DIR${NC}"
    sudo mkdir -p "$BACKUP_DIR"
    sudo cp -r "$NGINX_DIR"/* "$BACKUP_DIR/"
fi

# Copy built files to nginx directory
echo -e "${YELLOW}Copying files to $NGINX_DIR${NC}"
sudo rm -rf "$NGINX_DIR"/*
sudo cp -r "$BUILD_DIR"/* "$NGINX_DIR/"

# Step 4: Copy nginx configuration
echo -e "${YELLOW}Step 4: Updating nginx configuration...${NC}"
sudo cp nginx.conf /etc/nginx/conf.d/default.conf

# Step 5: Test and reload nginx
echo -e "${YELLOW}Step 5: Testing nginx configuration...${NC}"
sudo nginx -t
if [ $? -ne 0 ]; then
    echo -e "${RED}Nginx configuration test failed${NC}"
    exit 1
fi

echo -e "${YELLOW}Reloading nginx...${NC}"
sudo systemctl reload nginx
if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to reload nginx${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Deployment completed successfully!${NC}"
echo -e "${GREEN}Your Angular app is now running on nginx${NC}"
