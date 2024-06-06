#  Metaphoto
This project is consists of a Next.js frontend and an express backedend, it is deployed using aws s3 and elastic beanstalk.

---

## Frontend


### Previous requirements

- Node.js (v20 or up)
- npm (v10 or up) 

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/inrock96/metaphoto.git
    cd metaphoto
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Configure environment variables:

    Create a `.env.local` file in the root of the project and add this variables
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```

### Development execution

    ```sh
    npm run dev
    ```
    The application will run in  `http://localhost:3000`.

### Build for production

    ```sh
    npm run build
    npm run start
    ```

    The application will run in  `http://localhost:3000`.

---

## Backend


### Previous requirements


- Node.js (v20 or up)
- npm (v10 or up)
### Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/inrock96/metaphoto.git
    cd metaphoto-api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Configure environment variables:

    Create a `.env` file in the root of the project and add this variables:

    ```env
    PORT=3000
    ```

### Ejecución en Desarrollo

    ```sh
    npm run dev
    # o
    yarn dev
    ```

    La API estará disponible en `http://localhost:3000`.

### Construcción para Producción

    ```sh
    npm run build
    npm run start
    # o
    yarn build
    yarn start
    ```

    La API estará disponible en `http://localhost:3000`.

---

## Despliegue

El despliegue se realiza utilizando AWS Elastic Beanstalk para el backend y AWS S3 para el frontend.

### Frontend deploy to AWS S3

1. Build project:

    ```sh
    npm run build
    ```

2. Sync files to S3 Bucket:

    ```sh
    aws s3 sync out/ s3://bucket-s3 --delete
    ```

### Backend deployment to AWS Elastic Beanstalk

1. Install AWS Elastic Beanstalk CLI:

    ```sh
    pip install awsebcli --upgrade --user
    ```

2. Initialize Elastic Beanstalk:

    ```sh
    eb init
    ```

    Follow the instructions to create your application (Node.js).

3. Crea un entorno:

    ```sh
    eb create my-environment
    ```

    Replace  `my-environment` with your environment.

4. Deploy the application:

    ```sh
    eb deploy
    ```



