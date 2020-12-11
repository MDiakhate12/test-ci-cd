node {
    checkout scm

    stage("Test code") {
        // sh "npm install"
        sh "npm test"
    }
    
    stage('SonarQube analysis') {
        def scannerHome = tool 'sonarqube_scanner';
        withSonarQubeEnv('sonarqube_server') { // If you have configured more than one global server connection, you can specify its name
            println("${scannerHome}")
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
    
    stage("Build and Publish Docker Image") {
        docker.withRegistry('', 'docker_hub') {

        def customImage = docker.build("mdiakhate12/node-cicd:${BUILD_ID}")

        /* Push the container to the custom Registry */
        customImage.push("${BUILD_ID}")
        customImage.push("latest")
        } 
    }
    stage("Remove Docker Image From Local") {
        sh "docker rmi mdiakhate12/node-cicd:${BUILD_ID}"
    }
    
    stage('Apply Kubernetes files') {
        withKubeConfig([credentialsId: 'kube_config_file', serverUrl: 'https://192.168.1.39:6443']) {
            sh "kubectl apply -f App.yaml"
            sh 'kubectl get pods -o wide'
     }
   }
}
