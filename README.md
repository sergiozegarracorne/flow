# flow
Herramienta para visualizar el flujo de trabajo en los procesos de ventas y facturación.

## Uso
1. Instala las dependencias: `npm install`.
2. Inicia el servidor: `npm start`.
3. Envía un JSON con los pasos al endpoint `POST /workflow` y el servicio devolverá una página HTML con el diagrama del flujo.

Ejemplo de uso desde la terminal:

```bash
curl -X POST -H "Content-Type: application/json" \
     -d @processes.json \
     http://localhost:3000/workflow > flujo.html
```

Abre `flujo.html` en tu navegador para ver el diagrama generado.

## Pruebas
Ejecuta `npm test` para correr las pruebas automatizadas.
