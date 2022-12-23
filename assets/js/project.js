let data = []

function addData(event) {
    event.preventDefault ()

    // Deklarasi variable sama dom buat nangkap value nya
    let projectName = document.getElementById("project_name").value
    let startDate = document.getElementById("start_date").value
    let endDate = document.getElementById("end_date").value
    let description = document.getElementById("description").value
    let nodeJS = document.getElementById("nodejs")
    let reactJS = document.getElementById("reactjs")
    let nextJS = document.getElementById("nextjs")
    let typeScript = document.getElementById("typescript")
    let uploadImage = document.getElementById("upload_image").files
    let imageURL = URL.createObjectURL(uploadImage[0])

    //Deklarasi variable buat icon technology
    let nodeJSImg = ''
    let reactJSImg = ''
    let nextJSImg = ''
    let typeScriptImg = ''

    //Pengkondisian buat masukin img icon ke variable 
    if (nodeJS.checked == true) {
        nodeJSImg = '/assets/img/node-js-icon.svg'
    }
    if (reactJS.checked == true) {
        reactJSImg = '/assets/img/react-js-icon.svg'
    }
    if (nextJS.checked == true) {
        nextJSImg = '/assets/img/nextjs-icon.svg'
    }
    if (typeScript.checked == true) {
        typeScriptImg = '/assets/img/typescript-icon.svg'
    }

    //Ngedeklare variable project
    let project = {
        projectName : projectName,
        startDate : startDate,
        endDate : endDate,
        description : description,
        imageURL : imageURL,
        nodeJSImg,
        reactJSImg,
        nextJSImg,
        typeScriptImg
    }

    //Ngepush value yang ada di project ke data
    data.push(project)
    renderBlog()
    console.log(data.length)
}

//Mengrender data yang telah kita submit
function renderBlog() {
    document.getElementById('projects').innerHTML = ``
// Loop
for (let index = 0; index < data.length; index++) {
    document.getElementById('projects').innerHTML += `
    <a href="/project-detail.html" class="card-project">
        <div class="cover_image">
            <img src="${data[index].imageURL}" alt="">
        </div>
        <div class="card-content">
            <div class="project-name">
                <h3>${data[index].projectName}</h3>
                <h4>Durasi: ${countTime(data[index].startDate, data[index].endDate)} Hari</h4>
            </div>
            <div class="card-text">
                <p>${data[index].description}</p>
            </div>
            <div class="tech_icon">
                <img src="${data[index].nodeJSImg}">
                <img src="${data[index].reactJSImg}">
                <img src="${data[index].nextJSImg}">
                <img src="${data[index].typeScriptImg}">
            </div>
            <div class="btn-card">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    </a>
    `
}

}

// Fungsi Menambahkan waktu

function countTime(startDate , endDate) {
    let inMilisecond = new Date(endDate) - new Date(startDate)
    let selisihHari = inMilisecond / (1000 * 60 * 60 * 24)
    return selisihHari
}