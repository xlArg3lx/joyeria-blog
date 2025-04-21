#!/bin/bash
set -e

# 1. Corrección nuclear de rutas
DOCUMENT_ROOT="/var/www/html/public"
sed -i "s|/var/ww/html|${DOCUMENT_ROOT}|g" /etc/apache2/sites-enabled/*.conf

# 2. Configuración Apache garantizada
cat > /etc/apache2/sites-available/000-default.conf <<EOL
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot ${DOCUMENT_ROOT}

    <Directory ${DOCUMENT_ROOT}>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        DirectoryIndex index.php

        # Especificación explícita para archivos PHP
        <FilesMatch \.php$>
            SetHandler "proxy:unix:/var/run/php/php8.2-fpm.sock|fcgi://localhost"
        </FilesMatch>
    </Directory>

    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
EOL

# 3. Permisos atómicos
chown -R www-data:www-data /var/www/html
find /var/www/html -type d -exec chmod 755 {} \;
find /var/www/html -type f -exec chmod 644 {} \;
chmod 644 ${DOCUMENT_ROOT}/.htaccess

# 4. OPTIMIZACIONES LARAVEL (Tu configuración original)
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 4. Reinicio limpio
a2enmod rewrite proxy_fcgi
a2dismod mpm_event
a2enmod mpm_prefork
a2dissite 000-default.conf
a2ensite 000-default.conf

# 5. Iniciar servicios
service apache2 restart
exec apache2-foreground
