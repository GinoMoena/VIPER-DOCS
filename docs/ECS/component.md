---
sidebar_position: 3
---


# Component

### Atributos

#### ParentEntity

La entidad a la que el componente pertenece. Este valor Será informado luego de ser agregado a la entidad, por lo que durante la ejecución del método Initialize del componente este valor estará informado.

#### ParentPosition

Este atributo es un atajo para ParentEntity.position, dado que se referencia en reiteradas ocasiones se creo este atributo para obtener el dato como un acceso directo.

### Métodos

#### AddComponent(Component comp)

Permite agregar un componente a la entidad padre. Si bien en este punto un componente no puede tener componentes hijos, este addComponent funciona como un shortcut a ParentEntity.AddComponent. Se utiliza para bajar la complejidad ciclomática.

#### GetComponent &lt;T&gt; where T : Component

Al igual que el caso anterior, este es un atajo para ParentEntity.GetComponent(). Simplemente para bajar la complejidad ciclomática y simplificar el desarrollo.

#### Initialize () `virtual`

Este método se ejecutará una vez se haya registrado el componente dentro de una entidad activa. Así como el constructor inicializa una instancia de un objeto, este método inicializa la instancia del objeto en un videojuego en tiempo real.

#### Update(GameTime time) `virtual`

Actualización cuadro a cuadro del componente, este método (como en casos anteriores) debe ejecutar previamente su base. Ideal para hacer cálculos en tiempo real.


