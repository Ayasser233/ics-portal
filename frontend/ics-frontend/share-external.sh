#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}     External Access Setup for Angular App${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo ""

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

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo -e "${YELLOW}ngrok is not installed${NC}"
    echo ""
    echo -e "${BLUE}Option 1: Install ngrok (Recommended for quick sharing)${NC}"
    echo "1. Visit: https://ngrok.com/download"
    echo "2. Download ngrok for Linux"
    echo "3. Extract and move to /usr/local/bin:"
    echo "   sudo mv ngrok /usr/local/bin/"
    echo "4. Sign up for free account at: https://dashboard.ngrok.com/signup"
    echo "5. Get your auth token and run:"
    echo "   ngrok authtoken YOUR_TOKEN"
    echo ""
    echo -e "${BLUE}Option 2: Use LocalTunnel (No signup required)${NC}"
    echo "Run: npm install -g localtunnel"
    echo "Then: lt --port 8080"
    echo ""
    echo -e "${BLUE}Option 3: Use your router (for local network)${NC}"
    echo "1. Find your local IP: ip addr show | grep 'inet '"
    echo "2. Forward port 8080 on your router"
    echo "3. Share: http://YOUR_PUBLIC_IP:8080"
    echo ""
    exit 1
fi

# Start ngrok tunnel
echo -e "${GREEN}Starting ngrok tunnel...${NC}"
echo -e "${YELLOW}This will create a public URL for your application${NC}"
echo ""

# Kill any existing ngrok process
pkill ngrok 2>/dev/null

# Start ngrok in background
ngrok http 8080 > /dev/null &
NGROK_PID=$!

# Wait for ngrok to start
sleep 2

# Get the public URL
PUBLIC_URL=$(curl -s http://localhost:4040/api/tunnels | grep -o 'https://[^"]*\.ngrok-free\.app' | head -1)

if [ -z "$PUBLIC_URL" ]; then
    PUBLIC_URL=$(curl -s http://localhost:4040/api/tunnels | grep -o 'https://[^"]*\.ngrok\.io' | head -1)
fi

if [ -z "$PUBLIC_URL" ]; then
    echo -e "${RED}Failed to get ngrok URL${NC}"
    echo -e "${YELLOW}Check if ngrok is properly configured with auth token${NC}"
    echo "Run: ngrok authtoken YOUR_TOKEN"
    exit 1
fi

echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ Your application is now publicly accessible!${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${GREEN}Share this URL with your media team:${NC}"
echo -e "${BLUE}${PUBLIC_URL}${NC}"
echo ""
echo -e "${YELLOW}Note: This URL is temporary and will expire when you stop the tunnel${NC}"
echo -e "${YELLOW}To view ngrok dashboard: http://localhost:4040${NC}"
echo ""
echo -e "${GREEN}Press Ctrl+C to stop the tunnel${NC}"
echo ""

# Keep the script running
wait $NGROK_PID
