# UK GovWatch Pro - Deployment Guide

## Local Development

1. **Clone the repository**
```bash
git clone https://github.com/rowbot1/uk-govwatch-pro.git
cd uk-govwatch-pro
```

2. **Start services with Docker Compose**
```bash
docker-compose up -d
```

3. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Production Deployment

### Option 1: Docker Deployment (Recommended)

1. **Set up environment variables**
```bash
cp .env.example .env.production
# Edit .env.production with production values
```

2. **Build and run production images**
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Option 2: Cloud Deployment

#### AWS Deployment
- Use ECS with Fargate for containers
- RDS PostgreSQL for database
- ElastiCache for Redis
- CloudFront for CDN
- Route 53 for DNS

#### DigitalOcean Deployment
- App Platform for containers
- Managed PostgreSQL
- Managed Redis
- Spaces CDN

#### Vercel + Railway
- Vercel for Next.js frontend
- Railway for FastAPI backend
- Railway PostgreSQL
- Railway Redis

### GitHub Actions Setup

1. **Create GitHub repository**
```bash
git remote add origin https://github.com/rowbot1/uk-govwatch-pro.git
git branch -M main
git push -u origin main
```

2. **Set up secrets in GitHub**
- Go to Settings > Secrets and variables > Actions
- Add required secrets:
  - `DATABASE_URL`
  - `REDIS_URL`
  - `STRIPE_SECRET_KEY`
  - `SMTP_PASSWORD`

3. **Enable GitHub Actions**
- Workflows will run automatically on push

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://user:pass@localhost/ukgovwatch
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-secret-key
STRIPE_SECRET_KEY=sk_test_...
CONTRACTS_FINDER_API_KEY=your-api-key
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## SSL/TLS Setup

1. **Using Let's Encrypt**
```bash
docker-compose exec nginx certbot --nginx -d yourdomain.com
```

2. **Using Cloudflare**
- Enable Full SSL/TLS encryption
- Use Cloudflare origin certificates

## Monitoring

1. **Set up Sentry**
- Add `SENTRY_DSN` to environment variables
- Errors will be tracked automatically

2. **Set up logging**
- Logs are stored in `/var/log/ukgovwatch/`
- Use CloudWatch, Datadog, or similar for aggregation

## Backup Strategy

1. **Database backups**
```bash
# Daily backup script
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql
```

2. **Set up automated backups**
- Use managed database backup features
- Store backups in S3 or similar

## Scaling

1. **Horizontal scaling**
- Use Kubernetes or Docker Swarm
- Load balance with nginx or ALB

2. **Database optimization**
- Add read replicas for scaling reads
- Use connection pooling

## Security Checklist

- [ ] Change all default passwords
- [ ] Enable firewall rules
- [ ] Set up rate limiting
- [ ] Enable CORS properly
- [ ] Use environment variables for secrets
- [ ] Enable SSL/TLS
- [ ] Set up security headers
- [ ] Regular security updates

## Troubleshooting

### Common Issues

1. **Database connection errors**
```bash
docker-compose logs postgres
# Check DATABASE_URL format
```

2. **Redis connection errors**
```bash
docker-compose logs redis
# Ensure Redis is running
```

3. **Frontend build errors**
```bash
cd frontend && npm install
npm run build
```

## Support

For deployment support, please check the documentation or open an issue on GitHub.