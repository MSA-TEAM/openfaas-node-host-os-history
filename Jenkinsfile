#!/usr/bin/env groovy

node {
    
    stage('Checkout') {
        checkout scm
    }


    stage('Build') {

            sh 'faas-cli build -f openfaas-*.yml '

    }

    stage('Push') {

            sh 'faas-cli push -f openfaas-*.yml '

    }

    stage('Deploy') {

            sh 'faas-cli deploy -f openfaas-*.yml '

    }
}
