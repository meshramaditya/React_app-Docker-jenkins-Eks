pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git 'repo-url'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t react-prod:$BUILD_NUMBER .'
            }
        }

        stage('Push') {
            steps {
                sh '''
                docker tag react-prod:$BUILD_NUMBER yourdockerhub/react-prod:$BUILD_NUMBER
                docker push yourdockerhub/react-prod:$BUILD_NUMBER
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                kubectl set image deployment/react-app \
                react-app=yourdockerhub/react-prod:$BUILD_NUMBER
                '''
            }
        }
    }
}