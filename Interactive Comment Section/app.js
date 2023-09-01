const id_1 = document.querySelector(".id-1");
const id_2 = document.querySelector(".id-2");
const id_3 = document.querySelector(".id-3");
const id_4 = document.querySelector(".id-4");
const add = document.querySelector(".add");
const wrappers = document.querySelectorAll("wrapper");

data = {
  "currentUser": {
    "image": { 
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": { 
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "./images/avatars/image-ramsesmiron.png",
              "webp": "./images/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "./images/avatars/image-juliusomo.png",
              "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}



showData = (data) => {
  id_1.innerHTML = ` 
  <div class="score">
    <span class = "increase">+</span>
    <span class="score-value">${data.comments[0].score}</span>
    <span class = "decrease">-</span>
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
    <span class = "increase">+</span>
    <span class="score-value">${data.comments[1].score}</span>
    <span class = "decrease">-</span>
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
    <span class = "increase">+</span>
    <span class="score-value">${data.comments[1].replies[0].score}</span>
    <span class = "decrease" >-</span>
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
    <span class = "increase">+</span>
    <span class="score-value">${data.comments[1].replies[1].score}</span>
    <span class = "decrease">-</span>
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
      <span>@${data.comments[1].replies[1].replyingTo} </span>${data.comments[1].replies[1].content}
    </div>
  </div>`;

  add.innerHTML = `
  <img class="dp" src=${data.currentUser.image.png} alt="">
      <textarea name="" id="send-content" cols="30" rows="10" placeholder="Add a comment"></textarea>
      <button class="text-input" onClick = "newComment()">Send</button>`;
};

showData(data)

function replyBtn1() {
  let replyDiv = document.createElement("div");
  replyDiv.classList.add("your-reply-input");
  replyDiv.innerHTML = `
    <div class="id">
     <img class="dp" src="images/avatars/image-juliusomo.png" alt="">
     <textarea name="" id="" cols="30" rows="10" placeholder="Add a comment">
     @amyrobson</textarea>
     <button class="text-input text-input-1">Reply</button>
    </div>`;
  document.querySelector(".wrapper-1").appendChild(replyDiv);
}
function replyBtn2() {
  let replyDiv2 = document.createElement("div");
  replyDiv2.classList.add("your-reply-input");
  replyDiv2.innerHTML = `
    <div class="id">
     <img class="dp" src="images/avatars/image-juliusomo.png" alt="">
     <textarea name="" id="" cols="30" rows="10" placeholder="Add a comment">
     @maxblagun</textarea>
     <button class="text-input text-input-2">Reply</button>
    </div>`;
  document.querySelector(".wrapper-2").appendChild(replyDiv2);
}
function replyBtn3() {
  let replyDiv3 = document.createElement("div");
  replyDiv3.classList.add("your-reply-input");
  replyDiv3.innerHTML = `
    <div class="id">
     <img class="dp" src="images/avatars/image-juliusomo.png" alt="">
     <textarea name="" id="" cols="30" rows="10" placeholder="Add a comment">
     @ramsesmiron</textarea>
     <button class="text-input text-input-2">Reply</button>
    </div>`;
  document.querySelector(".wrapper-2").appendChild(replyDiv3);
}

function newComment() {
  let newContent = document.getElementById("send-content").value;
  if (newContent) {
    let newComment = document.createElement("div");
    newComment.classList.add("wrapper");

    newComment.innerHTML = `
  <div class="id">
  <div class="score">
    <span class = "increase">+</span>
    <span class="score-value">0</span>
    <span class = "decrease">-</span>
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
      ${newContent}
    </div>
  </div>
</div>`;
    document.querySelector(".all").appendChild(newComment);
    document.getElementById("send-content").value = "";
  } else {
    return;
  }
}

document.addEventListener("click", (e) => {
  let targetDel = e.target.closest(".delete-button");
  let targetEdit = e.target.closest(".edit-button");
  let editBtnFinal = e.target.closest(".edit-btn-final");
  let replyBtn1 = e.target.closest(".text-input-1");
  let replyBtn2 = e.target.closest(".text-input-2");
  let increase = e.target.closest(".increase")
  let decrease = e.target.closest(".decrease")

  if (targetDel) {
    targetDel.parentNode.parentNode.parentNode.parentNode.remove();
    console.log("deleted");
  } else if (targetEdit && !targetEdit.classList.contains("disabled")) {
    let parent = targetEdit.parentNode.nextElementSibling;
    console.log(parent)
    let editBtn = `<button class="edit-btn-final">Edit</button>`;
    let rightContainer = targetEdit.parentNode.parentNode;
    rightContainer.insertAdjacentHTML("beforeend", editBtn);
    let text = parent.innerText;
    console.log(text)
    let textArea = ` <textarea name=""  cols="30" rows="10" placeholder="Add a comment">${text}</textarea>`;
    parent.innerHTML = textArea; 
    console.log(textArea.innerHTML)
    targetEdit.classList.add("disabled");

  } 
   else if (replyBtn1) {
    console.log("clicked");
    let textAreaValue = replyBtn1.previousSibling.previousSibling.value;
    console.log(textAreaValue);
    let afterReply = `<div class="score">
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
      ${textAreaValue}
    </div>
  </div>`;

    replyBtn1.parentNode.innerHTML = afterReply;
    
  }
   else if (replyBtn2) {
    console.log("clicked");
    let textAreaValue = replyBtn2.previousSibling.previousSibling.value;
    console.log(textAreaValue);
    let afterReply = `<div class="score">
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
      ${textAreaValue}
    </div>
  </div>`;

    replyBtn2.parentNode.innerHTML = afterReply;
    
  }

  else if (editBtnFinal) {
    e.preventDefault()
    let targetEdit = document.querySelector(".disabled");
    let parent = targetEdit.parentNode.nextElementSibling;
    console.log(parent)
    let textArea = parent.children[0]
    console.log(textArea)
    let textAreaValue = textArea.value
    parent.innerHTML = `<p>${textAreaValue}</p>`
    editBtnFinal.classList.add("disabled-btn");
    targetEdit.classList.remove("disabled");  
  }

  else if (increase) {
    console.log("increase")
    let currNumber = Number(increase.nextElementSibling.innerText)
    let showNumber = currNumber +  Number(1)
    increase.nextElementSibling.innerText = showNumber;
  }
  else if (decrease) {
    console.log("decrease")
    let currNumber = Number(decrease.previousElementSibling.innerText)
    let showNumber = currNumber -  Number(1)
    decrease.previousElementSibling.innerText = showNumber;
  }
});

