
const express = require("express")
const Resource = require("./model")
const {resourcePayload } = require("./middleware")

const router = express.Router()

router.get("/", (req, res, next) => {
   Resource.getAll()
    .then(res => { 
        res.status(200).json(res)
 })
    .catch(next)
})


router.post("/",resourcePayload, (req,res,next) => {
    Resource.create(req.body)
    .then(res =>{
        res.status(201).json(res)
    })
    .catch(next) 
} )

module.exports = router























// build your `/api/resources` router here
// export modules



// build your `Project` model here
// // 
// - [ ] `[POST] /api/resources`
// - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
// - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

// - [ ] `[POST] /api/projects`
// - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
// - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
// - [ ] `[GET] /api/projects`
// - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
// - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
// - [ ] `[POST] /api/tasks`
// - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
// - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
// - [ ] `[GET] /api/tasks`
// - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
// - Each task must include `project_name` and `project_description`
// - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`