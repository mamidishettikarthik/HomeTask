window.onload = function () {
    var maxResults=15;
    var API_KEY = "AIzaSyDJijpMHa4XIPhhUPikeKv7iAuB0EB8USA";
    window.onresize = () => { 
        applyPagination();
    };
    document.getElementById("myForm").addEventListener("submit",function(e){
        e.preventDefault()
        var topic = document.getElementById("search").value;
        videoSearch(API_KEY, topic, maxResults)
    });
    var videoData;
    function videoSearch(API_KEY, topic, maxResults) {
        fetch("https://www.googleapis.com/youtube/v3/search?key=" +API_KEY
            + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + topic)
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                videoData = data;
                applyPagination();
            })
            .catch((error)=>{
                console.log(error);
            }) 
    }
    function applyPagination() {
        function Pagination(){
            const prevButton=document.getElementById('button_prev');
            const nextButton=document.getElementById('button_next');
            const clickPageNumber=document.querySelectorAll('.clickPageNumber');
            let current_page=1;
            var records;
            if (screen.width>=1100) {
                records=5;
            }
            else if (screen.width>=700) {
                records = 3;
            }
            else if (screen.width>=400) {
                records=2;
            }
            else {
                records=1;
            }
            this.init=function(){
                changePage(1);
                pageNumbers();
                selectedPage();
                clickPage();
                addEventListeners();
            }
            let addEventListeners=function(){
                prevButton.addEventListener('click', prevPage);
                nextButton.addEventListener('click', nextPage);
            }
            let selectedPage=function(){
                let page_number=document.getElementById('page_number').getElementsByClassName('clickPageNumber');
                for(let i=0;i<page_number.length;i++){
                    if(i==current_page-1){
                        page_number[i].style.opacity= "1.0";
                    }
                    else{
                        page_number[i].style.opacity= "0.5";
                    }
                }
            }
            let checkButtonOpacity=function () {
                current_page==1 ? prevButton.classList.add('opacity') : prevButton.classList.rem('opacity');
                current_page==numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
            }
            var thumbnailsObject = [];
            var videoIdsObject = [];
            var descriptionObject = [];
            var titlesObject = [];
            var authorsObject = [];
            var publishedDateObject = [];
            videoData.items.forEach((item) => {
                let thumbnail = item.snippet.thumbnails.medium.url;
                thumbnailsObject.push(thumbnail);
                let description = item.snippet.description;
                descriptionObject.push(description);
                let videoId = item.id.videoId;
                videoIdsObject.push(videoId);
                let title = item.snippet.title;
                titlesObject.push(title);
                let author = item.snippet.channelTitle;
                authorsObject.push(author);
                let publishedDate = item.snippet.publishedAt.substring(0, 10);
                publishedDateObject.push(publishedDate);
            });
            let changePage=function(page){
                if (page<1) {
                    page=1;
                }
                if (page>(numPages()-1)) {
                    page = numPages();
                }
                document.getElementById('videos').innerHTML = "";
                document.getElementById('videoDetails').innerHTML = "";
                for (var i = (page - 1)* records; i < (page * records) && i < maxResults; i++) {
                    img = `<img src="${thumbnailsObject[i]}" alt="Thumbnail" width=250px height=150px>`
                    document.getElementById("videos").innerHTML += img;
                    let videoDetailsDiv = document.createElement("div");
                    videoDetailsDiv.id = "vidDetails"
                    videoDetailsDiv.innerHTML = `<p> 
                                      <b>Title : -</b> <a target="_blank" href="https://www.youtube.com/watch?v=${videoIdsObject[i]}">${titlesObject[i]}</a> <br>
                                      <b>Click the Title to watch the video..!</b><br> 
                                      <b>Author : -</b> ${authorsObject[i]} <br>
                                       <b>Published Date : -</b> ${publishedDateObject[i]} <br>
                                       <b>Description : -</b> ${descriptionObject[i]} <br>
                                      </p>`
                    document.getElementById("videoDetails").appendChild(videoDetailsDiv);
                }
                checkButtonOpacity();
                selectedPage();
            }
            let prevPage=function(){
                if (current_page > 1){
                    current_page--;
                    changePage(current_page);
                }
            }
            let nextPage=function(){
                if (current_page<numPages()){
                    current_page++;
                    changePage(current_page);
                }
            }
            let clickPage=function(){
                document.addEventListener('click', function (e) {
                    if (e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")){
                        current_page = e.target.textContent;
                        changePage(current_page);
                    }
                });
            }
            let pageNumbers=function () {
                let pageNumber = document.getElementById('page_number');
                pageNumber.innerHTML = "";

                for (let i=1;i<numPages()+1;i++) {
                    pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
                }
            }
            let numPages=function(){
                return Math.ceil(maxResults/records);
            }
        }
        let pagination=new Pagination();
        pagination.init();
    }
    const targetDiv =document.getElementById("pagination-block");
    const btn =document.getElementById("search-btn");
    btn.onclick =function() {
        targetDiv.style.display = "inline-block";
    }
    document.getElementById("search-btn").addEventListener('click', function (){
        document.getElementById("load").classList.toggle('tog');
    });
}
