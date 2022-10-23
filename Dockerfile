FROM jjolon/cert-gestor:1.0.0
EXPOSE 80

COPY vhost.conf /etc/apache2/sites-available/000-default.conf