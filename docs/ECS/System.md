---
sidebar_position: 4
---


# GameSystem

Clase abstracta para crear sistema de juego, estos se pueden inicializar en una escena a través de AttachSystem(new MySystem()).

### Atributos

####  `bool` IsRunning 

Este atributo permitirá saber si el sistema debe actualizarse, esto permite pausar sistemas dentro de una escena.

### Métodos

Dado que Scene es una clase abstracta se debe utilizar herencia. Los métodos marcados como `virtual` deben ser implementados.

#### `abstract void ` Update (GameScene scene)

Al momento de generar un sistema se deberá sobrescribir este método, aquí es donde se deberá aplicar toda la lógica que transforme el estado de los componentes, por regla general un componente no se puede actualizar por si solo o no puede contener lógica que transforme su comportamiento, lo ideal sería que toda esta lógica se mantenga en el Update. Aún así si la complejidad dentro del sistema crece se puede crear una clase de tipo utilidad que ejecute lógica y referenciarla en este método.