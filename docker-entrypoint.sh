#!/bin/bash
set -e

# 1. CORRECCIÓN DE RUTAS APACHE (Error crítico detectado)
sed -i 's|/var/ww/html|/var/www/html|g' /etc/apache2/sites-enabled/*.conf

# 2. CONFIGURACIÓN ESENCIAL DE APACHE
echo "ServerName localhost" >> /etc/apache2/apache2.conf
echo "<Directory /var/www/html/public>
    Options FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>" >> /etc/apache2/apache2.conf

# 3. PERMISOS Y ESTRUCTURA (Arregla el error 403)
chown -R www-data:www-data /var/www/html
find /var/www/html -type d -exec chmod 755 {} \;
find /var/www/html -type f -exec chmod 644 {} \;
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache
chmod 644 /var/www/html/public/.htaccess

# 4. OPTIMIZACIONES LARAVEL (Tu configuración original)
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 5. HABILITAR MÓDULOS APACHE
a2enmod rewrite
a2enmod headers

# 6. EJECUCIÓN PRINCIPAL
exec apache2-foreground
