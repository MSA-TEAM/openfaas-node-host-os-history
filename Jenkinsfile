#!/usr/bin/env groovy

node {
    
    stage('Checkout') {
        checkout scm
    }


    stage('Build') {

            sh 'faas-cli build -f openfaas-*.yml '

    }


}
