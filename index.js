// Task 2: Fetch and Display Posts with Search
const fetchPosts = async () => {
    try {
        const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(BASE_URL);
        const posts = await response.json();
        const postCards = document.getElementById("postCards");
        const postSearch = document.getElementById("postSearch");

        const renderPosts = (filteredPosts) => {
            postCards.innerHTML = ""; // Clear previous posts
            filteredPosts.forEach(post => {
                const card = document.createElement("div");
                card.classList.add("col-md-4");
                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `;
                postCards.appendChild(card);
            });
        };

        // Initial render
        renderPosts(posts);

        // Search functionality
        postSearch.addEventListener("input", (event) => {
            const query = event.target.value.toLowerCase();
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query));
            renderPosts(filteredPosts);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};


document.addEventListener("DOMContentLoaded", () => {
    fetchPosts();
});
