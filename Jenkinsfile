pipeline {

    agent any

    tools {
            nodejs "20.19.4"
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