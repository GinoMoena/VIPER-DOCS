## EntityManager

clase estática que contiene utilidades (debería llamarse EntityUtils no ?) para obtener componentes en entidades o agregar componentes a entidades.

### Métodos

#### `void` AddComponentToEntity (Component component, int entity)

Atajo para GameScene.AddComponent. Permite agregar el componente `component` a la entidad `entity`

#### `bool` HasComponent&lt;T&gt;(int entity)

Atajo para GameScene.HasComponent. Permite saber si la entidad `entity` contiene el component `T`.

#### `int` CreateEntity()

Atajo para GameScene.CreateEntity. Permite declarar una nueva entidad.