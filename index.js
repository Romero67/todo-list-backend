let tareas = [{
    id:"1",
    titulo: 'programar',
    descripcion: 'programar una api',
    borrado: false,
    terminada: false
},
{
    id:"2",
    titulo: 'cocinar',
    descripcion: 'cocinar una api',
    borrado: false,
    terminada: false
},
{
    id:"3",
    titulo: 'lavar',
    descripcion: 'lavar una api',
    borrado: false,
    terminada: false
}]

//tipo de dato -> Array

const express = require('express');

const app = express()

app.use(express.json())

app.use('/tarea/actualizar/:id', (request, response) => {
    console.log("GET A MI RUTA /tarea/actualizar")

    const descripcion = request.body.descripcion
    const id = request.params.id

    tareas = tareas.map(tarea => {
        console.log("tarea.id: ",tarea.id)
        console.log("id: ",id)
        if(tarea.id == id){
            tarea.descripcion = descripcion
        }

        return tarea
    })

    response.status(200).send('tarea actualizada!')
})

app.use('/tarea/lista', (request, response) => {
    console.log("GET A MI RUTA /tarea/lista")

    response.status(200).send(tareas)
})

app.use('/tarea/crear', (request, response) => {
    console.log("GET A MI RUTA /tarea/crear")

    const tarea = request.body

    tareas.push(tarea)

    response.status(200).send('tarea creada')
})

app.use('/', (request, response) => {
    console.log("GET A MI RUTA /")

    response.status(200).send('DEVOLVIENDO RESPUESTA')
})



app.listen(5000)