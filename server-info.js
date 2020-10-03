// NEED JQUERY
// jogar.plasmamc.xyz = SERVER IP
// #server-statuss and #players online is <p> html tag


$(document).ready(function() { 
     $.ajax({ 
            type: "GET",
            url: "https://mcstatus.snowdev.com.br/api/query/jogar.plasmamc.xyz",
          }).done(function(response) {
                $("#server-statuss").html('Servidor está ' + ((response.Online) ? 'Online' : 'Offline') + '!'); 
                $("#players-online").html("Há <b><font color='yellow'>"+response.PlayersOnline + "/"+ response.MaxPlayers + "</font></b> jogadores jogando nesse momento");
             }
     )
   });      
