FROM    ubuntu:14.04
MAINTAINER Ean Wong

RUN apt-get update && apt-get install -y \
    curl \
    npm \
    nodejs;

# Install Node.js via NVM
# compatibility fix for node on ubuntu
RUN ln -s /usr/bin/nodejs /usr/bin/node;
# install nvm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | sh;

# invoke nvm to install node
RUN cp -f ~/.nvm/nvm.sh ~/.nvm/nvm-tmp.sh; \
    echo "nvm install 0.12.0; nvm alias default 0.12.0" >> ~/.nvm/nvm-tmp.sh; \
    sh ~/.nvm/nvm-tmp.sh; \
    rm ~/.nvm/nvm-tmp.sh;

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
