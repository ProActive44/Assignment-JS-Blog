class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription() {
    var description_card = document.createElement('p');
    description_card.setAttribute('id', 'blog-description');
    console.log(description_card);
    document.getElementById('card-text').appendChild(description_card);
    description_card.innerHTML += this.detail;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

const helperAddPost = () => {
  let popup = document.getElementById('popupContact');
  popup.style.display = 'block';
};

const helperPost = () => {
  let title = document.getElementById('title').value;
  let detail = document.getElementById('detail').value;

  let newBlog = new Blog(title, detail);
  newBlog.addTitle();
  newBlog.addDescription();

  let popup = document.getElementById('popupContact');
  popup.style.display = 'none';
};
