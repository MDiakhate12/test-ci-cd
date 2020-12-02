pipeline {
    agent any
    stages {
        stage("unit tests") {
            steps {
                sh "npm test"
            }
        }
        // stage("build application") {
        //     steps {
        //         sh "docker build -t mdiakhate12/node-cicd:latest ."
        //         sh "docker push mdiakhate12/node-cicd:latest"
        //     }
        // }
        // stage("deploy application") {
        //     steps {
        //         sh "kubectl apply -f App.yaml"
        //         sh "kubectl get pods"
        //     }
        // }
    }
}