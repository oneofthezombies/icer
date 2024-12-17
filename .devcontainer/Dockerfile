FROM mcr.microsoft.com/devcontainers/base:debian-12

SHELL ["/bin/bash", "-c"]

ENV DEBIAN_FRONTEND=noninteractive

# Since I am prototyping, I will do RUN optimization later.
RUN apt update
RUN apt install -y curl
RUN apt install -y git
RUN apt clean && \
    rm -rf /var/lib/apt/lists/*

USER vscode
WORKDIR /icer

RUN curl https://get.volta.sh | bash
ENV PATH="/home/vscode/.volta/bin:${PATH}"

RUN volta install node@22.12.0
RUN volta install npm@10.9.2
RUN volta install eslint@9.17.0
RUN volta install sort-package-json@2.12.0
RUN volta install typescript@5.7.2
RUN volta install tsx@4.19.2
RUN volta install vitest@2.1.8

RUN unset DEBIAN_FRONTEND
