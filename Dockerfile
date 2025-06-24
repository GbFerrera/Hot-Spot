FROM node:18-alpine

# Criar diretório da aplicação
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código da aplicação
COPY . .

# Configurar para ambiente de produção
ENV NODE_ENV=production

# Expor porta do servidor
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["node", "src/server.js"]
