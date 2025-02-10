const zod = require('zod');
// const { createSchema } = require('zod'); unnessasary
/*{
    title: string,
    description: string,
    },
    {
        id:string,
    }
    */
// we create the schema
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
})
const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}