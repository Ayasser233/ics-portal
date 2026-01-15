# Angular Nginx Deployment Guide

This guide explains how to deploy your Angular application using nginx.

## Files Created

- **nginx.conf** - Nginx configuration optimized for Angular routing
- **Dockerfile** - Multi-stage Docker build for production deployment
- **docker-compose.yml** - Easy orchestration for containerized deployment
- **deploy.sh** - Automated deployment script for direct nginx installation
- **.dockerignore** - Optimizes Docker build by excluding unnecessary files

## Deployment Options

### Option 1: Docker Deployment (Recommended)

This is the easiest and most portable method.

#### Prerequisites

- Docker installed
- Docker Compose installed

#### Steps

1. Build and run using Docker Compose:

```bash
cd /home/yassora/Development/ics-portal/frontend/ics-frontend
docker-compose up -d --build
```

2. Access your application:

```
http://localhost
```

3. To stop:

```bash
docker-compose down
```

4. To view logs:

```bash
docker-compose logs -f ics-frontend
```

### Option 2: Direct Nginx Installation

Deploy directly to an nginx server on your Linux machine.

#### Prerequisites

- Nginx installed: `sudo apt install nginx`
- Node.js and npm installed

#### Steps

1. Run the deployment script:

```bash
cd /home/yassora/Development/ics-portal/frontend/ics-frontend
./deploy.sh
```

The script will:

- Install dependencies
- Build the Angular app for production
- Backup existing deployment
- Copy files to `/usr/share/nginx/html`
- Update nginx configuration
- Reload nginx

2. Access your application:

```
http://localhost
```

#### Manual Deployment

If you prefer manual deployment:

```bash
# Build the application
npm run build

# Copy files to nginx directory
sudo cp -r dist/ics-frontend/browser/* /usr/share/nginx/html/

# Copy nginx configuration
sudo cp nginx.conf /etc/nginx/conf.d/default.conf

# Test and reload nginx
sudo nginx -t
sudo systemctl reload nginx
```

### Option 3: Production Server Deployment

For deploying to a production server:

1. **Update nginx.conf** for your domain:

```nginx
server_name yourdomain.com www.yourdomain.com;
```

2. **Add SSL/HTTPS** (using Let's Encrypt):

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

3. **Configure API proxy** in nginx.conf:
   - Uncomment the `/api/` location block
   - Update the backend URL to point to your API server

4. **Deploy using the deployment script** or Docker

## Nginx Configuration Features

The nginx.conf includes:

- ✅ **Angular routing support** - All routes redirect to index.html
- ✅ **Gzip compression** - Reduces file sizes for faster loading
- ✅ **Security headers** - X-Frame-Options, X-Content-Type-Options, etc.
- ✅ **Static asset caching** - 1 year cache for images, fonts, etc.
- ✅ **API proxy support** - Ready to proxy requests to your backend

## Environment Configuration

For different environments (development, staging, production):

1. Update your environment files:
   - `src/environments/environment.ts`
   - `src/environments/environment.development.ts`
   - `src/environments/environment.staging.ts`

2. Build with specific configuration:

```bash
# Production
npm run build

# Development
npm run build -- --configuration development

# Staging
npm run build -- --configuration staging
```

## Troubleshooting

### Routes return 404

- Ensure nginx.conf has `try_files $uri $uri/ /index.html;`
- Reload nginx: `sudo systemctl reload nginx`

### CSS/JS not loading

- Check file permissions: `sudo chmod -R 755 /usr/share/nginx/html`
- Clear browser cache

### API calls failing

- Update the API proxy configuration in nginx.conf
- Ensure CORS is configured on your backend

### Docker container not starting

- Check logs: `docker-compose logs ics-frontend`
- Verify port 80 is available: `sudo netstat -tlnp | grep :80`

## Monitoring

View nginx logs:
```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

## Performance Optimization

The configuration already includes:
- Gzip compression for text files
- Long-term caching for static assets
- Security headers

For additional optimization:
- Enable HTTP/2 in nginx
- Use a CDN for static assets
- Implement service workers for PWA features

## Continuous Deployment

To automate deployments:

1. Create a GitHub Actions workflow
2. Use the deploy.sh script in your CI/CD pipeline
3. Or use Docker image push to a registry

## Backup and Rollback

The deploy.sh script automatically creates backups in `/tmp/nginx-backup-<timestamp>`

To rollback:
```bash
sudo cp -r /tmp/nginx-backup-<timestamp>/* /usr/share/nginx/html/
sudo systemctl reload nginx
```
