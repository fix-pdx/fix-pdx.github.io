
let success = 0;
let fail = 0;


const conclusion = () => {
    let imgWrap = document.getElementById("img-wrap")
    imgWrap.style.display = "flex"

    let downloadBtn = document.getElementById("download-btn")

    if (success > fail){ // success
        document.getElementById("s-post").style.display = "block"
        downloadBtn.href = "/static/postcards/success.jpg"
        downloadBtn.download = "success.jpg"
        document.getElementById("success-text").style.display = "block"
    } else { // fail
        document.getElementById("f-post").style.display = "block"
        downloadBtn.href = "/static/postcards/fail.jpg"
        downloadBtn.download = "fail.jpg"
        document.getElementById("fail-text").style.display = "block"
    }
    document.getElementById("q-5").style.display = "none"
}
const scorer = (obj, q) => {
    console.log(obj)

    if(obj == "success"){ // add to score
        success ++;
    } else {
        fail ++;
    }
    if(q == '5'){ // end condition
        conclusion()
    } else { // next question
        let curr = document.getElementById(`q-${q}`)
        curr.style.display = "none"
    
        let next = document.getElementById(`q-${Number(q)+1}`)
        next.style.display = "flex"
    }
}