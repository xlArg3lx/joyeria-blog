#!/bin/bash
set -e

# 1. Detener Apache completamente
service apache2 stop || true
pkill -9 apache2 || true

# 2. Limpiar configuraciones previas
rm -f /etc/apache2/sites-enabled/*.conf
rm -f /etc/apache2/ports.conf

# 3. Crear nuevo ports.conf limpio
cat > /etc/apache2/ports.conf <<'EOL'
Listen 80
<IfModule ssl_module>
    Listen 443
</IfModule>
<IfModule mod_gnutls.c>
    Listen 443
</IfModule>
EOL

# 4. Configuración del VirtualHost (mismo que antes)
cat > /etc/apache2/sites-available/000-default.conf <<'EOL'
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/public

    <Directory /var/www/html/public>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
EOL

# 5. Habilitar sitio y módulos
a2ensite 000-default.conf
a2enmod rewrite

# 6. Verificar configuración
apache2ctl configtest || { echo "Error en configuración de Apache"; exit 1; }

# 7. Iniciar Apache
exec apache2ctl -D FOREGROUND
