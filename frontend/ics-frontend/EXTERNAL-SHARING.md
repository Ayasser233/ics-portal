# Sharing Your Angular App Externally

## Quick Start - Share with Your Media Team

Your application runs on port 8080. Choose one of these methods to share it externally:

### Option 1: ngrok (Recommended) ⭐

**Pros:** Fast, secure HTTPS, custom domains available, traffic inspection
**Best for:** Professional sharing, demos, testing webhooks

1. Install ngrok:
```bash
# Download from https://ngrok.com/download
# Or use snap:
sudo snap install ngrok

# Authenticate (free account at https://dashboard.ngrok.com/signup)
ngrok authtoken YOUR_AUTH_TOKEN
```

2. Run the share script:
```bash
./share-external.sh
```

You'll get a public URL like: `https://abc123.ngrok-free.app`

**Features:**
- HTTPS included
- View traffic at http://localhost:4040
- Free tier: 1 online ngrok process, 40 connections/min

### Option 2: LocalTunnel (No Signup Required) 🚀

**Pros:** No account needed, instant setup
**Best for:** Quick shares, testing

1. Run the LocalTunnel script:
```bash
./share-localtunnel.sh
```

You'll get a URL like: `https://random-name.loca.lt`

**Note:** First-time visitors see a warning page with IP confirmation

### Option 3: Tailscale Funnel (Secure & Persistent) 🔒

**Pros:** Secure, works across networks, persistent URLs
**Best for:** Team sharing, long-term access

1. Install Tailscale:
```bash
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up
```

2. Start your app on port 8080
3. Enable Funnel:
```bash
tailscale funnel 8080
```

You'll get a URL like: `https://your-machine.your-tailnet.ts.net`

### Option 4: Cloudflare Tunnel (Production-Ready) ☁️

**Pros:** DDoS protection, analytics, permanent URLs
**Best for:** Production, long-term hosting

1. Install cloudflared:
```bash
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
```

2. Authenticate:
```bash
cloudflared tunnel login
```

3. Create and run tunnel:
```bash
cloudflared tunnel create angular-app
cloudflared tunnel route dns angular-app app.yourdomain.com
cloudflared tunnel run --url http://localhost:8080 angular-app
```

### Option 5: Your Own Server/VPS 🖥️

If you have a VPS or cloud server:

1. Deploy using the docker-compose.yml
2. Configure your domain's DNS:
```
A record: @ -> YOUR_SERVER_IP
A record: www -> YOUR_SERVER_IP
```

3. Update [nginx.conf](nginx.conf) with your domain
4. Add SSL:
```bash
sudo certbot --nginx -d yourdomain.com
```

## Running Your App

First, make sure your app is running:

```bash
# Start with Docker
docker-compose up -d

# Or build and deploy directly
./deploy.sh
```

## Comparison Table

| Method | Setup Time | Cost | HTTPS | Persistent | Auth Required |
|--------|-----------|------|-------|-----------|---------------|
| ngrok | 2 min | Free tier | ✅ | Session | Yes |
| LocalTunnel | 1 min | Free | ✅ | Session | No |
| Tailscale | 3 min | Free | ✅ | ✅ | Yes |
| Cloudflare | 5 min | Free | ✅ | ✅ | Yes |
| Own Server | 30+ min | $5-20/mo | ✅ | ✅ | Optional |

## Security Considerations

When sharing externally:

1. **Don't share sensitive data** - This is a development preview
2. **Use temporary tunnels** for demos (ngrok, LocalTunnel)
3. **Set expiration** - Shut down tunnels when done
4. **Monitor traffic** - Use ngrok dashboard or server logs
5. **Environment variables** - Ensure no secrets in client code

## Current Configuration

Your app runs on:
- **Local:** http://localhost:8080
- **Network:** http://YOUR_LOCAL_IP:8080 (accessible on your network)

To find your local IP:
```bash
ip addr show | grep "inet " | grep -v 127.0.0.1
```

## Troubleshooting

### Port already in use
```bash
# Check what's using port 8080
sudo netstat -tlnp | grep :8080

# Or kill existing containers
docker-compose down
docker-compose up -d
```

### Tunnel not accessible
- Check if Docker container is running: `docker ps`
- Check firewall settings: `sudo ufw status`
- Verify app is responding locally: `curl http://localhost:8080`

### ngrok "Failed to complete tunnel connection"
- Check your auth token: `ngrok authtoken YOUR_TOKEN`
- Verify account limits at https://dashboard.ngrok.com

## Stopping External Access

To stop sharing:

```bash
# Kill ngrok
pkill ngrok

# Kill LocalTunnel
# Press Ctrl+C in the terminal

# Stop Docker container
docker-compose down
```

## Recommended Workflow for Media Team

1. **Quick demo (< 1 hour):**
   ```bash
   ./share-localtunnel.sh
   ```
   Share the URL immediately, no signup needed

2. **Professional demo (meeting/presentation):**
   ```bash
   ./share-external.sh  # uses ngrok
   ```
   Share the URL, they see traffic in ngrok dashboard

3. **Week-long review:**
   - Use Cloudflare Tunnel or own server
   - Set up proper domain
   - Add authentication if needed

## Make Scripts Executable

```bash
chmod +x share-external.sh share-localtunnel.sh
```
