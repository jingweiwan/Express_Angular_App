const express = require('express');
const path = require('path');
const cors = require('cors');
const axios  = require('axios');
const app = express();

app.use(cors());

api_key = "130d23c5892d2f09760dbbd12cf9b4a5"
/*
app.use(express.static(path.join(__dirname,'dist/Frontend/')));
app.get("/*",function(req,res){
    res.sendFile(path.join(__dirname,'dist/Frontend/index.html'));
})
*/
app.get('/',(req,res)=>{
    res.send("nihao");
});
app.get('/search_movie/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/movie/"+id.toString();
    axios.get(url , {
        params: {   
            api_key: api_key,
            language: 'en-US',
        }
    })
    .then(response=>{
        res.json(response.data);
    })
})
app.get('/search_tv/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/tv/"+id.toString();
    axios.get(url , {
        params: {   
            api_key: api_key,
            language: 'en-US',
        }
    })
    .then(response=>{
        res.json(response.data);
    })
})
app.get('/movie_youtube/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/movie/"+id.toString()+"/videos";
    axios.get(url , {
        params: {   
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
})
app.get('/tv_youtube/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/tv/"+id.toString()+"/videos";
    axios.get(url , {
        params: {   
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
})
app.get('/now_playing',(req,res)=>{
    
    //res.sendFile(path.join(__dirname,'../frontend/dist/Frontend','index.html'));
    url = "https://api.themoviedb.org/3/movie/now_playing"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        
        res.json(response.data);
    })
    
});
app.get('/popular_movie',(req,res)=>{
    
    //res.sendFile(path.join(__dirname,'../frontend/dist/Frontend','index.html'));
    url = "https://api.themoviedb.org/3/movie/popular"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
    
});
app.get('/top_movie',(req,res)=>{
    
    //res.sendFile(path.join(__dirname,'../frontend/dist/Frontend','index.html'));
    url = "https://api.themoviedb.org/3/movie/top_rated"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
    
});
app.get('/trend_movie',(req,res)=>{
    url = "https://api.themoviedb.org/3/trending/movie/day"
    axios.get(url , {
        params: {
            api_key: api_key
        }
    })
    .then(response=>{
        res.json(response.data);
    })
  
})
app.get('/trend_tv',(req,res)=>{
    url = "https://api.themoviedb.org/3/trending/tv/day"
    axios.get(url , {
        params: {
            api_key: api_key
        }
    })
    .then(response=>{
        res.json(response.data);
    })
  
})
app.get('/popular_tv',(req,res)=>{
    
    //res.sendFile(path.join(__dirname,'../frontend/dist/Frontend','index.html'));
    url = "https://api.themoviedb.org/3/tv/popular"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
    
});
app.get('/top_tv',(req,res)=>{
    
    //res.sendFile(path.join(__dirname,'../frontend/dist/Frontend','index.html'));
    url = "https://api.themoviedb.org/3/tv/top_rated"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
    
});
app.get('/recommend_movie/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/movie/"+id.toString()+"/recommendations"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});
//similar movie
app.get('/similar_movie/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/movie/"+id.toString()+"/similar"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});
//recommend TV
app.get('/recommend_tv/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/tv/"+id.toString()+"/recommendations"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});
//similar tv
app.get('/similar_tv/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/tv/"+id.toString()+"/similar"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});
//get tv reviews
app.get('/tv_review/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/tv/"+id.toString()+"/reviews"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});

//get tv cast
app.get('/tv_cast/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/tv/"+id.toString()+"/credits"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});

//get movie reviews
app.get('/movie_review/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/movie/"+id.toString()+"/reviews"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});

//get movie cast
app.get('/movie_cast/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/movie/"+id.toString()+"/credits"
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});

//get cast detail
app.get('/cast_detail/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/person/"+id.toString()
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});

//get cast external id
app.get('/external/:id',(req,res)=>{
    var id = req.params.id;
    url = "https://api.themoviedb.org/3/person/"+id.toString()+"/external_ids";
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: 1
        }
    })
    .then(response=>{
        res.json(response.data);
    })
});

//search



app.get('/search/:search_text',(req,res)=>{
    var text = req.params.search_text;
    url = "https://api.themoviedb.org/3/search/multi"
    
    axios.get(url , {
        params: {
            api_key: api_key,
            language: 'en-US',
            query: text
        }
    })
    .then(response=>{
        for (let i=0; i<response.data.results.length; i++){
            if(response.data.results[i].media_type=="person"){
                response.data.results.splice(i,1);
                i--;
            }
        }
        for (let i=0; i<response.data.results.length; i++){
            if(!response.data.results[i].backdrop_path){
                response.data.results.splice(i,1);
                i--;
            }
        }
        if(response.data.results.length>7){
            
            response.data.results=response.data.results.slice(0,7);
        }
        res.json(response.data.results);
    })
});

app.listen(8080);