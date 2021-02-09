async function attachEvents() {
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');

    let posts = document.getElementById('posts');
    let titleContent = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postCommentsBody = document.getElementById('post-comments');

    btnLoadPosts.addEventListener('click', () => {
        if (posts.innerHTML != '') {
            posts.innerHTML = '';
        }

        fetch(`https://blog-apps-c12bf.firebaseio.com/posts.json`)
            .then(d => d.json())
            .then(data => createOptionForEach(data))
            .catch(console.error());

        btnViewPost.addEventListener('click', (e) => {
            fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${posts.value}.json`)
                .then(d => d.json())
                .then(d => extractData(d))
                .catch(console.error());
        })
    })

    function extractData(data) {
        titleContent.innerHTML = data.title;
        postBody.innerHTML = data.body;
        postCommentsBody.innerHTML = '';

        if (data.comments === undefined) {
            return;
        }

        for (const comment of data.comments) {
            let li = document.createElement('li');
            li.innerHTML = comment;
            postCommentsBody.appendChild(li);
        }
    }

    function createOptionForEach(dataPosts) {
        const fragment = document.createDocumentFragment();

        for (const [id, { title }] of Object.entries(dataPosts)) {
            let option = document.createElement('option');
            option.value = id;
            option.innerHTML = title;
            fragment.appendChild(option);
        }

        posts.appendChild(fragment);
    }
}

attachEvents();