# Screen

Screen es un componente que funciona como un RenderTarget. La idea es simplificar este proceso de creación de render Target funcionando simplemente como un lienzo que uno activa a través de `screen.Set()` dibuja y luego desactiva el lienzo con `screen.UnSet()`. Finalmente al momento de pintar elementos se puede utilizar screen como si fuera una textura, esto permite escalar, rotar, transformar el lienzo original, además de otros tratamientos que se aplican al dibujo a través de SpriteBatch.

Este componente se utiliza cuando se renderiza la pantalla virtual a pantalla en lugar de su versión HD. Lo que se hace en este caso es pintar en un lienzo con el tamaño original y luego se escala al tamaño de la pantalla.

Una limitación de este componente es que solo se puede utilizar en la clase Main (la que extiende de Game) ya que ahi es donde se realiza el draw principal. Si es necesario generar renderTargets para otras tareas quiza la mejor idea sea generar una cola de procesos de dibujo y llamar a esa cola durante el draw.
