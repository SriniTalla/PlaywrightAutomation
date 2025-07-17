#!groovy

pipeline {

    agent any

    triggers {
        cron('0 9 * * 1-5')
    }

    tools {
            nodejs "16.11.1"
        }

    stages {
        stage('install playwright') {
            steps {
                sh "npm install"
                sh "node --version"
                sh "npm i -D @playwright/test"
                sh "npx playwright install"
            }
        }
        stage('help') {
            steps {
                sh "npx playwright test --help"
            }
        }
        stage('test') {
            steps {
                sh "npx playwright test --list"
                sh "npx playwright test"
            }
        }
    }
}