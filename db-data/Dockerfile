FROM stackbrew/busybox:latest
MAINTAINER Ean Wong <eanwong6@gmail.com>

# Create data directory
RUN mkdir -p /data/db

# Create /data volume
VOLUME /data

# $ docker run -itd -P --name <container name> <image name> (-P maps exposed ports to available ports)