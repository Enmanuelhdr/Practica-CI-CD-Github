# Proyecto Node.js con Vite: Práctica de CI/CD

Este es un proyecto sencillo creado con Node.js y Vite, diseñado como una práctica de Integración Continua y Despliegue Continuo (CI/CD). El proyecto consiste en una página web simple con un contador. Utilizaremos Jest para escribir pruebas unitarias y GitHub Actions para la automatización del flujo de trabajo.

## Configuración de GitHub Actions

Este proyecto utiliza GitHub Actions para la automatización de CI/CD. El flujo de trabajo está definido en .github/workflows/deployment.yml. El flujo de trabajo consta de tres jobs:

- Test: Ejecuta las pruebas unitarias utilizando Jest.
- Deploy-production: Despliega la página en un entorno de prueba.
- Enviar-mensaje: Envía un mensaje a través de Telegram cuando se realizan cambios en el flujo de trabajo. Los tokens y secretos necesarios se encuentran en el archivo sendTelegramMessage.js.

## Pasos para Ejecutar el Proyecto

1. **Clona el Repositorio:** Comienza clonando este repositorio en tu máquina local.

```bash
git clone <URL del repositorio>
```

2. Instala las Dependencias: Instala las dependencias del proyecto utilizando npm.

```bash
npm install
```

3. Ejecuta la Aplicación en Modo Desarrollo: Inicia la aplicación en modo desarrollo.

```bash
npm run dev
```

4. Ejecuta Pruebas Unitarias: Ejecuta las pruebas unitarias utilizando Jest.

```bash
npm test
```
## Hosting utilizado
### Vercel
- **Link:** https://vercel.com/ehdelrosario49-gmailcom/practica-ci-cd-github-project 

## Notas Adicionales

- Asegúrate de configurar los secretos necesarios en la configuración de GitHub Actions para el envío de mensajes a Telegram y cualquier otro acceso necesario.
- Modifica los archivos de prueba (__tests__/counter.test.js) y la aplicación (src/components/Counter.vue, src/main.js, etc.) según tus necesidades.
- Este proyecto es un ejemplo educativo y puede requerir ajustes para su implementación en un entorno de producción real.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar la página web, las pruebas o agregar nuevas características, ¡siéntete libre de hacerlo! Solo asegúrate de seguir las mejores prácticas de desarrollo y hacer una solicitud de extracción.


## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
