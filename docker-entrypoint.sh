#!/bin/bash
set -e

# Activar el modo de mantenimiento si es necesario
# php artisan down --no-interaction

# Optimizaciones de caché
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Corregir permisos de almacenamiento
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Desactivar el modo de mantenimiento
# php artisan up --no-interaction

# Ejecutar Apache en primer plano
exec "$@"
