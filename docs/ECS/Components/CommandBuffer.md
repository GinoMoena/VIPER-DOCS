# CommandBuffer

CommandBuffer es un componente que almacena una serie de comandos en una cola de un tamaño determinado por el usuario (por defecto es 10). La idea de este componente es que sirva de ayuda para tener acciones buffereadas en el juego como por ejemplo al caer de un salto y presionar la tecla de salto nuevamente prevenir que el input de salto sea "comido" por el estado de aire y se pueda agendar para cuando toque el suelo en un tiempo de espera máximo de 10 frames.

### Atributos

#### BufferSize

Indica el tamaño del buffer de acciones, mientras mayor sea el tamaño más será el espacio de acciones a guardar. Por ejemplo si es el tamaño es de 60 acciones realizadas un segundo antes de lo posible se ejecutarán, lo que puede resultar en un comportamiento involuntario por lo que se recomienda que el tamaño del buffer sea entre 5 a 15 frames.

### Métodos

#### Update()

El método update actualiza la cola ingresando continuamente nuevos comandos vacíos, en caso de que la cola supere el tamaño máximo se quitará el elemento más antiguo de la cola para que pueda ingresar uno nuevo.

Este proceso es importante ya que si no se limpian comandos antiguos con el tiempo se pueden producir acciones involuntarias

#### GetCommand() `T`

Retorna un comando del tipo T si es que existe. Esto es útil si se necesita implementar otro tipo de comando por ejemplo PhysicsCommand donde al ejecutar este tipo de comando se pasa por parámetro un objeto de tipo MovePhysics.

Este es un método recursivo que retornará la acción si es que existe pasando eliminando todo lo que este en prioridad a esta acción. En caso de que no exista la acción retornará una nulo.

#### Contains (Type type) `bool`

Retorna verdadero si el tipo de comando está contenido en la cola, es útil para echar un vistazo antes de obtener un comando para asegurar de que exista y no retorne un nulo.

#### Enqueue (Command command) `void`

Agrega un valor a la cola, aunque el método update se encarga de agregar valores por si solo este método es útil para agregar nuevos comandos. Idealmente se deberá usar cuando el usuario presione un botón para realizar una acción, en luagr de realizar la acción directamente se ingresa a esta cola de comandos.
