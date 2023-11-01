---
sidebar_position: 3
---


# Component

### Atributos

#### `bool` Active `true by default`

Permite saber si el componente está activo, esto puede ser utilizado por cualquier sistema y puede aplicar a cualquier componente por eso se ha creado como una propiedad que será heredada por cualquier componente que lo necesite.

### Métodos

Dada la lógica de la arquitectura ECS, el componente no puede tener métodos, solo data. En caso de necesitar crear un método para un componente la solución siempre será crear un sistema en su lugar que transforme el estado del componente.