# Sincronizar The Koi Fish con GitHub

## Objetivo
Conectar el proyecto actual de Lovable con un repositorio de GitHub para hacer push/sync del código y habilitar la sincronización bidireccional.

## Qué hay que hacer

Lovable tiene una integración nativa de GitHub (Git sync) que permite:
- Enviar el código del proyecto a un repositorio nuevo en GitHub.
- Mantener la sincronización automática en ambas direcciones: lo que editas en Lovable se refleja en GitHub, y lo que subes a GitHub se refleja en Lovable.

Pasos a seguir en el editor de Lovable:

1. Abrir el editor de Lovable del proyecto The Koi Fish.
2. Hacer clic en el menú Plus (+) en la parte inferior izquierda.
3. Seleccionar GitHub → Connect project.
4. Autorizar la Lovable GitHub App en GitHub (OAuth).
5. Elegir la cuenta u organización de GitHub donde se creará el repositorio.
6. Hacer clic en Create Repository para generar el repo con el código actual del proyecto.

## Consideraciones

- Esta acción requiere autorización OAuth en la interfaz de Lovable; no se puede ejecutar desde el sandbox ni con comandos de código.
- Una vez conectado, cualquier cambio futuro en Lovable se sincroniza automáticamente con GitHub.
- Si más adelante se desea desconectar o cambiar de cuenta, se puede hacer desde la misma sección de GitHub en el editor.

## Resultado esperado

Un repositorio de GitHub llamado algo como `the-koi-fish` o `lovable-the-koi-fish` con el código completo del proyecto, listo para clonar, descargar o seguir editando desde GitHub.
