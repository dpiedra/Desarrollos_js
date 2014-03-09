
#!/bin/sh

nginx -s stop
echo "Parado nginx en 8080"
nginx
echo "Iniciado nginx en 8080"
