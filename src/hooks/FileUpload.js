import axios from "axios";

export async function FileUpload(e) {
    const file = e.target.files[0]
    let link = ""
    const formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", process.env.NEXT_PUBLIC_API_CLOUDINARY_PERSET_KEY)
    await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_API_CLOUDINARY_CLOUD_NAME}/image/upload`, formData).then(res => {
        link = res.data.url;
    }).catch(err => console.log(err))
    // var reader = new FileReader();
    // reader.onload = function () {
    //     var output = document.getElementById('output');
    //     output.src = reader.result;
    // };
    // reader.readAsDataURL(e.target.files[0]);
    return { link };
}