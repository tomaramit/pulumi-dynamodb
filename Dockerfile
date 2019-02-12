FROM amittomar84/pulumi-base:v1.1

COPY credentials /root/.aws/ 
COPY app/* /src/app/

WORKDIR /src/app/

ENTRYPOINT ["./run.sh"]
