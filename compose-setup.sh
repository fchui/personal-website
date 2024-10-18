
echo $'Change current domain name value? y or n?' 
awk -F '[$()]+' '/DOMAIN/{print $1$2}' .env;  source .env; 
while true; do
    read -p $'' yn
    case $yn in
        [Yy]* ) read -p "Write in new domain name:" domain; sed -i~ "/^DOMAIN_NAME=/s/=.*/=${domain}/" .env; 
            echo "New domain changed to: ${domain}"; break;;
        [Nn]* ) break;; 
        * ) echo "Please answer yes or no";;
    esac
done

while true; do
    read -p $'Run nginx in staging mode or production mode? s=staging, p=production \n' sp
    case $sp in
        [Ss]* ) cp ./nginx-conf/nginx.staging.conf ./nginx-conf/nginx.conf; echo -e "Staging config loaded"; break;;
        [Pp]* ) cp ./nginx-conf/nginx.prod.conf ./nginx-conf/nginx.conf; echo -e "Production config loaded"; break;;
        * ) echo "Please answer staging or production.";;
    esac
done

while true; do
    read -p $'Would you like a staging certificate, a production certificate (rate limited),or reinstall an existing one? 
            s=staging, p=production, r=reinstall\n' certificate
    case $certificate in
        [Ss]* ) sed -i~ '/^CERTBOT_OPTION=/s/=.*/=staging/' .env; echo -e "Staging Certification config loaded"; break;;
        [Pp]* ) sed -i~ '/^CERTBOT_OPTION=/s/=.*/=force-renewal/' .env; echo -e "Production Certification config loaded"; break;;
        [Rr]* ) sed -i~ '/^CERTBOT_OPTION=/s/=.*/=reinstall/' .env; echo -e "Reinstall Certification config loaded"; break;;
        * ) echo "Please answer staging, production, reinstall.";;
    esac
done

