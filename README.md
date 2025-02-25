<h1>Mueblecol</h1>

## Inicio

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Componentes
Se han creado los siguientes componentes:

- `Navigate`: Componente para navegar entre las rutas basado en el componente `Link` de Next.js:

```tsx
import { Navigate } from '@/components';

<Navigate href="/ruta">
  Click me
</Navigate>
```