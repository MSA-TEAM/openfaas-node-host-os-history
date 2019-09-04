#!/usr/bin/env groovy

node {
    
    stage('Checkout') {
        checkout scm
    }

    // stage('Test') {
    //    sh './gradlew test || true'
    // }

    stage('Build') {
        try {
            sh 'faas-cli build -f openfaas-*.yml '
        } catch(e) {
            mail subject: "Jenkins Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) failed with ${e.message}",
                to: 'yonghui.park@kt.com',
                body: "Please go to $env.BUILD_URL."
        }
    }

    // stage('Archive') {
    //     parallel (
    //         "Archive Artifacts" : {
    //             archiveArtifacts artifacts: '**/build/libs/*.war', fingerprint: true
    //         },
    //         "Docker Image Push" : {
    //             sh './gradlew dockerPush'
    //         }
    //     )
    // }

    stage('Push') {
        try {
            sh 'faas-cli push -f openfaas-*.yml '
        } catch(e) {
            mail subject: "Jenkins Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) failed with ${e.message}",
                to: 'yonghui.park@kt.com',
                body: "Please go to $env.BUILD_URL."
        }
       
    }
    stage('Deploy') {
        try {
            sh 'faas-cli deploy -f openfaas-*.yml '
        } catch(e) {
            mail subject: "Jenkins Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) failed with ${e.message}",
                to: 'yonghui.park@kt.com',
                body: "Please go to $env.BUILD_URL."
        }
       
    }
}
