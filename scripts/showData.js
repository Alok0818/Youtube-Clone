//  make api call and grab data
//  append data

async function getData(url){

    try{

        let res = await fetch(url)
        let data = await res.json()
        return data
    
    }

    catch (e){
        console.log('e',e)
    
    }

    

}

function appendData(data, location) {

    data.forEach(({title,image}) => {

        let div = document.createElement('div');

        let p = document.createElement('p');
        p.innerHTML = title;

        let img = document.createElement('img');
        img.src = image;

        div.append(img,p);

        location.append(div)
        
    });


}

export { getData, appendData }

