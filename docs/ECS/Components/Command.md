# Command

Esta clase es una clase bastante simple que viene del patrón de diseño Command. Lo que hace es que se abstraiga la lógica de ejecución a un método y de esta forma tener una especie de método transportable dentro de un objeto. En el caso de la aplicación se utiliza para almacenar acciones en un buffer, esto es bastante útil para evitar acciones frame perfect y hacer el juego más amigable.

### Métodos

#### execute(Object obj) `virtual void`

Este es un método vacío, luego las clases que necesiten realizar acciones deberán hederar estas clase reimplementando este método para realizar las tareas que necesiten. En el caso de Físicas ya se creó la acción salto y la categoría de PhysicsCommand que extiende de Command, por lo que si es necesario realizar una acción relativa a fisicas lo mejor será heredar directo de PhysicsCommand en lugar de Command ya que tiene un método execute que recibe como parámetro un MovePhysics.