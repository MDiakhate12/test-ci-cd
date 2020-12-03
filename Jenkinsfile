node {
    checkout scm
    
    environment {
        KUBERNETES_CONFIGURATION_FILE = 'App.yaml'
        SERVER_URL = 'https://192.168.1.39:6443'
        CREDENTIALS_ID = credentials('kube_config_file')
    }

    stage("Test code") {
        sh 'npm install'
        sh 'npm test'
    }
    
    stage("Build and Publish Docker Image") {
        docker.withRegistry('', 'docker_hub') {

        def customImage = docker.build("mdiakhate12/node-cicd:${BUILD_ID}")

        /* Push the container to the custom Registry */
        customImage.push()
        } 
    }
    
    stage('Apply Kubernetes files') {
        withKubeConfig([credentialsId: $CREDENTIALS_ID, serverUrl: $SERVER_URL]) {
            sh "kubectl apply -f $KUBERNETES_CONFIGURATION_FILE"
            sh 'kubectl get pods'
     }
   }
}
