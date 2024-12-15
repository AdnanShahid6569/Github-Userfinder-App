let section = document.getElementById("div");
let input = document.getElementById("inputField")

const showCard = async () => {
    section.innerHTML = ""
    const api_Url = `https://api.github.com/users/${input.value}`;

    await fetch(api_Url)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            if (data.status == "404") {
                alert("User Not Found")
            }

            else {
                    section.innerHTML += `
        <div class="nameBio">
        <div class="img">
        <div class="imgSection" style="width: 30%;">
        
        <img width="100%" src="${data.avatar_url}" alt="">
        
        </div>
        <div class="headbio">
        <h3>${data.name} <br> <span class="octocat">${data.login}</span> </h3>
        <p class="biodata">${data.type}..</p>
        </div>
        </div>
        
        <div class="date"><p>Joined ${new Date(data.created_at).toLocaleDateString()}</p></div>
        </div>
        <p style="color: gray; text-align:center; font-size: 18px;">${data.bio}</p>
        
        <div class="repos">
        <div class="gitData">
        <p>Repo <br> <br> <span style="color: whitesmoke;">${data.public_repos}</span></p>
        </div>
        
        <div class="gitData">
        <p>Followers <br> <br> <span style="color: whitesmoke;">${data.followers}</span></p>
        </div>
        
        <div class="gitData">
        <p>Following <br> <br> <span style="color: whitesmoke;">${data.following}</span></p>
        </div>
        
        </div>
        
        <div class="gitLink">
        <p><i class="fa-solid fa-location-dot loca"></i>${data.location}</p>
        <p><i class="fa-solid fa-link"></i><a class="link" href="${data.html_url}">${data.html_url}</a></p>
        </div>
        `
                input.value = ""        
            }

        }).catch((err) => {
            console.log(err.message);

        })

}