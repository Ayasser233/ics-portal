#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}     LocalTunnel - Share Your Angular App${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo ""

# Check if localtunnel is installed
if ! command -v lt &> /dev/null; then
    echo -e "${YELLOW}LocalTunnel is not installed. Installing...${NC}"
    npm install -g localtunnel
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to install LocalTunnel${NC}"
        echo "Try manually: npm install -g localtunnel"
        exit 1
    fi
fi

# Check if docker container is running
echo -e "${YELLOW}Checking if application is running...${NC}"
if ! docker ps | grep -q ics-frontend; then
    echo -e "${YELLOW}Starting application with Docker...${NC}"
    docker-compose up -d
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to start application${NC}"
        exit 1
    fi
    sleep 3
fi

echo -e "${GREEN}✓ Application is running on port 8080${NC}"
echo ""

# Start localtunnel
echo -e "${GREEN}Starting LocalTunnel...${NC}"
echo -e "${YELLOW}Creating a public URL for your application${NC}"
echo ""

lt --port 8080
