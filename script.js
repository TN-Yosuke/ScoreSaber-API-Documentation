fetch("https://new.scoresaber.com/api/player/2429129807113296/basic")
            //Response resolves to a readable stream, 
            //so this statement helps us convert it into 
            //a static object
            .then(response => response.json()) 
            //Now that we have the data, let us see what it looks like in console
            .then(responseData => {
                document.getElementById("name").innerHTML = ("Player: " + responseData.playerInfo.playerName);

                document.getElementById("rank").innerHTML = ("Rank: " + responseData.playerInfo.rank);

                document.getElementById("country").innerHTML = ("Country: " + responseData.playerInfo.country);

                document.getElementById("pp").innerHTML = ("PP: " + responseData.playerInfo.pp);
            });