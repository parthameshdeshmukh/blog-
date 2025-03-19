document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    
    function displayPosts() {
        postsContainer.innerHTML = "";
        storedPosts.forEach((post, index) => {
            const postElement = document.createElement("div");
            postElement.className = "post";
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
            postsContainer.appendChild(postElement);
        });
    }

    if (postsContainer) {
        displayPosts();
    }
    
    const blogForm = document.getElementById("blogForm");
    if (blogForm) {
        blogForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;
            storedPosts.push({ title, content });
            localStorage.setItem("posts", JSON.stringify(storedPosts));
            window.location.href = "index.html";
        });
    }
});
