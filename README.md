# Project Architecture

Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
    ├── Build React App
    ├── Create Docker Image
    ├── Push Image to Docker Hub
    ▼
AWS EKS Cluster
    │
    ├── Deployment
    ├── Service
    └── Ingress / LoadBalancer
    ▼
Users Access Application

# covered topics 

✅ Git

✅ GitHub

✅ Jenkins CI/CD

✅ Docker

✅ Docker Hub

✅ Kubernetes

✅ AWS EKS

✅ Deployments

✅ Services

✅ Ingress

✅ Rolling Updates

✅ Monitoring

✅ Production Deployment

# react-eks-devops-project/
│
├── app/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── .dockerignore
│
├── kubernetes/
│   ├── namespace.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│
├── jenkins/
│   └── Jenkinsfile
│
├── docs/
│   ├── architecture.png
│   ├── deployment-flow.png
│   └── screenshots/
│
├── README.md
└── .gitignore

