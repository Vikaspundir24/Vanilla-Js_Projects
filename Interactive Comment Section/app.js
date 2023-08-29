const id_1 = document.querySelector(".id-1");
const id_2 = document.querySelector(".id-2");
const id_3 = document.querySelector(".id-3");
const id_4 = document.querySelector(".id-4");
const add = document.querySelector(".add");
const wrappers = document.querySelectorAll("wrapper");



  fetch("/data.json")
    .then((response) => response.json())
    .then((json) => {
      let data = json;
      showData(data);
      console.log(data)
    });




showData = (data) => {

  id_1.innerHTML = ` 
  <div class="score">
    <span>+</span>
    <span class="score-value">${data.comments[0].score}</span>
    <span>-</span>
  </div>
  <div class="right-container">
    <div class="user">
      <div class="details">
        <img class="dp" src=${data.comments[0].user.image.png} alt="">
        <h6>${data.comments[0].user.username}</h6>
        <p>${data.comments[0].createdAt}</p>
      </div>
      <div class="reply-button" onClick = "replyBtn1()">
        <img src="images/icon-reply.svg" alt="">
        <p>Reply</p>
      </div>
    </div>
    <div class="content">
      <p>${data.comments[0].content}</p>
    </div>
  </div>`;

  // ID 2

  id_2.innerHTML = ` 
  <div class="score">
    <span>+</span>
    <span class="score-value">${data.comments[1].score}</span>
    <span>-</span>
  </div>
  <div class="right-container">
    <div class="user">
      <div class="details">
        <img class="dp" src=${data.comments[1].user.image.png} alt="">
        <h6>${data.comments[1].user.username}</h6>
        <p>${data.comments[1].createdAt}</p>
      </div>
      <div class="reply-button" onClick = "replyBtn2()">
        <img src="images/icon-reply.svg" alt="">
        <p>Reply</p>
      </div>
    </div>
    <div class="content">
      <p>${data.comments[1].content}</p>
    </div>
  </div>`;
  // ID - 3 REPLY

  id_3.innerHTML = ` 
  <div class="score">
    <span>+</span>
    <span class="score-value">${data.comments[1].replies[0].score}</span>
    <span>-</span>
  </div>
  <div class="right-container">
    <div class="user">
      <div class="details">
        <img class="dp" src=${data.comments[1].replies[0].user.image.png} alt="">
        <h6>${data.comments[1].replies[0].user.username}</h6>
        <p><span></span>${data.comments[1].replies[0].createdAt}</p>
      </div>
      <div class="reply-button" onClick = "replyBtn3()">
        <img src="images/icon-reply.svg" alt="">
        <p>Reply</p>
      </div>
    </div>
    <div class="content">
      <p><span>@${data.comments[1].replies[0].replyingTo} </span>${data.comments[1].replies[0].content}</p>
    </div>
  </div>`;


  id_4.innerHTML = ` 
  <div class="score">
    <span>+</span>
    <span class="score-value">${data.comments[1].replies[1].score}</span>
    <span>-</span>
  </div>
  <div class="right-container">
    <div class="user">
      <div class="details">
        <img class="dp" src=${data.currentUser.image.png} alt="">
        <h6>${data.comments[1].replies[1].user.username}</h6>
        <p><span></span>${data.comments[1].replies[1].createdAt}</p>
      </div>
      <div class="delete-button" >
        <img src="images/icon-delete.svg" alt="">
        <p>Delete</p>
      </div>
      <div class="edit-button">
        <img src="images/icon-edit.svg" alt="">
        <p>Edit</p>
      </div>
    </div>
    <div class="content">
      <p><span>@${data.comments[1].replies[1].replyingTo} </span>${data.comments[1].replies[1].content}</p>
    </div>
  </div>`;

  add.innerHTML = `
  <img class="dp" src=${data.currentUser.image.png} alt="">
      <textarea name="" id="send-content" cols="30" rows="10" placeholder="Add a comment"></textarea>
      <button class="text-input" onClick = "newComment()">Send</button>`;

}



function replyBtn1(){
   let replyDiv = document.createElement("div")
   replyDiv.classList.add("your-reply-input")
   replyDiv.innerHTML = `
    <div class="id">
     <img class="dp" src="images/avatars/image-juliusomo.png" alt="">
     <textarea name="" id="" cols="30" rows="10" placeholder="Add a comment">
     @amyrobson</textarea>
     <button class="text-input">Reply</button>
    </div>`
  document.querySelector(".wrapper-1").appendChild(replyDiv)

}
function replyBtn2(){
   let replyDiv2 = document.createElement("div")
   replyDiv2.classList.add("your-reply-input")
   replyDiv2.innerHTML = `
    <div class="id">
     <img class="dp" src="images/avatars/image-juliusomo.png" alt="">
     <textarea name="" id="" cols="30" rows="10" placeholder="Add a comment">
     @maxblagun</textarea>
     <button class="text-input">Reply</button>
    </div>`
  document.querySelector(".wrapper-2").appendChild(replyDiv2)

}
function replyBtn3(){
   let replyDiv3 = document.createElement("div")
   replyDiv3.classList.add("your-reply-input")
   replyDiv3.innerHTML = `
    <div class="id">
     <img class="dp" src="images/avatars/image-juliusomo.png" alt="">
     <textarea name="" id="" cols="30" rows="10" placeholder="Add a comment">
     @ramsesmiron</textarea>
     <button class="text-input">Reply</button>
    </div>`
  document.querySelector(".wrapper-2").appendChild(replyDiv3)

}

function newComment() {
  let newContent = document.getElementById("send-content").value
  if(newContent){
  let newComment = document.createElement("div")
  newComment.classList.add("wrapper")
  
  newComment.innerHTML = `
  <div class="id">
  <div class="score">
    <span>+</span>
    <span class="score-value">0</span>
    <span>-</span>
  </div>
  <div class="right-container">
    <div class="user">
      <div class="details">
        <img class="dp" src="images/avatars/image-juliusomo.png"  alt="">
        <h6>juliusomo</h6>
        <p>just now</p>
      </div>
      <div class="delete-button">
        <img src="images/icon-delete.svg" alt="">
        <p>Delete</p>
      </div>
      <div class="edit-button" >
        <img src="images/icon-edit.svg" alt="">
        <p>Edit</p>
      </div>
    </div>
    <div class="content">
      <p>${newContent}</p>
    </div>
  </div>
</div>`
document.querySelector(".all").appendChild(newComment)
document.getElementById("send-content").value = ""
  }
  else{
    return
  }
}

document.addEventListener("click", (e) => {
  let targetDel = e.target.closest(".delete-button")
  let targetEdit = e.target.closest(".edit-button")
  

  if(targetDel){
    targetDel.parentNode.parentNode.parentNode.parentNode.remove()
    console.log("deleted")
  }

  else if(!targetEdit.classList.contains("disabled")) {
    let parent =  targetEdit.parentNode.nextElementSibling
    let editBtn = `<button class="edit-btn">Edit</button>`
    let rightContainer = targetEdit.parentNode.parentNode
    rightContainer.insertAdjacentHTML("beforeend",editBtn)
    console.log(parent)
    let text = parent.innerText
    let textArea = ` <textarea name="" id="" cols="30" rows="10" placeholder="Add a comment">${text}</textarea>`
    parent.innerHTML = ""
    parent.innerHTML = textArea
    targetEdit.classList.add('disabled');
  }
})
