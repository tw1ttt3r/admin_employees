# INFO
Aplicación de administración de empleados

## INFORMACIÓN TÉCNICA
```
  - Angular 18
  - Tailwindcss 4
  - Se recomienda ocupar yarn como gestor de paquetes
```

## COMO CORRER EL PROYECTO
```
  - Hacer la instalación de paqueteria o actualización
  - Validar la existencia del archivo .env y su contenido actualizado
  - Correr el comando start
```

## COMANDOS
Hacer uso de la versión del CLI instalado en el proyecto, no es necesario instalarlo localmente.
Para la generación de componentes, ocupamos las siguientes flags
--inline-template: no se creará el archivo html del componente
--inline-style: no se creará el archivo css del componente
--skip-tests: no se creará el archivo spec del componente
ejemplo:
````
npx ng g c shared/components/error_control --inline-template --inline-style --skip-tests
````

## COMO CONTRIBUIR
La rama `develop` es la rama principal de desarrollo, así que se debe ocupa como base para generar la rama de trabajo.
No existe una convención de nombres para ramas, solo debe ser descriptiva, no ocupar caracteres especiales y sin espacios.
Se debe realizar PR para fusión de cambios a develop.
Se debe colocar un reviewer como minimo.
Para despliegues a producción, solo el dueño del repo puede fusionar el PR.
