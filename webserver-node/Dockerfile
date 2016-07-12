############################### DOCKER-MACHINE specific commands for OS, etc.

# Original image this image will be based on
# Has linux, npm, and node
# Uses a .dockerignore
FROM node:argon

############################### APPLICATION specific Docker commands
##### This docker file assumes a package.json with a start script is in 
##### the file directory context

# Copy all files (excluding those in .dockerignore) to the dir src/ in the container
COPY    . /src

# Switch to src/ 
WORKDIR /src/

# Installs packages associated with package.json
RUN ["/bin/bash", "-c", "npm install"]


############################## INTERFACING specific commands

# When the container is run, this is the default cmd run.
ENTRYPOINT ["npm", "start"]

# Exposes the container port 3000 to be available to connect with the host machine
EXPOSE 3000

############################## TYPICAL SETUP / RUN COMMANDS

# $ docker build -t <image name> .
# $ run -itd -P --name <container name> <image name> (-P maps exposed ports to available ports)
# $ docker logs -f <container_name>
# $ docker-machine ip (gives you the docker-machine ip to look for on your dev computer)

# Viewable from http://<docker-machine-ip>:<docker-machine port in use> 
