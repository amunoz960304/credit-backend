# Paso 1: Renombrar el archivo .env.example por .env, la informacion del .env.example ya contiene

# los datos correctos para la conexion con el contenedor de MYSQL, dicho contenedor tiene un dump con datos de prueba y un store procedure.

#

# Paso 2: Ejecutar el comando docker compose up -d para levantar el contenedor del aplicativo Nest

#

# Nota: Los puertos por defecto de mysql y nest son 3306 y 3000

# Paso 3: Para hacer pruebas en los endpoints se genero documentacion con SWAGGER, y url es localhost:3000/api/

#

# Nota: Swagger ya trae los valores en el servicio de auth para generar el token de autenticacion para el resto de los servicios

# en caso de requerir un usuario nuevo, el servicio de crear usuarios esta disponible y no requiere autenticacion
