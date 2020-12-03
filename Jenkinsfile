node {
    checkout scm

    stage("Test code") {
        // sh 'npm install'
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
        withKubeConfig([credentialsId: 'kube_config_file', serverUrl: 'https://192.168.1.39:6443']) {
            sh "kubectl apply -f App.yaml"
            sh 'kubectl get pods -o wide'
     }
   }
}
