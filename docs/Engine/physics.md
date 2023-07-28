# Physics

Aqui se agregan componentes que utilizan lógica matemática para el movimiento como se realiza en juegos por ejemplo de tipo plataforma2D.

Al momento que se escribe la documentación sólo se ha implementado el MovePhysics que es en realidad la implementación de físicas plataformeras 2D con el uso de slopes.

## MovePhysics

Componente con fisicas para un plataformero 2D. Utiliza un mapa del tipo TileMap.


### Atributos

- gravity `float` (gravedad sobre el eje Y en caso de estar en el aire).
- topSpeed `float` (máxima velocidad aplicable, se aplica para el eje Y).
- velocity `float` (delta de velocidad acumulada en el eje Y).
- jump `float` (fuerza de salto en eje Y).
- xVelocity `float` (delta de velocidad acumulada en el eje X).
- topSpeedX `float` (máxima velocidad posible en eje X).
- acc `float` (cuanto acumula de velocidad por frame).
- airAcc `float` (cuanto acumula de velocidad por frame en el aire).
- deacc `float` (deaceleración en caso de que x sea mayor o menor a 0).
- friction `float` (desaceleración en el eje x por fricción con suelo).
- airFriction `float` (desaceleración en el eje x por fricción con el aire).


### Métodos

#### Move(Vector2 direction) 

Este método se encarga de actualizar las físicas de acuerdo a los valores de `velocity` y `xVelocity` aplicando la influencia de dirección pasada por parámetros y aplicando también la lógica de físicas ya sean colisiones con el mapa o factores como desaceleración o fricción con el suelo/aire, etc.

En caso de no ejecutarse las físicas no se actualizarán, esto podría ser de utilidad en algún caso donde se deba detener en el aire el personaje, o quizá en caso de implementar un nuevo modo de movimiento se puede suspender la ejecución del move para utilizar otro tipo de movimiento en su lugar, como movimiento volador, etc.
