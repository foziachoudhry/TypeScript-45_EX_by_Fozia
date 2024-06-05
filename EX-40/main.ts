//function
function make_album(artist_name: string , album_title: string , tracks?: number){
let album: {artist: string , title: string , tracks?: number} = {
	artist: artist_name,
	
	title: album_title,
};
if(tracks !== undefined){
	album.tracks = tracks;
}
return album;
}

//calling funtion
let myAlubm1 = make_album("Yaeesh no.1" , "Album no.1");

let myAlubm2 = make_album("Azeem no.1" , "Album no.2");

let myAlubm3 = make_album("Ali no.1" , "Album no.3" ,8);
//printing
console.log(myAlubm1);
console.log(myAlubm2);
console.log(myAlubm3);