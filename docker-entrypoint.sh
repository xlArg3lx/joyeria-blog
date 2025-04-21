#!/bin/bash
set -e

# 1. Detener Apache si está corriendo (evita conflictos)
service apache2 stop || true

# 2. Configuración esencial de Apache
echo "ServerName localhost" >> /etc/apache2/apache2.conf
echo "Listen 80" >> /etc/apache2/ports.conf

# 3. Configuración del VirtualHost
cat > /etc/apache2/sites-available/000-default.conf <<EOL
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/public

    <Directory /var/www/html/public>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
EOL

# 4. Habilitar módulos y sitio
a2enmod rewrite
a2ensite 000-default.conf

# 5. Permisos garantizados
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html
chmod 644 /var/www/html/public/.htaccess

# 6. Iniciar Apache en primer plano
exec apache2ctl -D FOREGROUND
