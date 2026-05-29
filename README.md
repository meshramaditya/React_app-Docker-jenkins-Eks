# TechLearn - React, Docker, Jenkins, and EKS

TechLearn is a recruiter-friendly internal learning platform built with React and Vite, packaged with Docker, and prepared for Kubernetes deployment on AWS EKS. The app presents learning tracks, course cards, category filtering, course details, and a clean navigation flow that is easy to demo in interviews.

## What This Project Shows

- React 19 with modern component and context patterns
- Vite-based local development and production builds
- Docker multi-stage image build with Nginx runtime
- Kubernetes deployment and LoadBalancer service
- EKS-ready app packaging for cloud deployment
- Clear UI structure that is easy to explain to recruiters


## Application Structure

```text
src/
├── App.jsx
├── main.jsx
├── App.css
├── index.css
├── components/
├── context/
├── pages/
├── services/
└── utils/

k8s/
├── deployment.yaml
└── service.yaml
```

## How It Works

```mermaid
flowchart LR
  Developer --> GitHub[GitHub Repository]
  GitHub --> Jenkins[Jenkins Pipeline]
  Jenkins --> Build[Build React App]
  Build --> Docker[Create Docker Image]
  Docker --> Registry[Push to Docker Hub]
  Registry --> EKS[AWS EKS Cluster]
  EKS --> Service[LoadBalancer Service]
  Service --> Users[Users Access the App]
```
## Meaningful Commands

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Docker Commands

```bash
docker build -t techlearn-app:v1 .
docker run -d -p 8080:8080 techlearn-app:v1
docker tag techlearn-app:v1 yourdockerhub/techlearn-app:v1
docker push yourdockerhub/techlearn-app:v1
```

## Kubernetes And EKS Commands

```bash
eksctl create cluster ^
  --name techlearn-cluster ^
  --region ap-southeast-2 ^
  --nodegroup-name worker-nodes ^
  --node-type t3.small ^
  --nodes 2 ^
  --managed

kubectl get nodes
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl get pods
kubectl get svc
```
## Work Images

### Application Running Locally
<img width="1897" height="1004" alt="Screenshot 2026-05-30 002431" src="https://github.com/user-attachments/assets/35815ba1-a1b7-47e4-b40f-8958220e1e4c" />

### Docker Build &  Docker Image
<img width="1897" height="1004" alt="Screenshot 2026-05-30 002605" src="https://github.com/user-attachments/assets/bac02d5e-7b20-4c44-90b6-318110073e65" />

## Run containerized applications
<img width="1895" height="908" alt="image" src="https://github.com/user-attachments/assets/f44c3b6c-47dc-4798-a1ad-3f5d31768aa0" />
<img width="1898" height="937" alt="image" src="https://github.com/user-attachments/assets/6398663c-8df3-4ffa-8293-1fb37eacdbb7" />

### Docker Hub Repository
<img width="1897" height="874" alt="Screenshot 2026-05-29 090513" src="https://github.com/user-attachments/assets/f1a6164f-420e-4399-9214-ae6017442f27" />

### EKS Cluster Creation
<img width="1878" height="827" alt="Screenshot 2026-05-30 002846" src="https://github.com/user-attachments/assets/ed464346-17ef-41f9-8c6f-87ca6b7c8acb" />

### Kubernetes Nodes, Deployment, Pods, Service, Namespace
<img width="1888" height="839" alt="Screenshot 2026-05-30 004354" src="https://github.com/user-attachments/assets/dacdc1b6-115b-4442-b5ac-c22dbab9dbf1" />


### Application Through ELB
<img width="1897" height="922" alt="Screenshot 2026-05-30 003145" src="https://github.com/user-attachments/assets/747a58e6-f6db-4cb1-ba2e-c85d8654b6a5" />


## Project Layout

- `src/components` contains reusable UI blocks for the course platform.
- `src/context` holds state management for page navigation, filtering, and enrollment.
- `src/pages` keeps the route-level views organized and easy to demo.
- `src/services` isolates the course data loading logic.
- `public/images` stores visual assets used in the README and app branding.
- `k8s` contains the deployment and service manifests for cluster rollout.

## Deployment Notes

- The container listens on port `8080`.
- The Kubernetes service exposes the app on port `80` and forwards to the container port `8080`.
- The Dockerfile uses a multi-stage build so the runtime image stays small and production-ready.

## Good Demo Talking Points

- Clean internal learning UI with featured courses and category filtering.
- Context-driven state management without unnecessary complexity.
- Ready for Docker, Kubernetes, Jenkins, and AWS EKS deployment workflows.
- Easy to present in an interview because the folder structure maps directly to product features.

## Covered Topics

- Git and GitHub
- Jenkins CI/CD
- Docker and Docker Hub
- Kubernetes manifests and services
- AWS EKS deployment
- React component architecture
- Production build and runtime serving
