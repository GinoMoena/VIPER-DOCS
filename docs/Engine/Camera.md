# Camera

La cámara es un componente que servirá para desplazar los elementos con un offset a modo de simular el seguimiento de un objeto.


## Implementaciones

### Camera2D

Esta es la cámara por defecto. Se le puede setear una posición XY a través de su variable `position`.


### CameraTopDown

Esta implementación de la cámara sigue a una entidad tanto en el eje x como en el eje y. Funciona como una cámara de vista cenital ideal para rpgs. Tiene una variable privada `CAMARA_SMOOTHING=10` que determina que tan suave debe moverse la cámara para dar la sensación de seguimiento al personaje en lugar de que la cámara este pegada al player.
