FROM node:8.7

ENV NODE_ENV development

### INSTALL DEBIAN DEPENDENCIES
RUN set -x &&                  \
    apt-get update &&          \
    apt-get upgrade -y &&      \
    apt-get dist-upgrade -y && \
    apt-get install -y         \
		git                        \
    vim                        \
    curl                       \
    nano                       \
    wget                       \
    bzip2                      \
    xz-utils                   \
    vim-tiny                   \
    build-essential            \
    bash-completion            \
    python-software-properties \
    --no-install-recommends && \
    apt-get autoremove -y   && \
    apt-get autoclean -y    && \
    apt-get clean -y        && \
    rm -r /var/lib/apt/lists/*

USER node
WORKDIR /home/node

CMD ["/bin/bash"]
