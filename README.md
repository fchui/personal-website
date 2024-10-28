# Dockerized Personal Website: Vite - Express.js - PostgreSQL - nginx - certbot

Dockerized website for quick deployment featuring full-stack with database. Designed to be hosted with VPS and to deploy upon startup. 

Below is a representation of the systems involved:

![image](https://github.com/user-attachments/assets/d8ba4a10-674a-411c-9b0a-9931ecd6c1e7)

The front end communicates with the Backend API to fetch Project data from the database, all within their respective Docker containers connected by a network.

The current code aims to showcase my profile to anybody interested in it.

There is a heavy usage of Mantine library to display UI elements.

Feel free to use my code as your own.

# Quick Start
It is possible to start up the front-end, back-end and database separately. This is a Docker focused project so I assume Docker is already installed in your computer. Then it's one simple command to start up a local development environment.
```bash
docker compose up
```
This command should start up the front-end, back-end and database in one go.

# Deploy from VPS

After installing a new server, create a new user From root
```bash
adduser webserver
sudo usermod -aG sudo webserver
```
Log into the new user and download git repository using git clone. Change directory to personal-website
```bash
git clone https://github.com/fchui/personal-website.git
cd personal-website/
```
Give execution privileges to setup.sh. Run through setup.sh which should install Docker and generate a DH parameter key
```bash
chmod +x setup.sh
sudo ./setup.sh
```
You can create and write a database password in /db/password.txt. Docker will read this file and add it as the database password.
Run the docker compose setup to setup the domain names and docker compose setup. For first time setups always do both staging configs
```bash
./compose-setup.sh
```
```bash
1
y
domainName.com
s
s
```
Set the database password by running compose-setup again with #2 option.
```bash
2
y
hidden-db-password
```
Run docker compose with both configuration files.
```bash
docker compose -f compose.yaml -f compose.webserver.yaml up -d
```
Ensure certbot was able to complete staging successfully. If not then you will have to debug before you move onto the next step.
```bash
docker logs certbot
```
Run compose setup again, this time setup nginx production and certbot production. Certbot production certificates are limited to 5/week per domain, so the staging must be done correctly. Force recreate the webserver to load the new nginx configuration. Then run certbot again to receive new SSL certificate. Confirm it was able to complete successfully with logs. Once it has completed successfully, restart the web server one last time to load the new certificate.
```bash
docker compose -f compose.yaml -f compose.webserver.yaml up -d --no-deps --force-recreate webserver
docker compose -f compose.yaml -f compose.webserver.yaml up -d --no-deps --force-recreate certbot
docker compose -f compose.yaml -f compose.webserver.yaml up -d --no-deps --force-recreate webserver
docker logs certbot
```
Website should now be up running under HTTPS! I suggest run compose-setup again, with NGINX production and Certbot reinstall. This ensures you are not requesting a new certificate whenever Certbot is restarted.
