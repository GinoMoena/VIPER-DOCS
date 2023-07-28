# Graphics

Esta sección está dedicada a utilidades para dibujar en pantalla diversas formas, o con diversas transformaciones.

## DrawFigures

### DrawRect

Permite dibujar el rectángulo indicado en parámetros (se dibuja como un rectángulo vacío sin relleno). 

### DrawRectFilled

Permite dibujar el rectángulo indicado en parámetros.

### DrawFormTile

Dibuja un tile en la pantalla considerando que los tiles sean definidos por ejemplo como 16x16 y uno de estos está ubicado en el tile map (1, 0) se dibujará en las coordenadas (16, 0) con un width, height de 16x16.

### DrawFlatTile

Siguiendo la lógica anterior se dibujará solo una línea sobre el tile indicado. Funciona como una especie de línea recta que marca el piso por donde se está pasando.

### DrawLine

Permite dibujar una línea entre un punto A(x,y) y un punto B(x,y).

### DrawTriangle

Permite dibujar un triángulo con un ángulo recto, parecido a DrawLine, pero dibujar el triángulo correspondiente a esa línea.

## DrawUtils

### Draw

Permite dibujar una textura en la posición indicada. 

### DrawHD

Permite dibujar una textura en modo HD, este método se deberá utilizar en el método DrawHD de alguna entidad o escena que lo requiera.

### DrawHUD

Este método permite dibujar en pantalla y que los elementos dibujados ignoren el sistema de cámara, por lo que siempre se mostrarán a pesar del desplazamiento generado por el componente de Camera2D. Idealmente especial para dibujar HUD, elementos que necesiten estar estáticos en pantalla como estado del personaje.

### DrawToRectangle

Parecido al método original para dibujar en pantalla. La adición es que en este método se puede transformar el rectángulo dibujado a uno nuevo y este será el resultante. Esto permite escalar una imagen en el eje x o y.


### DrawGrid

Permite dibujar una grilla en pantalla. Este método se puede utilzar, o se utiliza en el modo debug, es muy útil para dimensionar las distancias entre cada tile.
