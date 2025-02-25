

const searchInput = document.getElementById("searchInput");
const search_button = document.querySelector(".searchbutton");
const searchResults = document.getElementById("searchResults");




async function fetchApi(msg) {
    try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(msg)}&format=json&origin=*`);
        const result = await response.json();
        return result;
    } catch (error) {
        return "Hey you got Some error";
    }
};




search_button.addEventListener('click', async (e)=> {
    const msg = searchInput.value;
    // console.log(msg);
    const result = await fetchApi(msg);
    
    const div = document.createElement('div');


    result.query.search.forEach((q)=> {
        console.log(q.pageid);
        div.innerHTML += 
          `<article>
                <a href="https://en.wikipedia.org/?curid=${q.pageid}">
                    <h2>${q.title}</h2>
                </a>
                <div class="summary">${q.snippet}...</div>
            </article>
        `;
        
        searchResults.innerHTML= "";
    })
    
    searchResults.appendChild (div);
    // console.log(result);
})