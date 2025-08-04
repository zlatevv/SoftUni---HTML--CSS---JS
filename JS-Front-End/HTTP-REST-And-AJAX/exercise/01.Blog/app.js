const btnLoadPosts = document.getElementById("btnLoadPosts")
const selectPostsEl = document.getElementById("posts")
const btnViewPosts = document.getElementById("btnViewPost")
const postBody = document.getElementById("post-body")
const postComments = document.getElementById("post-comments")
const postTitle = document.getElementById("post-title")

function attachEvents() {
    btnLoadPosts.addEventListener("click", handleLoadingPosts)
    btnViewPosts.addEventListener("click", handleViewingPosts)
}

async function handleLoadingPosts(){
    const result = await fetch(`http://localhost:3030/jsonstore/blog/posts`)
    const data = await result.json()  
    for (const element of Object.values(data)) {
        const optionEl = document.createElement("option")
        optionEl.value = element.id
        optionEl.textContent = element.title
        selectPostsEl.appendChild(optionEl)
    }
}
async function handleViewingPosts(){
    const result = await fetch(`http://localhost:3030/jsonstore/blog/posts`)
    const data = await result.json()  
    const option = selectPostsEl.value 

    for (const [id, values] of Object.entries(data)) {
        if (id == option){
            postTitle.textContent = values.title
            postBody.textContent = values.body
            handleCommentsShowcasing(id)
        }
    }
}
async function handleCommentsShowcasing(id){
    const result = await fetch(`http://localhost:3030/jsonstore/blog/comments`)
    const data = await result.json() 

    Object.values(data)
        .filter(object => object.postId == id)
        .forEach(object => {
            const liEl = document.createElement("li")
            liEl.textContent = object.text
            liEl.id = object.postId
            postComments.appendChild(liEl)
        })

}
attachEvents();