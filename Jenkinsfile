node {
    checkout scm
    
    stage("Build and Publish Docker Image") {
       docker.withRegistry('https://https://hub.docker.com/', 'docker_hub') {

        def customImage = docker.build("mdiakhate12/node-cicd:${env.BUILD_ID}")

        /* Push the container to the custom Registry */
        customImage.push()
    } 
    }
       stage('Apply Kubernetes files') {
     withKubeConfig([credentialsId: 'kube_config_file', serverUrl: 'https://192.168.1.39:6443']) {
      sh 'kubectl get pods --all-namespaces'
     }
   }
}
