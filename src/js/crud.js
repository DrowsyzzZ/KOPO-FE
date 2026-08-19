async function getPosts() {
  try {
    const getRes = await fetch('http://localhost:3000/posts/', { method: 'GET' });

    if (!getRes.ok) {
      throw new Error(`GET 실패: ${getRes.status}`);
    }

    const posts = await getRes.json();

    return posts;
  } catch (error) {
    console.error(error.message);
  }
}

const postForm = document.querySelector('#post-form');
const postTitle = document.querySelector('#post-title');
const postContent = document.querySelector('#post-content');
const postList = document.querySelector('#post-list');
const emptyMessage = document.querySelector('#empty-message');

postForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const post = {
    title: postTitle.value.trim(),
    content: postContent.value.trim(),
  };

  if (!post.title || !post.content) {
    return;
  }

  await createPost(post);
  postForm.reset();
});

async function createPost(post) {
  try {
    const postRes = await fetch('http://localhost:3000/posts/', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!postRes.ok) {
      throw new Error(`POST 실패: ${postRes.status}`);
    }

    await postRes.json();
    await refreshPosts();
  } catch (error) {
    console.error(error.message);
  }
}

async function updatePost(id, post) {
  try {
    const patchRes = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!patchRes.ok) {
      throw new Error(`PATCH 실패: ${patchRes.status}`);
    }

    const updated = await patchRes.json();
    return updated;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

postList.addEventListener('click', async function (e) {
  const postCard = e.target.closest('.post-card');

  if (!postCard) {
    return;
  }

  if (e.target.classList.contains('edit-button')) {
    showEditForm(postCard);
    return;
  }

  if (e.target.classList.contains('delete-button')) {
    const id = postCard.dataset.id;
    const shouldDelete = window.confirm('이 게시글을 삭제하시겠습니까?');

    if (!shouldDelete) {
      return;
    }

    const deleted = await deletePost(id);

    if (deleted) {
      await refreshPosts();
    }

    return;
  }

  if (e.target.classList.contains('cancel-button')) {
    await refreshPosts();
    return;
  }

  if (e.target.classList.contains('save-button')) {
    const id = postCard.dataset.id;
    const title = postCard.querySelector('.edit-title').value.trim();
    const content = postCard.querySelector('.edit-content').value.trim();

    if (!title || !content) {
      return;
    }

    const updated = await updatePost(id, { title, content });

    if (updated) {
      await refreshPosts();
    }
  }
});

function showEditForm(postCard) {
  const postMain = postCard.querySelector('.post-card-main');
  const postActions = postCard.querySelector('.post-actions');
  const id = postCard.dataset.id;
  const title = postMain.querySelector('h3').textContent;
  const content = postMain.querySelector('.post-body').textContent;

  const postId = document.createElement('p');
  postId.className = 'post-id';
  postId.textContent = `POST ${id}`;

  const titleInput = document.createElement('input');
  titleInput.className = 'edit-title';
  titleInput.type = 'text';
  titleInput.value = title;

  const contentInput = document.createElement('textarea');
  contentInput.className = 'edit-content';
  contentInput.rows = 4;
  contentInput.value = content;

  postMain.replaceChildren(postId, titleInput, contentInput);
  postActions.innerHTML = `
    <button class="action-button save-button" type="button">저장</button>
    <button class="action-button cancel-button" type="button">취소</button>
  `;

  postCard.classList.add('is-editing');
  titleInput.focus();
}

async function deletePost(id) {
  try {
    const deleteRes = await fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' });

    if (!deleteRes.ok) {
      throw new Error(`DELETE 실패: ${deleteRes.status}`);
    }

    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

function renderPosts(posts) {
  const postCount = document.querySelector('#post-count');
  postList.replaceChildren();
  emptyMessage.hidden = posts.length !== 0;

  for (const post of posts) {
    postList.insertAdjacentHTML(
      'beforeend',
      `
        <article class="post-card" data-id="${post.id}">
          <div class="post-card-main">
            <p class="post-id">POST ${post.id}</p>
            <h3>${post.title}</h3>
            <p class="post-body">${post.content}</p>
          </div>
          <div class="post-actions">
            <button class="action-button edit-button" type="button">수정</button>
            <button class="action-button delete-button" type="button">삭제</button>
          </div>
        </article>
    `,
    );
  }

  postCount.textContent = posts.length;
}

async function refreshPosts() {
  const posts = await getPosts();

  if (posts) {
    renderPosts(posts);
  }
}

refreshPosts();
