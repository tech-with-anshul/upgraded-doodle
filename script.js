// List of students
const students = [
    "Ayush Bhatt", "Lovepreet Singh", "Parth Sinha", "Utkarsh Gautam", "Md.Saif", 
  "Yash Baberwal", "Shivanand Rai", "Shubham Kumar", "Harshit Singh", "Vansh Malik",
  "Anuj", "Tushar", "AKSHAN DHYANI", "MANISH BISHT", "ABHAY SINGH", "KUNDAN KUMAR",
  "Ananya Mishra", "Praneet Sahay", "Jasdev Singh", "Aryan Tandon", "Shivansh Rajput",
  "Abhishek Rawat", "Sarvesh Mathur", "Ritesh Dixit", "Muskan Yadav", "Trisha Dhariya",
  "Rashika Thapa", "Vikrant Yadav", "Riya", "Ishan", "Shiwangi", "Jyoti Choudhary",
  "Ankush Painuly", "Siddharth Bhatt", "Keshav Raturi", "Yash Singh Gusain",
  "Ishant Hatwal", "Mansi Panwar", "Basant Ballabh Bhatt", "Himanshu Yadav",
  "Kartik Raina", "Ansh Chandan", "Himanshu Kandpal", "Shivansh Sahil", "MUSKAN SAHANI",
  "Vidisha Chauhan", "ROHIT SINGH ADHIKARI", "SACHIN GARIYA", "Keshav", "Bharti Rawat",
  "Lucky Singh Panwar", "Deepak Rawat", "Krish Kumar", "Lalit Nandan", "Neeraj Mer",
  "Saurabh Mehra", "Abhay Bisht", "Dev Ashish Saklani", "Parimanjhan Negi", "Mahaveer",
  "Ranvbir Kumar Das", "Priyanshu Raj", "Ritik Kumar", "Himanshu", "Rohit Lakharwal",
  "Aaditya Prasad", "Sanskriti Gupta", "Aarshista Joshi", "Mukta Pal", "Anisha Dhanda",
  "Priyanshu Bisht", "Shivan Negi", "Shubham Chand", "Akhil Puri", "Prakash Kumar",
  "Parul Saxena", "Kartik Kumar Singh", "Aditya Kumar", "Anjali Rana", "Rachit",
  "Suraj Kumar", "Gurmeet Singh", "Karan Singh Rawat", "Anika Mishra", "Apporva",
  "Khushi", "Rudra Aneja", "Kanwal", "Anurag Parihar", "Shagun Salal", "Sahil Sahoo",
  "Manisha Parihar", "Priyanshu Morya", "Manisha Nayal", "Kanishka Rawat", "Anjali Rajput",
  "Yash Kholiya", "Rahul Bisht", "Atul", "Shivansh Dubey", "Vaibhav Patel", "Amit Kumar",
  "Aruna Rawat", "Sahil Khan", "Ashka Verma", "Ayush Kumar", "Rishi Yadav", "Shivam",
  "Yash Mishra", "Vansh Rana", "Akashdeep Kandari", "Rajesh Dhirvan", "Tanuja Negi",
  "Aman", "Akansha Rai", "Sagar Singh", "Vansh Rana", "Abhishek Khati", "Rahul Choudhary",
  "Diksha Chauhan", "Akash", "Sundaram Sharma", "Himanshu Rawat", "Aakashi Tyagi",
  "Abhay Singh Dhek", "Aniket Rawat", "Neha Rawat", "Kevin Roy", "Chetan Pal",
  "Abhay Dhek", "Rajat Joshi", "Vishal Naugain", "Harpreet Singh", "Prince Bharadwaj",
  "Lucky Bisht", "Shrinjay Sumit", "Gaurav Goswami", "Lavana Moirangthem", "Vivek Singh",
  "Mayank", "Abhay Kumar", "Vivek Singh", "Rezim Titoria", "Manan",
  "Rishu Raj", "Jatin Dangi", "Kuldeep Singh Rawat", "Amvi Karotia", "Gaurav Singh Singhwal",
  "Anamika", "Himanshu Choudhary", "Gaurav Singwal", "Priyanshu Rajput"
];

// Function to load certificates
function loadCertificates() {
    const container = document.getElementById("certificate-list");

    students.forEach(name => {
        const studentDiv = document.createElement("div");
        studentDiv.classList.add("certificate");

        const img = document.createElement("img");
        img.src = `certificates/${name}.png`;  // Assumes images are named after students
        img.alt = `${name}'s Certificate`;
        img.onclick = () => showDownloadButton(img, name);

        const button = document.createElement("button");
        button.innerText = "Download";
        button.classList.add("download-btn");
        button.onclick = () => downloadCertificate(name);

        studentDiv.appendChild(img);
        studentDiv.appendChild(button);
        container.appendChild(studentDiv);
    });
}

// Function to filter certificates based on search input
function filterCertificates() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".certificate").forEach(cert => {
        const name = cert.querySelector("img").alt.toLowerCase();
        cert.style.display = name.includes(searchValue) ? "block" : "none";
    });
}

// Function to show the download button when image is clicked
function showDownloadButton(img, name) {
    const button = img.nextElementSibling;
    button.style.display = "block";
}

// Function to download the certificate
function downloadCertificate(name) {
    const link = document.createElement("a");
    link.href = `certificates/${name}.png`;
    link.download = `${name}_Certificate.png`;
    link.click();
}

// Load certificates on page load
window.onload = loadCertificates;
