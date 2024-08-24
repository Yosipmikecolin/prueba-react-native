# Prueba técnica de React native

Esta aplicación de React Native que muestra una lista de usuarios generados aleatoriamente utilizando la API de Random User. La aplicación está diseñada para mostrar los primeros 10 usuarios al inicio y cuenta con una funcionalidad de scroll infinito para cargar más usuarios a medida que el usuario se desplaza hacia abajo. Además, puedes ver los detalles de cada usuario, como su nombre, foto, teléfono, email, y dirección.

## Características ✨

- **Lista de Usuarios**: Muestra una lista de usuarios con sus nombres y fotos.
- **Scroll Infinito**: Carga más usuarios automáticamente cuando el usuario llega al final de la lista.
-  **Tipado Estático con TypeScript**: Utiliza TypeScript para proporcionar un tipado estático en el proyecto, mejorando la calidad del código y facilitando el mantenimiento.
- **Detalles del Usuario**: Al hacer clic en un usuario, se navega a una pantalla de detalles que muestra información adicional del usuario, como:
  - **Nombre completo**
  - **Foto**
  - **Teléfono**
  - **Email**
  - **Dirección**
  

## Estructura del Proyecto 🛞

  - `components/`: Carpeta que contiene componentes reutilizables de la aplicación. Aquí se almacenan los bloques de construcción individuales que se pueden usar en diferentes partes de la aplicación.
  - `interfaces/`: Carpeta destinada a definir las interfaces del usuario. Esto puede incluir tipos de datos, interfaces de programación de aplicaciones (APIs), y cualquier otra definición que especifique cómo interactúan los componentes entre sí y con el usuario.
  - `views/`: Carpeta que almacena las vistas de la aplicación. Las vistas representan las diferentes pantallas o secciones que el usuario puede interactuar en la aplicación.
  - `App.tsx`: El archivo principal de la aplicación. Aquí se encuentra el punto de entrada de la aplicación, y generalmente se encarga de renderizar los componentes principales y definir la estructura básica de la aplicación.


## Requisitos Previos 🧩

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu entorno de desarrollo:

- **Node.js** (versión 14 o superior)
- **TypeScript**: Requerido para el funcionamiento del proyecto. Debe estar instalado localmente en el proyecto.
- **Emulador de Dispositivo**:
  - **Android**: Android Studio con AVD Manager configurado
  - **iOS**: Xcode con simulador de iPhone (solo en macOS)
- **Expo Go App**: Aplicación Expo Go instalada en tu dispositivo móvil para pruebas en tiempo real escaneando el QR.
