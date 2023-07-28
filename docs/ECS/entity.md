---
sidebar_position: 2
---

# Entity

### Atributos

#### componentList `List<Component>`
Almacena la lista de componentes que pertenecen a la entidad actual. Si se quiere registrar un componente se debe utilizar `AddComponent(component)`. Utilizar esta lista sólo para leer datos, no para insertar componentes nuevos.

#### Layer

Determina la capa de prioridad donde se dibujará la entidad.

#### Position

La posición de la entidad dentro de la escena

#### Origin

El punto de origen en la entidad (limitados dentro del cuadrado(0.0, 0.0), (1.0,1.0)).

#### FlipX

Se muestra la textura en modo espejo en el eje X.

#### FlipY

Se muestra la textura en modo espejo en el eje Y.

### Métodos

Dado que Scene es una clase abstracta se debe utilizar herencia. Los métodos marcados como `virtual` deben ser implementados.

#### AddComponent(Component comp) 

Permite agregar un componente a la entidad. Es importante utilizar este método en lugar de agregarlo en la lista directamente, esto permitirá que la carga del componente sea la correcta y se pueda ejecutar el método Initialize sin problemas.


#### GetComponent &lt;T&gt; where T : Component

Permite obtener un componente que ya ha sido agregado a la entidad. En caso de que no exista devolverá nulo. Es especialmente útil si durante un método update necesito hacer un check de algún componente.

#### DrawPositionPointer

Se puede utilizar para dibujar una cruz sobre la posición de la entidad actual. Esto es útil para mantener un seguimiento visual de la entidad en caso de que no tenga una textura agregada como componente o su método draw no dibuje nada. La ejecución de este DrawPositionPointer debe realizarse dentro de alguno de los métodos Draw.


#### Initialize `virtual`

Método que inicializa la entidad. En este punto la entidad tiene acceso a la escena donde se ha agregado por lo que este método es útil si se necesita obtener información o interactuar con alguna propiedad de la escena.

#### Update `virtual`

Método para actualizar la entidad cuadro por cuadro. Es importante que al igual que en otros casos este método se ejecute manteniendo la ejecución del método base. Esto para que el método base sea capaz de actualizar los componentes que pertenecen a esta entidad.

#### Draw `abstract`

Método para dibujar las texturas necesarias por la entidad. Como los componentes no requieren necesariamente ser impresos, este método es útil para llamar algún método Draw creado en un componente para dibujar sobre la entidad.

#### DrawHD `abstract`

Misma lógica anterior esta vez para dibujar en modo HD. Si `HD_MODE=true` este método se ejecutara en lugar de método Draw.


