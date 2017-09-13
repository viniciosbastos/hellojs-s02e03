const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {
    console.log(ret.data)
    let commentsList = ret.data.filter(comment => new Date(comment.created_at) <= new Date('2017-09-14T23:59:59'))
    commentsList.forEach(e => {
        console.log(e.user.login + ' comentou ' + e.body.trim())
    });
})