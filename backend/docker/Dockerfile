FROM postgres:14

RUN apt-get update && apt-get install -y postgresql-contrib

ADD create.sh /docker-entrypoint-initdb.d/
RUN chmod 755 /docker-entrypoint-initdb.d/create.sh
