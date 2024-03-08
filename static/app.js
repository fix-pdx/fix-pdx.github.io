
let success = 0;
let fail = 0;


const conclusion = () => {
    let imgWrap = document.getElementById("img-wrap")
    imgWrap.style.display = "block"

    let downloadBtn = document.getElementById("download-btn")

    if (success > fail){
        document.getElementById("g-post").style.display = "block"
        downloadBtn.href = "/static/postcards/success.webp"
        downloadBtn.download = "success.webp"
        alert(`Success: ${success}`) 
    } else { 
        document.getElementById("b-post").style.display = "block"
        downloadBtn.href = "/static/postcards/fail.webp"
        downloadBtn.download = "fail.webp"
        alert(`Fail: ${fail}`)
    }
    document.getElementById("q-5").style.display = "none"
}
const scorer = (obj, q) => {
    console.log(obj)

    if(obj == "sp"){ // add to score
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