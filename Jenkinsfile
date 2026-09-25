pipeline {
    agent any
    
    environment {
        // Extraemos las claves de la caja fuerte privada de Jenkins
        FTP_HOST = sh(script: 'grep "^FTP_HOST=" /var/lib/jenkins/.env_nexus | cut -d"=" -f2 | tr -d \\" | tr -d \\\'', returnStdout: true).trim()
        FTP_USER = sh(script: 'grep "^FTP_USER=" /var/lib/jenkins/.env_nexus | cut -d"=" -f2 | tr -d \\" | tr -d \\\'', returnStdout: true).trim()
        FTP_PASS = sh(script: 'grep "^FTP_PASSWORD=" /var/lib/jenkins/.env_nexus | cut -d"=" -f2 | tr -d \\" | tr -d \\\'', returnStdout: true).trim()
        FTP_DIR  = sh(script: 'grep "^FTP_REMOTE_PATH=" /var/lib/jenkins/.env_nexus | cut -d"=" -f2 | tr -d \\" | tr -d \\\'', returnStdout: true).trim()
    }

    stages {
        stage('Preparar Entorno') {
            steps {
                // Le inyectamos el .env secreto a React para que Vite encuentre la API Key de IA
                sh 'cp /var/lib/jenkins/.env_nexus .env'
            }
        }

        stage('Construir (React/Vite)') {
            steps {
                sh 'npm install'
                sh 'cd frontend && npm install && npm run build'
            }
        }
        
        stage('Caballo de Troya (Comprimir)') {
            steps {
                sh '''
                cd frontend/dist
                zip -r ../../deploy.zip ./*
                cd ../..
                
                cat << 'EOF' > unzip.php
<?php
$zip = new ZipArchive;
if ($zip->open('deploy.zip') === TRUE) {
    $zip->extractTo('./');
    $zip->close();
    unlink('deploy.zip');
    unlink(__FILE__);
    echo 'SUCCESS';
} else {
    echo 'FAILED';
}
?>
EOF
                '''
            }
        }
        
        stage('Despliegue Sigiloso (Bypass WAF Claro)') {
            steps {
                sh 'lftp -c "open -u $FTP_USER,$FTP_PASS $FTP_HOST; put deploy.zip -o $FTP_DIR/deploy.zip; put unzip.php -o $FTP_DIR/unzip.php"'
                sh 'curl -s "http://masterlukasmoyano.com/unzip.php"'
            }
        }
    }
    
    post {
        success {
            sh '/usr/local/bin/gws-jenkins-notify "Web Desplegada: IR Nexus" "$BUILD_URL"'
        }
        failure {
            sh '/usr/local/bin/gws-jenkins-crear-tarea "🚨 Caída en despliegue de IR Nexus" "$BUILD_URL"'
        }
    }
}
