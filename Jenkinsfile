pipeline {
    agent any 
    stages {
        stage('Build'){
            steps{
                script{
                    bat "docker login"
                    bat "docker build -t week9image ."
                    bat "docker run -d -p 3005:3005 week9image"
                }
            }
        }
        stage('test'){
            steps{
                script{
                    echo "testing."
                }
            }
        }
        stage('deploy'){
            steps{
                script{
                    echo "deploying."
                }
            }
        }
    }
}
