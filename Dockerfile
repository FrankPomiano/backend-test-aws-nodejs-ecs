# filepath: /mantenimiento-personas/Dockerfile
# Usar una imagen base de Node.js
FROM node

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]