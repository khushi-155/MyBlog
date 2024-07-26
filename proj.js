function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');
    
      
    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');
             
    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
      newBox.appendChild(newBlogPost);
      

    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);

  // create a new div with className blog-buttons and append it to newBox
  const newDiv = document.createElement("div");
  newDiv.className = "blog-buttons"
  newBox.appendChild(newDiv);

  //Create moveup button with class blog-button and move-up
  const moveup = document.createElement("button");
  moveup.textContent = "Move Up"
  moveup.classList.add("blog-button","move-up");
  newDiv.appendChild(moveup);
     //Add event listerner to moveup button
  moveup.addEventListener('click',moveUp);
  
  function moveUp(){
       const previous = newBox.previousElementSibling;
      if(previous){
           blogList.insertBefore(newBox,previous);    
      }
  }
  
  
   //Create movedown button with class blog-button and move-down
  //Add event listerner to movedown button
  
  const movedown = document.createElement("button");
  movedown.textContent = "Move Down";
  movedown.classList.add("blog-button","move-down");
  newDiv.appendChild(movedown);
  
  movedown.addEventListener('click',moveDown);
  
  function moveDown(){
     const next = newBox.nextElementSibling;
      if(next){
          blogList.insertBefore(next,newBox);
      }
  }
  
   //Create delete button with class blog-button and delete
  //Add event listerner to delete button
  
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("blog-button","delete");
  newDiv.appendChild(del);
  
  del.addEventListener('click',deletefunc);
  
  function deletefunc(){
    blogList.removeChild(newBox);
  }
  


 

    blogList.appendChild(newBox);

  // Add event listeners to the buttons
}

const blogData = [
{
title: 'First Blog Post',
date: 'January 1, 2022',
content: 'This is the content of the first blog post.'
},
{
title: 'Second Blog Post',
date: 'February 1, 2022',
content: 'This is the content of the second blog post.'
},
{
title: 'Third Blog Post',
date: 'March 1, 2022',
content: 'This is the content of the third blog post.'
}
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array